import React from 'react';
import { ThumbShare } from '../components/ThumbShare';
import RenderAsImage, { IRenderAsImageProps } from 'react-render-as-image';

const Teste: React.FC = () => {
  const data = {
    challengesCompleted: '5',
    level: '25',
    currentExperience: '500',
    displayName: 'Felipe Ferrarini',
    photoURL: 'https://github.com/felipeferrarini.png',
    email: 'ferrarinifelipe@gmail.com',
    theme: 'light'
  };

  // return (
  //   <ThumbShare  {...data}/>
  // );

  return (
    <RenderAsImage format="png">
      <ThumbShare {...data} />
    </RenderAsImage>
  );
};

export default Teste;
