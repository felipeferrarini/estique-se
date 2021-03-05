import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.white};
  padding: 1rem;

  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 5px;

    background-color: ${props => props.theme.colors.line};
    border-radius: 0 0 5px 5px;
    transition: all 0.2s;
  }

  :hover::after {
    background-color: ${props => props.theme.colors.secondary};
  }

  & > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${props => props.theme.colors.title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`;
