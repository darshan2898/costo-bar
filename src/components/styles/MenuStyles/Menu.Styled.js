import styled from "styled-components";

export const HomeMenuStyle = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightgrey};
  padding: 0 2em;
  .menuCard {
    width: 1050px;
    margin: 0 auto;
    padding: 5em 0;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;

export const FirstMenuStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.whiteOne};
  .left {
    width: 50%;
    height: 550px;
  }
  .right {
    width: 50%;
    display: grid;
    place-items: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    .left,
    .right {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.whiteOne};
    }
    .right {
      padding: 3.5em 0;
      text-align: center;
    }
  }
`;
export const SecondMenuStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.darkblue};
  color: ${({ theme }) => theme.colors.whiteOne};
  .left {
    width: 50%;
    display: grid;
    place-items: center;
    .icon {
      font-size: 7rem;
      color: ${({ theme }) => theme.colors.lightblue};
    }
    h1 {
      font-size: 2.6rem;
      letter-spacing: 1px;
      margin-top: -12px;
      padding-bottom: 0.5em;
      color: ${({ theme }) => theme.colors.whiteOne};
    }
    p {
      font-size: 1.73rem;
      text-align: center;
      font-weight: 100;
      padding: 0 7em;
      margin-bottom: 2em;
      @media (max-width: 768px) {
        padding: 0 2.5em;
      }
    }
    a {
      font-size: 3rem;
      font-family: ${({ theme }) => theme.fonts.stylishFont};
      color: ${({ theme }) => theme.colors.lightblue};
      text-decoration: underline dotted;
      text-transform: lowercase;
      letter-spacing: 1px;
    }
  }
  .right {
    width: 50%;
    height: 550px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    .left,
    .right {
      width: 100%;
    }
    .left {
      padding: 3.5em 0;
      text-align: center;
    }
  }
`;

export const HomeMenuCardsIconsStyle = styled.div`
  display: grid;
  place-items: center;
  padding: 2.5em;
  small {
    font-size: 4.3rem;
    color: ${({ theme }) => theme.colors.lightblue};
  }
  h1 {
    font-size: 2.4rem;
    margin-top: -15px;
  }
`;

export const MenuCardSecStyle = styled.div`
  width: 100%;
  margin: 5em 0;
`;

export const MenuCardSecHeadingStyles = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 6em;
  h1 {
    font-family: ${({ theme }) => theme.fonts.stylishFont};
    font-size: 5rem;
  }
  h2 {
    font-size: 2rem;
  }
`;

export const MenuCardSecBodyStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 4em;
  padding: 0.5em 2em;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const MenuCardStyle = styled.div`
  width: 100%;
  padding: 1.5em;
  border: 1px solid ${({ theme }) => theme.colors.lightblue};
  transition: ${({ theme }) => theme.locals.transition};
  border-radius: 5px;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1,
    h2 {
      font-family: ${({ theme }) => theme.fonts.bodyFont};
      font-size: 1.8rem;
      font-weight: bold;
      word-spacing: 2px;
    }
    h2 {
      color: ${({ theme }) => theme.colors.lightblue};
    }
  }
  .underline {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.lightblue};
    margin: 1.2em 0;
  }
  p {
    font-weight: 300;
    font-size: 1.6rem;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const MenuImageStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 3em;
  padding: 3em;
  place-items: center;
  img {
    border-radius: 5px;
  }
`;
