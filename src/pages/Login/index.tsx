import styles from '../../styles/pages/Login.module.css';
import { FaGithub } from 'react-icons/fa'
import { MdChevronRight } from 'react-icons/md';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    router.push('/App');
  }

  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo"/>
      <div className={styles.main}>
        <img src="/logo-white.svg" alt="Logo Home Office Healh"/>
        
        <strong>Bem-vindo</strong>
        
        <p>
          <FaGithub/>
          Faça login com seu Github para começar
        </p>

        <form className={styles.login} onSubmit={handleSubmit}>
          <input 
            placeholder="Digite seu username" 
            type="text" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button 
            className={`${styles.loginButton} ${userName.length > 0 && styles.loginButtonActive}`}
          >
            <MdChevronRight/>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;