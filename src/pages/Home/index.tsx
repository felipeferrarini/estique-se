import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import ChallengeBox from "../../components/ChallengeBox";
import {CompletedChallenges} from "../../components/CompletedChallenges";
import { CountDown } from "../../components/CountDown";
import { ExperienceBar } from "../../components/ExperienceBar";
import { Profile } from "../../components/Profile";
import SideBar from "../../components/SideBar";
import { AuthContext, AuthProvider } from "../../contexts/AuthContext";
import { ChallengesProvider } from "../../contexts/ChallengesContext";
import { CountDownProvider } from "../../contexts/CountDownContex";
import styles from '../../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC<HomeProps> = ({ 
  level, 
  currentExperience, 
  challengesCompleted
}) => {

  const { getUserData } = useContext(AuthContext);

  // const user = getUserData();

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
                <Profile userName={"felipe"}/>
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

  const { level, currentExperience, challengesCompleted, userName } = ctx.req.cookies;

  return {
    props: { 
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}