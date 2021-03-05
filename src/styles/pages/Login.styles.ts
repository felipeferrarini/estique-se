import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--blue);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > img {
    width: 40rem;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    text-align: center;

    & > img {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    padding: 1rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-right: 15rem;

  img {
    margin-bottom: 5rem;
    height: 5.5rem;
  }

  strong {
    font-size: 2.25rem;
    color: var(--white);

    margin-bottom: 1.5rem;
  }

  p {
    color: var(--text-highlight);
    font-size: 1.25rem;
    line-height: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    max-width: 27rem;
    margin-bottom: 1.5rem;

    svg {
      font-size: 3rem;
      margin-right: 1.5rem;
    }
  }

  a {
    color: var(--text-highlight);
    transition: all 0.2s;

    &:hover {
      color: var(--white);
    }
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    align-items: center;

    img {
      margin-bottom: 5rem;
      height: 5.5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    p {
      max-width: 20rem;
    }
  }

  @media screen and (max-width: 320px) {
    img {
      height: 4.2rem;
    }
  }
`;

export const Providers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  margin-bottom: 1rem;

  button {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--blue);

    width: 70%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    border: 0;
    margin-bottom: 1rem;

    background-color: var(--text-highlight);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;

    svg {
      margin-right: 5px;
    }
  }

  .Google:hover {
    background-color: var(--red);
    color: var(--white);
    margin-left: 1rem;
  }

  .GitHub:hover {
    background-color: var(--title);
    color: var(--white);
    margin-left: 1rem;
  }

  .Facebook:hover {
    background-color: var(--blue-facebook);
    color: var(--white);
    margin-left: 1rem;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;
