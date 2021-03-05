import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      height: 100%;
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 2px solid ${props => props.theme.colors.line};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${props => props.theme.colors.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: -1.5rem -2rem;
    margin-top: 0;

    button {
      height: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-top: 2px solid ${props => props.theme.colors.line};

      font-size: 1rem;
      font-weight: 600;

      transition: all 0.2s;
    }
  }
`;

export const ChallengeFailedButton = styled.button`
  background: ${props => props.theme.colors.redLight};
  border-radius: 0 0 0 5px;
  border: none;
  border-right: 1px solid ${props => props.theme.colors.line};
  color: ${props => props.theme.colors.red};

  :hover {
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    border-color: transparent;
  }
`;

export const ChallengeCompletedButton = styled.button`
  background: ${props => props.theme.colors.greenLight};
  border-radius: 0 0 5px 0;
  border: none;
  border-left: 1px solid ${props => props.theme.colors.line};
  color: ${props => props.theme.colors.green};

  :hover {
    background: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    border-color: transparent;
  }
`;
