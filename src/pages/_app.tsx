import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css'
import NProgress from 'nprogress';
import Router from 'next/router';
import { AuthProvider } from '../contexts/AuthContext';
import { FirestoreProvider } from '../contexts/FirestoreContext';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <FirestoreProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Projeto criado durante o Next Level Week #4 da RockectSeat"
          />
          <title>Home Office Health</title>
        </Head>
        <Component {...pageProps} />
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default MyApp
