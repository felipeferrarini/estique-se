import Head from 'next/head';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContex';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
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
    </ChallengesProvider>
  );
}

export default MyApp
