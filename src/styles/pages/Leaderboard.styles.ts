import styled from 'styled-components';

export const ContainerOver = styled.div`
  margin-left: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

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

export const Container = styled.div`
  height: 100vh;
  width: fit-content;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  padding-top: 5rem;

  h1 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.title};
  }

  table {
    width: 60rem;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  thead tr th:nth-child(2) {
    padding-left: 1rem;
  }

  th {
    color: ${props => props.theme.colors.gray};
    font-size: 0.875rem;
    text-align: start;
    height: 3rem;
  }

  td {
    background-color: ${props => props.theme.colors.white};
    height: 6rem;
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    width: 100%;
    align-items: center;

    table {
      width: 95%;
    }
  }

  @media screen and (max-width: 500px) {
    td {
      /* height: 100%; */
      max-height: 10rem;
    }
  }
`;

export const TablePosition = styled.td`
  width: calc(4.5rem + 5px);

  border-right: 5px solid ${props => props.theme.colors.background};
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.05);

  text-align: center;
  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    width: 4rem;
  }
`;

export const TableProfile = styled.td`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & > img {
    height: 4rem;
    width: 4rem;

    border-radius: 50%;
    margin-right: 10px;
  }

  & > div {
    display: flex;
    flex-direction: column;

    strong {
      color: ${props => props.theme.colors.title};
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 1rem;

      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        margin-right: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: flex-start;
    text-align: start;

    & > img {
      height: 2.5rem;
      width: 2.5rem;
    }

    & > div {
      align-items: flex-start;

      strong {
        font-size: 1rem;
        margin-bottom: 0.2rem;
      }

      span img {
        margin-right: 0.3rem;
        height: 0.7rem;
        width: 0.7rem;
      }
    }
  }
`;

export const TableExperience = styled.td`
  font-weight: 500;
  font-size: 1rem;

  @media screen and (max-width: 500px) {
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  strong {
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
  }
`;
