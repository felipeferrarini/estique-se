import { createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';
import { firebaseClient } from '../services/firebaseClient';
import { useAuth } from './AuthContext';

interface challengeProps {
  type: "body" | "eye" | string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: challengeProps | null;
  resetChallenge: () => void;
  completeChallenge: () => void;
  experienceToNextLevel: number;
  closeLevelUpModal: () => void;
}

interface challengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ 
  children, 
  ...rest
}: challengesProviderProps) {

  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState<null | challengeProps>(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const { user } = useAuth();

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    if(user){
      const db =  firebaseClient.default.firestore();

      db.collection('users').doc(user?.uid).update({
        level,
        currentExperience,
        challengesCompleted
      })
    }
  }, [level, currentExperience, challengesCompleted]);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal () {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge(){
    const random = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[random];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
      new Notification("Novo desafio", {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted +1);
  }

  return(
    <ChallengesContext.Provider 
      value={{ 
        level, 
        currentExperience, 
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      { children }
      {isLevelUpModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
  );
}