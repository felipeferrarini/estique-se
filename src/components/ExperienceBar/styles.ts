import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  background-color: ${props => props.theme.colors.white};
  padding: 1rem;
  border-radius: 5px;

  :hover {
    span {
      display: flex;
    }
  }

  span {
    font-size: 1rem;
  }

  & > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${props => props.theme.colors.line};
    margin: 0 1.5rem;
    position: relative;

    & > div {
      height: 4px;
      border-radius: 4px;
      background: ${props => props.theme.colors.secondary};
      transition: all 0.2s;
    }
  }
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;

  transform: translateX(-50%);
  transition: all 0.5s;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  padding: 0 0.5rem 0.5rem 0.5rem;
`;
