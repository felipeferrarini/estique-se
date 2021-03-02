import styles from '../styles/components/SideBar.module.css';
import { BiHomeAlt } from 'react-icons/bi';
import { FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { MdExitToApp } from 'react-icons/md';
import { firebaseClient } from '../services/firebaseClient';

export default function SideBar() {
  const { pathname, push } = useRouter();

  const router = useRouter();

  async function logOut() {
    await firebaseClient.default.auth().signOut();
    router.reload();
  }

  return (
    <div className={styles.container}>
      <img src="/icone.svg" alt="Icone" onClick={() => push('/')}/>
      <div className={styles.navigate}>
        <button 
          className={
            `${styles.navigateButton} ${pathname === '/Home' && styles.navigateButtonActive}`
          }
          onClick={() => push('/Home')}
        >
          <BiHomeAlt/>
        </button>
        <button
          className={
            `${styles.navigateButton} ${pathname === '/Leaderboard' && styles.navigateButtonActive}`
          }
          onClick={() => push('/Leaderboard')}
        >
          <FiAward/>
        </button>
      </div>
      <button onClick={logOut} className={styles.exitButton}>
        <MdExitToApp/>
      </button>
    </div>
  )
}
