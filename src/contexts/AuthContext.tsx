import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { createContext, useState } from "react";

export interface UserDataProps {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
}

interface AuthContextProps {
  requestCode: (login: string) => void;
  storeToken: (login: string) => void;
  getUserData: () => Promise<UserDataProps>;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const { push } = useRouter();

  function requestCode(login: string) {
    const params = {
      client_id: '733fb55840126282b0f1',
      redirect_uri: 'http://localhost:3000/Login',
      login,
      scope: 'user',
      allow_signup: 'true'
    }

    push('https://github.com/login/oauth/authorize?' + stringify(params));
  }

  function storeToken(token: string){
    if(token !== 'none'){
      Cookies.set('token', token );
      Cookies.set('logged', 'true');
    }
  }

  async function getUserData(): Promise<UserDataProps> {
    const data: UserDataProps = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token 0fd529bcdec7af3b39cb75dbcd6d890135581e5b`
      }
    }).then(res => res.data).catch(err => console.log(err));

    return data;
  }

  return(
    <AuthContext.Provider value={{
      requestCode,
      storeToken,
      getUserData
    }}>
      {children}
    </AuthContext.Provider>
  )
}