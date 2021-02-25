import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/components/CountDown.module.css';
import {FaPlay, FaTimes} from 'react-icons/fa';
import { MdCheck, MdCheckBox, MdCheckCircle, MdClose, MdPlayArrow } from 'react-icons/md';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleCountDown = () =>{
    if (isActive){
      setIsActive(false);
      clearTimeout(countdownTimeout);
      setTime(0.1 * 60);
    } else {
      setIsActive(true);
    }

  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

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
        className={`${styles.startButton} ${isActive && styles.startButtonActive}`} 
        type="button"
        onClick={handleCountDown}
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
