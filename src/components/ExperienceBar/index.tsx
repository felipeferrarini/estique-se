import React, { useContext } from 'react';
import { MdArrowDropUp } from 'react-icons/md';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container, CurrentExperience } from './styles';

export function ExperienceBar(): JSX.Element {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          <MdArrowDropUp />
          {currentExperience} xp
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}
