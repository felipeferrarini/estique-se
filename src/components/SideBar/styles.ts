import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 7rem;
  height: 100vh;
  padding: 2.5rem 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  background: ${props => props.theme.colors.white};
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);

  img {
    cursor: pointer;
  }

  .others {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 5rem;
    padding: 0 2.5rem;
    left: 0;
    top: 0;

    .others {
      flex-direction: row;
    }
  }
`;

export const Navigate = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    height: 100%;
    width: max-content;
  }
`;

export const NavigateButton = styled.button`
  height: 4rem;
  width: 100%;
  margin-bottom: 5px;

  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  outline-color: ${props => props.theme.colors.primary};

  border: 0;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    width: 4rem;
    height: 100%;
    margin: 0 5px;
  }

  :hover {
    color: ${props => props.theme.colors.primary};
  }

  &.navigateButtonActive {
    position: relative;
    color: ${props => props.theme.colors.primary};
  }

  &.navigateButtonActive::before {
    content: '';
    height: 100%;
    width: 5px;
    border-radius: 0 5px 5px 0;
    position: absolute;
    background: ${props => props.theme.colors.primary};
    top: 0;
    left: 0;
    transition: all 0.3s;

    @media screen and (max-width: 768px) {
      content: '';
      height: 4px;
      width: 100%;
      border-radius: 0 0 5px 5px;
    }
  }
`;

export const ExitButton = styled.button`
  height: 4rem;
  width: 100%;
  margin-bottom: 5px;

  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  outline-color: ${props => props.theme.colors.google};

  border: 0;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 4rem;
    margin-bottom: 0;
  }

  :hover {
    color: ${props => props.theme.colors.google};
  }
`;

export const SwitchIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
