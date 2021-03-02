import styles from '../../styles/pages/Login.module.css';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { GetServerSideProps } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import { firebaseClient } from '../../services/firebaseClient';
import { useContext } from 'react';
import { FirestoreContext } from '../../contexts/FirestoreContext';

function Login() {

  const { initUser } = useContext(FirestoreContext);

  const handleSubmit = async (type: 'facebook' | 'github' | 'google') => {
    let provider: firebaseClient.default.auth.AuthProvider;

    switch(type){
      case 'google':
        provider = new firebaseClient.default.auth.GoogleAuthProvider();    
        break;
      case 'facebook':
        provider = new firebaseClient.default.auth.FacebookAuthProvider();    
        break;
      case 'github':
        provider = new firebaseClient.default.auth.GithubAuthProvider();    
        break;
      default:
        provider = new firebaseClient.default.auth.GoogleAuthProvider();    
        break;
    }

    await firebaseClient.default
      .auth()
      .signInWithPopup(provider)
      .then(({user}) => {
        initUser(user).then(()=>{
          window.location.href = '/Home';
        }).catch(err => console.log(err));
      })
      .catch(err => {
        switch(err.code){
          case 'auth/account-exists-with-different-credential':
            toast.error('Conta já cadastrada através de outro seriço (google, facebook ou github)');
            break;
          case 'auth/popup-closed-by-user':
            toast.error('A janela foi fechada antes de finalizar o login.');
            break;
          default:
            console.log(err.code);
            break;
        }
      });
  };

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
            Faça login com o Google, GitHub ou Facebook para começar
          </p>

          <div className={styles.external}>
            <button onClick={() => handleSubmit('google')} type="button">
              <FaGoogle/>
              Google
            </button>
            <button onClick={() => handleSubmit('github')} type="button">
              <FaGithub/>
              GitHub
            </button>
            <button onClick={() => handleSubmit('facebook')} type="button">
              <FaFacebook/>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const {token} = ctx.req.cookies;
    await firebaseAdmin.auth().verifyIdToken(token);

    return {
      props: {} as never,
      redirect: {
        statusCode: 302,
        destination: '/Home'
      }
    };
  } catch (err) {
    return { props: {} as never };
  }
};