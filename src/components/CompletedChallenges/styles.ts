import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;

  margin: 2.5rem 0;
  padding-bottom: 1rem;

  font-weight: 500;

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

  span:first-child {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.5rem;
  }
`;
