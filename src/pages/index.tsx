import { useRouter } from 'next/dist/client/router';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../styles/pages/Landing.module.css';

export default function Landing () {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <header>
          <h1>
            Levante.se | Saúde durante o Home Office
          </h1>
          <h2>
            Next Level Week #04
          </h2>
        </header>
        <button onClick={() => router.push('/Login')}>
          Login
          <FaArrowRight/>
        </button>
        <img src="/logo-landing.svg" alt=""/>
      </div>
    </div>
  )
}