import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      white: string;
      black: string;
      primary: string;
      primaryDark: string;
      primaryLight: string;
      primaryTransparent: string;
      secondary: string;
      secondaryLight: string;
      twitter: string;
      facebook: string;
      google: string;
      background: string;
      text: string;
      line: string;
      title: string;
      red: string;
      redLight: string;
      green: string;
      greenLight: string;
      gray: string;
    };
  }
}
