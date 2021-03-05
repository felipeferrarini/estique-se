import React, { useContext } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container } from './styles';

export function Profile(): JSX.Element {
  const { level } = useContext(ChallengesContext);

  const { user } = useAuth();

  if (!user) {
    return (
      <Container>
        <span>carregando informações...</span>
      </Container>
    );
  }

  return (
    <Container>
      <img src={user?.photoURL || ''} alt="User Name" />
      <div>
        <strong>{user?.displayName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}
