import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CloseButton, Container, Overlay, ShareButton } from './styles';

export function LevelUpModal(): JSX.Element {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <CloseButton type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </CloseButton>

        <ShareButton className="twitter">
          Compartilhar no Twitter
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 1.00005C21.0424 1.67552 19.9821 2.19216 18.86 2.53005C18.2577 1.83756 17.4573 1.34674 16.567 1.12397C15.6767 0.901206 14.7395 0.957242 13.8821 1.2845C13.0247 1.61176 12.2884 2.19445 11.773 2.95376C11.2575 3.71308 10.9877 4.61238 11 5.53005V6.53005C9.24263 6.57561 7.50127 6.18586 5.93101 5.39549C4.36074 4.60513 3.01032 3.43868 2 2.00005C2 2.00005 -2 11 7 15C4.94053 16.398 2.48716 17.099 0 17C9 22 20 17 20 5.50005C19.9991 5.2215 19.9723 4.94364 19.92 4.67005C20.9406 3.66354 21.6608 2.39276 22 1.00005Z"
              fill="#2AA9E0"
            />
          </svg>
        </ShareButton>
        <ShareButton className="facebook">
          Compartilhar no Facebook
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
              fill="#3B5998"
            />
          </svg>
        </ShareButton>
      </Container>
    </Overlay>
  );
}
