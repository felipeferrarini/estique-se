import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { GetServerSideProps } from 'next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { firebaseAdmin } from '../../services/firebaseAdmin';
import { firebaseClient } from '../../services/firebaseClient';
import React, { useContext } from 'react';
import { Container, Main, Providers } from '../../styles/pages/Login.styles';
import { AuthContext } from '../../contexts/AuthContext';

function Login(): JSX.Element {
  const { initUser } = useContext(AuthContext);

  // função para adiocionar algo em todos os usuarios do firebase
  const handleTeste = () => {
    const db = firebaseClient.default.firestore();

    db.collection('users')
      .get()
      .then(res => {
        res.forEach(doc => {
          db.collection('users').doc(doc.id).update({
            theme: 'light'
          });
        });

        console.log('terminou');
      });
  };

  const handleSubmit = async (type: 'facebook' | 'github' | 'google') => {
    let provider: firebaseClient.default.auth.AuthProvider;

    switch (type) {
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
      .then(({ user }) => {
        initUser(user)
          .then(() => {
            window.location.href = '/Home';
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/account-exists-with-different-credential':
            toast.error(
              'Conta já cadastrada através de outro seriço (google, facebook ou github)'
            );
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
      <Container>
        <img src="/logo.svg" alt="Logo" />
        <Main>
          <img src="/logo-white.svg" alt="Logo Estique.se" />

          <strong>Bem-vindo</strong>

          <p>Faça login com o Google, GitHub ou Facebook para começar</p>

          <Providers>
            <button
              className="Google"
              onClick={() => handleSubmit('google')}
              type="button"
            >
              <FaGoogle />
              Google
            </button>
            <button
              className="GitHub"
              onClick={() => handleSubmit('github')}
              type="button"
            >
              <FaGithub />
              GitHub
            </button>
            <button
              className="Facebook"
              onClick={() => handleSubmit('facebook')}
              type="button"
            >
              <FaFacebook />
              Facebook
            </button>
          </Providers>
          <a href="#">Problemas de acesso? entre em contato</a>
          {/* <button onClick={handleTeste}>teste</button> */}
        </Main>
      </Container>
    </>
  );
}

export default Login;

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { token } = ctx.req.cookies;
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
