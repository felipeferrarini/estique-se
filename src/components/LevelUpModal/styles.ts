import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.9);
  z-index: 200;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  z-index: 100;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 1.875rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0px;
`;

export const ShareButton = styled.button`
  height: 5rem;
  width: calc(100% + 6rem);
  margin: -2rem -3rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-top: 2px solid var(--gray-line);
  background-color: var(--blue-light);
  border-radius: 0;
  font-size: 1.25rem;
  font-weight: 600;

  transition: all 0.2s;

  :hover svg path {
    fill: var(--white);
  }

  &.facebook {
    color: var(--blue-facebook);
    border-radius: 0 0 5px 5px;
  }

  &.twitter {
    color: var(--blue-twitter);
  }

  &.twitter:hover {
    background: var(--blue-twitter);
    color: var(--white);
    border-color: transparent;
  }

  &.facebook:hover {
    background: var(--blue-facebook);
    color: var(--white);
    border-color: transparent;
  }

  svg {
    margin-left: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    path {
      transition: all 0.2s;
    }
  }
`;
