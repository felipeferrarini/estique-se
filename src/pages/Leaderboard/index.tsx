import React from 'react';
import { GetServerSideProps } from 'next';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import {
  Container,
  ContainerOver,
  TableExperience,
  TablePosition,
  TableProfile
} from '../../styles/pages/Leaderboard.styles';

interface userProps {
  displayName: string;
  email: string;
  photoURL: string;
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

interface Leaderboard {
  users: userProps[];
}

function Leaderboard({ users }: Leaderboard): JSX.Element {
  return (
    <ContainerOver>
      <Container>
        <h1>Leaderboard</h1>

        <table>
          <thead>
            <tr>
              <th>POSIÇÃO</th>
              <th>USUÁRIO</th>
              <th>DESAFIOS</th>
              <th>EXPERIÊNCIA</th>
            </tr>
          </thead>
          <tbody>
            {users
              .sort(function (a, b) {
                return b.level - a.level;
              })
              .map((user, index) => (
                <tr key={index}>
                  <TablePosition>{index + 1}</TablePosition>

                  <TableProfile>
                    <img src={user.photoURL} alt="Perfil do usuario" />
                    <div>
                      <strong>{user.displayName}</strong>
                      <span>
                        <img src="/icons/level.svg" alt="Level" />
                        Level {user.level}
                      </span>
                    </div>
                  </TableProfile>

                  <TableExperience>
                    <div>
                      <strong>{user.challengesCompleted}</strong> completados
                    </div>
                  </TableExperience>

                  <TableExperience>
                    <div>
                      <strong>{user.currentExperience}</strong> xp
                    </div>
                  </TableExperience>
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
    </ContainerOver>
  );
}

export default Leaderboard;

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { token } = ctx.req.cookies;
    await firebaseAdmin.auth().verifyIdToken(token);

    const { docs } = await firebaseAdmin
      .firestore()
      .collection('users')
      .get()
      .then(querySnaphot => {
        return querySnaphot;
      });

    const users: userProps[] = [];

    docs.forEach(doc => {
      users.push(doc.data() as userProps);
    });

    return {
      props: {
        users
      }
    };
  } catch (err) {
    // console.log(err);

    return {
      props: {} as never,
      redirect: {
        statusCode: 302,
        destination: '/Login'
      }
    };
  }
};
