import styles from '../styles/components/SideBar.module.css';
import { BiHomeAlt } from 'react-icons/bi';
import { FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { MdExitToApp } from 'react-icons/md';

export default function SideBar() {
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      <img src="/icone.svg" alt="Icone"/>
      <div className={styles.navigate}>
        <button 
          className={
            `${styles.navigateButton} ${pathname === '/App' && styles.navigateButtonActive}`
          }
        >
          <BiHomeAlt/>
        </button>
        <button
          className={
            `${styles.navigateButton} ${pathname === '/Leaderboard' && styles.navigateButtonActive}`
          }
        >
          <FiAward/>
        </button>
      </div>
      <button className={styles.exitButton}>
        <MdExitToApp/>
      </button>
    </div>
  )
}
