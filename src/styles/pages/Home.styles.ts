import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media screen and (max-width: 1000px) {
    height: 100%;

    section {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;

export const ContainerOver = styled.div`
  margin-left: 7rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 5rem;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
  }
`;
