import SideBar from '../../components/SideBar';
import styles from '../../styles/pages/Leaderboard.module.css';
import persons from '../../../personas.json';
import { GetServerSideProps } from 'next';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import { userDataPros } from '../../contexts/FirestoreContext';

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

function Leaderboard({ users }: Leaderboard) {
  return (
    <div className={styles.containerOver}>
      <SideBar/>
      <div className={styles.container}>
        <h1>
          Leaderboard
        </h1>

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
            {users.sort(function(a, b){return b.level-a.level}).map((user, index) => (
              <tr key={index}>
                <td className={styles.tablePosition}>
                  {index+1}
                </td>

                <td className={styles.tableProfile}>
                  <img src={user.photoURL} alt="Perfil do usuario"/>
                  <div>
                    <strong>{user.displayName}</strong>
                    <span>
                      <img src="/icons/level.svg" alt="Level"/>
                      Level {user.level}
                    </span>
                  </div>
                </td>

                <td 
                  className={styles.tableExperience}
                >
                  <div>
                    <strong>{user.challengesCompleted}</strong> completados
                  </div>
                </td>
                
                <td 
                  className={styles.tableExperience}
                >
                  <div>
                    <strong>{user.currentExperience}</strong> xp
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Leaderboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  try {
    const { token } = ctx.req.cookies;
    await firebaseAdmin.auth().verifyIdToken(token);

    const { docs } = await firebaseAdmin.firestore()
      .collection('users')
      .get()
      .then(querySnaphot => {
        return querySnaphot;
    });

    const users:userProps[] = [];

    docs.forEach((doc)=> {
      users.push(doc.data() as userProps);
    });

    return {
      props: { 
        users
      }
    }
  } catch (err) {
    // console.log(err);

    return {
      props: {} as never,
      redirect: {
        statusCode: 302,
        destination: '/Login',
      }
    };
  }
}