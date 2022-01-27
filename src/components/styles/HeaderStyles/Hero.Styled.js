import styled from "styled-components";

export const HeroStyles = styled.div`
  width: 700px;
  height: 380px;
  background: ${({ theme }) => theme.colors.whiteOne};
  display: grid;
  place-items: center;
  padding: 7em 2em;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    font-size: 3rem;
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 2rem;
      display: grid;
      place-items: center;
      margin: 0 0.5em;
      color: ${({ theme }) => theme.colors.darkblue};
    }
  }
  h1 {
    font-size: 10rem;
    font-family: ${({ theme }) => theme.fonts.stylishFont};
    @media (max-width: 320px) {
      font-size: 8rem;
      text-align: center;
    }
  }
  h3 {
    font-family: ${({ theme }) => theme.fonts.bodyFont};
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: ${({ theme }) => theme.locals.letterSpacing};
  }
  small {
    font-size: 2rem;
    font-weight: 300;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.lightblue};
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: -1;
  }

  @media (max-width: 375px) {
    text-align: center;
    &::after {
      display: none;
    }
  }
`;

export const MenuHeroStyles = styled.div`
  width: 730px;
  height: 320px;
  background: ${({ theme }) => theme.colors.whiteOne};
  display: grid;
  place-items: center;
  padding: 7em 2em;
  box-shadow: 8px 8px 0px ${({ theme }) => theme.colors.lightblue};
  @media (max-width: 768px) {
    width: 100%;
  }
  h1 {
    font-size: 4rem;
    font-family: ${({ theme }) => theme.fonts.stylishFont};
  }
  h2 {
    font-size: 5rem;
    font-weight: 500;
    margin-top: -60px;
    color: ${({ theme }) => theme.colors.lightblue};
  }
`;
