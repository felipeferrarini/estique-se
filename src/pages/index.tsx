import Head from "next/head";
import { disconnect } from "process";
import React from "react";
import {CompletedChallenges} from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inicio | Home Office Health</title>
      </Head>

      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
        </div>

        <div>
          
        </div>
      </section>
    </div>
  )
}
