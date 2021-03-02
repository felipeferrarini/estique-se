import { GetServerSideProps } from "next";
import Head from "next/head";
import ChallengeBox from "../../components/ChallengeBox";
import {CompletedChallenges} from "../../components/CompletedChallenges";
import { CountDown } from "../../components/CountDown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import SideBar from "../../components/SideBar";
import { ChallengesProvider } from "../../contexts/ChallengesContext";
import { CountDownProvider } from "../../contexts/CountDownContex";
import { userDataPros } from "../../contexts/FirestoreContext";
import { firebaseAdmin } from "../../services/firebaseAdmin";
import { firebaseClient } from "../../services/firebaseClient";
import styles from '../../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  user: firebaseClient.default.User | null | undefined
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
      <div className={styles.containerOver}>
        <SideBar/>
        <div className={styles.container}>

          <Head>
            <title>Inicio | Home Office Health</title>
          </Head>

          <ExperienceBar/>

          <CountDownProvider>
            <section>
              <div>
                <Profile/>
                <CompletedChallenges/>
                <CountDown/>
              </div>

              <div>
                <ChallengeBox/>
              </div>
            </section>
          </CountDownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  try {
    const {token} = ctx.req.cookies;
    const user = await firebaseAdmin.auth().verifyIdToken(token);

    const { level, currentExperience, challengesCompleted } = await firebaseAdmin.firestore()
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