import {ThumbShare} from '../components/ThumbShare';

const Teste: React.FC = () => {

  const data = {
    challengesCompleted: 5, 
    level: 2, 
    currentExperience: 500
  }

  return <ThumbShare  {...data}/>;
}

export default Teste;