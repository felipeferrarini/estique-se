import Head from "next/head";
import { disconnect } from "process";
import React from "react";
import ChallengeBox from "../components/ChallengeBox";
import {CompletedChallenges} from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountDownProvider } from "../contexts/CountDownContex";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
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
  )
}
