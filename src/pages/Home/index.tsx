import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ChallengeBox from '../../components/ChallengeBox';
import { CompletedChallenges } from '../../components/CompletedChallenges';
import { CountDown } from '../../components/CountDown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { CountDownProvider } from '../../contexts/CountDownContex';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import { firebaseClient } from '../../services/firebaseClient';
import { Container, ContainerOver } from '../../styles/pages/Home.styles';
import { userDataPros } from '../../@types/userData';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  user: firebaseClient.default.User | null | undefined;
}

const Home: React.FC<HomeProps> = ({
  level,
  currentExperience,
  challengesCompleted
}) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <ContainerOver>
        <Container>
          <Head>
            <title>Inicio | Home Office Health</title>
          </Head>

          <ExperienceBar />

          <CountDownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <CountDown />
              </div>

              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountDownProvider>
        </Container>
      </ContainerOver>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { token } = ctx.req.cookies;
    const user = await firebaseAdmin.auth().verifyIdToken(token);

    const {
      level,
      currentExperience,
      challengesCompleted
    } = await firebaseAdmin
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(res => {
        return res.data() as userDataPros;
      });

    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
        user
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
