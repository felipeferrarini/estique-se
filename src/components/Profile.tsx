import { stringify } from 'querystring';
import { useContext, useState } from 'react';
import { AuthContext, UserDataProps } from '../contexts/AuthContext';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

interface ProfileProps {
  userName: string;
}

export function Profile({ userName }: ProfileProps) {
  const { level } = useContext(ChallengesContext);
  const [user, setUser] = useState({} as UserDataProps);

  const { getUserData } = useContext(AuthContext);

  getUserData().then(res => setUser(res));

  return (
    <div className={styles.profileContainer}>
    <img src={user.avatar_url} alt="Felipe Ferrarini"/>

      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}