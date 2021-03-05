import React from 'react';
import { userDataPros } from '../@types/userData';
import styles from '../styles/components/ThumbShare.module.css';

export function ThumbShare({
  challengesCompleted,
  level,
  currentExperience
}: userDataPros): JSX.Element {
  return (
    <div className={styles.overlay}>
      <div className={styles.levelupContainer}>
        <div className={styles.first}>
          <header>{level}</header>

          <strong>Avancei para o próximo level</strong>
        </div>

        <div className={styles.second}>
          <strong>DESAFIOS</strong>
          <p>
            <span>{challengesCompleted}</span> completados
          </p>

          <strong>EXPERIÊNCIA</strong>
          <p>
            <span>{currentExperience}</span> xp
          </p>

          <img src="/logo-full.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
