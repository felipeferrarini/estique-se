import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { userDataPros } from '../@types/userData';
import { firebaseClient } from '../services/firebaseClient';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import { useAuth } from './AuthContext';

interface CustomThemeContextProps {
  toogleTheme: () => void;
}

export const CustomThemeContext = createContext({} as CustomThemeContextProps);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const [theme, setTheme] = useState(light);

  async function initTheme() {
    const db = firebaseClient.default.firestore();
    const { theme } = await db
      .collection('users')
      .doc(user?.uid)
      .get()
      .then(res => {
        return res.data() as userDataPros;
      });
    setTheme(theme === 'light' ? light : dark);
  }

  useEffect(() => {
    if (user) {
      initTheme();
    }
  }, [user]);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);

    const db = firebaseClient.default.firestore();

    db.collection('users')
      .doc(user?.uid)
      .update({
        theme: theme.title === 'light' ? 'dark' : 'light'
      });
  };

  return (
    <CustomThemeContext.Provider value={{ toogleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
