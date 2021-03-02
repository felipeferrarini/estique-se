import React, { useState, useEffect, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import { firebaseClient } from '../services/firebaseClient';

export const AuthContext = createContext<{
  user: firebaseClient.default.User | null | undefined;
}>({
  user: undefined
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebaseClient.default.User | null | undefined>(
    undefined
  );

  useEffect(() => {
    return firebaseClient.default.auth().onIdTokenChanged(async user => {
      console.log('auth changed');
      console.log(user ? user.uid : 'NO USER');
      if (!user) {
        setUser(null);
        Cookies.set('token', '');
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      Cookies.set('token', token);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
