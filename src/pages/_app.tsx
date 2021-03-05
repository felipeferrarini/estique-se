import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AuthProvider } from '../contexts/AuthContext';
import { GlobalStye } from '../styles/global';
import SideBar from '../components/SideBar';
import { CustomThemeProvider } from '../contexts/CustomThemeContext';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Estique.se e se exercite durante seu dia de trabalho! 
              pensando nisso desenvolvemos o Estique.se para te incentivar a se 
              movimentar e não ficar 100% do tempo sentado na frente do 
              computador."
          />
          <title>Estique.se | Saúde durante o Home Office</title>
        </Head>
        <SideBar />
        <Component {...pageProps} />
        <GlobalStye />
      </CustomThemeProvider>
    </AuthProvider>
  );
};

export default MyApp;
