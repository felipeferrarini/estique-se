import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  & > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    position: relative;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid ${props => props.theme.colors.background};
    }

    span:last-child {
      border-left: 1px solid ${props => props.theme.colors.background};
    }
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const StartButton = styled.button`
  width: 100%;
  height: 5rem;
  position: relative;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  background: ${props =>
    props.className === 'startButtonActive'
      ? props.theme.colors.white
      : props.theme.colors.primary};
  color: ${props =>
    props.className === 'startButtonActive' ? props.theme.colors.text : '#fff'};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  :not(:disabled):hover {
    background: ${props =>
      props.className === 'startButtonActive'
        ? props.theme.colors.red
        : props.theme.colors.primaryDark};
    color: ${props => props.className === 'startButtonActive' && '#fff'};
  }

  :disabled {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
    border-radius: 5px 5px 0 0;
  }

  :disabled::after {
    content: '';
    width: 100%;
    height: 5px;
    background: ${props => props.theme.colors.secondary};
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 5px 5px;
  }

  svg {
    margin-left: 0.5rem;
    margin-top: 1px;
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
