import { resourceUsage } from 'process';
import { stringify } from 'querystring';
import { useContext, useEffect} from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  const {user} = useAuth();

  if(!user){
    return(
      <div className={styles.profileContainer}>
        <span>carregando informações...</span>
      </div>
    )
  }

  return (
    <div className={styles.profileContainer}>
      <img src={user?.photoURL|| ''}alt="User Name"/>
      <div>
        <strong>{user?.displayName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}