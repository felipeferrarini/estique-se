import styles from '../../styles/pages/Login.module.css';
import { FaGithub } from 'react-icons/fa'
import { MdChevronRight } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { GetServerSideProps } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

interface LoginProps {
  token?: string;
}

function Login({ token }: LoginProps) {
  const [user, setUser] = useState('');
  const { requestCode, storeToken } = useContext(AuthContext);

  useEffect(() => {
    if(token !== '') {
      storeToken(token || 'none');
    }
  }, [token]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    if(user.length > 0) {
      requestCode(user);
    } else {
      toast.error('Digite um nome de usuário!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <button 
              className={`${styles.loginButton} ${user.length > 0 && styles.loginButtonActive}`}
            >
              <MdChevronRight/>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { logged } = ctx.req.cookies;
  const code = ctx.query.code;

  if( logged === 'true' ) {
    return {
      props: {},
      redirect: {
        statusCode: 301,
        destination: '/Home'
      }
    }
  } else if(code) {
    const params = {
      client_id: '733fb55840126282b0f1',
      client_secret: 'fdf0acaaa13ed3bad406911c86a7642bcfc9467b',
      code: code,
      redirect_uri: 'http://localhost:3000/Login',
      state: 'user'
    }

    const token = await axios.post('https://github.com/login/oauth/access_token', params).then(res => {
      const response = new URLSearchParams(res.data);

      if(response.get('error') === 'bad_verification_code') {
        throw new Error('codigo de verificação expirado');
      } else {
        return response.get('access_token')
      }
    }).catch(err => {
      console.log(err.message)
      return 'none';
    });

    return {
      props: {
        code: code || undefined,
        token
      }
    }
  }

  return {
    props: {} as never
  }
}