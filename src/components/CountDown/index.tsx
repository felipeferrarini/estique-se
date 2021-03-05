import React, { useContext } from 'react';
import { MdCheckCircle, MdClose, MdPlayArrow } from 'react-icons/md';
import { CountDownContext } from '../../contexts/CountDownContex';
import { Container, StartButton } from './styles';

export function CountDown(): JSX.Element {
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

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      <StartButton
        disabled={hasFinished}
        className={isActive ? 'startButtonActive' : ''}
        type="button"
        onClick={isActive ? resetCountDown : startCountDown}
      >
        {isActive
          ? 'Abandonar ciclo'
          : hasFinished
          ? 'Ciclo encerrado'
          : 'Iniciar um ciclo'}
        {isActive ? (
          <MdClose />
        ) : hasFinished ? (
          <MdCheckCircle color="#4CD62B" />
        ) : (
          <MdPlayArrow />
        )}
      </StartButton>
    </div>
  );
}
