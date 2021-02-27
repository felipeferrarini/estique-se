import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/components/CountDown.module.css';
import { MdCheckCircle, MdClose, MdPlayArrow } from 'react-icons/md';
import { CountDownContext } from '../contexts/CountDownContex';

export function CountDown() {
  const { 
    minutes, 
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const width = 50;

  return (
    <div>
      <div className={styles.CountDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>
        
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>  
      
      <button 
        disabled={hasFinished}
        className={`
          ${styles.startButton} 
          ${isActive && styles.startButtonActive}
        `} 
        type="button"
        onClick={isActive ? resetCountDown : startCountDown}
      >
        {isActive ? 
          "Abandonar ciclo" : 
          hasFinished ? 
            "Ciclo encerrado" : 
            "Iniciar um ciclo"
        }
        {isActive ? 
          <MdClose/> : 
          hasFinished ? 
            <MdCheckCircle color="#4CD62B"/> : 
            <MdPlayArrow/>
        }
      </button>      
    </div>
  );
}
