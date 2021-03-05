import React, { useState, useEffect, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import { firebaseClient } from '../services/firebaseClient';

interface AuthContextProps {
  user: firebaseClient.default.User | null | undefined;
  initUser: (
    user: firebaseClient.default.User | null | undefined
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: undefined
} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<
    firebaseClient.default.User | null | undefined
  >(undefined);

  async function initUser(
    user: firebaseClient.default.User | null | undefined
  ) {
    const db = firebaseClient.default.firestore();

    await db
      .collection('users')
      .doc(user?.uid)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.exists) {
          db.collection('users')
            .doc(user?.uid)
            .set({
              displayName: user?.displayName,
              email: user?.email,
              photoURL: user?.photoURL,
              level: 1,
              currentExperience: 0,
              challengesCompleted: 0,
              theme: 'light'
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  }

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
    <AuthContext.Provider value={{ user, initUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuth = () => {
  return useContext(AuthContext);
};
