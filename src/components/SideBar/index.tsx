import React, { useContext, useState } from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { FiAward } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { MdExitToApp } from 'react-icons/md';
import { firebaseClient } from '../../services/firebaseClient';
import {
  Container,
  ExitButton,
  Navigate,
  NavigateButton,
  SwitchIcon
} from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { CustomThemeContext } from '../../contexts/CustomThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function SideBar(): JSX.Element {
  const { pathname, push } = useRouter();
  const [checked, setChecked] = useState(false);
  const { colors, title } = useContext(ThemeContext);
  const { toogleTheme } = useContext(CustomThemeContext);

  const router = useRouter();

  async function logOut() {
    await firebaseClient.default.auth().signOut();
    router.reload();
  }

  if (router.pathname === '/Login' || router.pathname === '/') {
    return <div></div>;
  }

  return (
    <Container>
      <img src="/icone.svg" alt="Icone" onClick={() => push('/Home')} />
      <Navigate>
        <NavigateButton
          className={pathname === '/Home' ? 'navigateButtonActive' : ''}
          onClick={() => push('/Home')}
        >
          <BiHomeAlt />
        </NavigateButton>
        <NavigateButton
          className={pathname === '/Leaderboard' ? 'navigateButtonActive' : ''}
          onClick={() => push('/Leaderboard')}
        >
          <FiAward />
        </NavigateButton>
      </Navigate>
      <div className="others">
        <ExitButton onClick={logOut}>
          <MdExitToApp />
        </ExitButton>
        <Switch
          onChange={toogleTheme}
          checked={title === 'dark'}
          onColor={colors.background}
          onHandleColor={colors.primary}
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          checkedHandleIcon={
            <SwitchIcon>
              <FaMoon size={20} />
            </SwitchIcon>
          }
          uncheckedHandleIcon={
            <SwitchIcon>
              <FaSun size={20} />
            </SwitchIcon>
          }
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={50}
          // className="react-switch"
          // id="material-switch"
        />
      </div>
    </Container>
  );
}
