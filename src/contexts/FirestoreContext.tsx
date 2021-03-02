import { createContext, useEffect, useState } from "react";
import { firebaseClient } from "../services/firebaseClient";
import { useAuth } from "./AuthContext";

export interface userDataPros {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface FirestoreProviderProps {
  userData: null | userDataPros;
  initUser: (user: firebaseClient.default.User | null | undefined) => Promise<void>;
}

export const FirestoreContext = createContext({} as FirestoreProviderProps);

export const FirestoreProvider: React.FC = ({children}) => {
  const {user} = useAuth();
  const [userData, setUserData] = useState<null | userDataPros >(null);

  async function initUser(user: firebaseClient.default.User | null | undefined) {
    const db = firebaseClient.default.firestore();

    await db.collection('users').doc(user?.uid).get().then(querySnapshot => {
      if(!querySnapshot.exists) {
        db.collection('users').doc(user?.uid).set({
          displayName: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          level: 1,
          currentExperience: 0,
          challengesCompleted: 0,
        }).catch(err => console.log(err));
      }
    }).catch(err => console.log(err));
  }

  return(
    <FirestoreContext.Provider 
      value={{
        userData,
        initUser
      }}
    >
      {children}
    </FirestoreContext.Provider>
  )
}