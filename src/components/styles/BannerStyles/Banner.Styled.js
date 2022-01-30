import styled from "styled-components";

export const HomePageBannerStyle = styled.div`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(https://costo-bar.netlify.app/images/banner1.jpg);
  height: 380px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: grid;
  place-items: center;
`;

export const BannerHeroStyle = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.whiteOne};
  p {
    font-size: 2rem;
    letter-spacing: 2px;
    word-spacing: 3px;
  }
  h1 {
    font-family: ${({ theme }) => theme.fonts.stylishFont};
    color: ${({ theme }) => theme.colors.whiteOne};
    font-size: 8rem;
    letter-spacing: 1px;
    @media (max-width: 320px) {
      font-size: 6rem;
      text-align: center;
    }
  }
`;

export const MenuBannerStyle = styled.div`
  width: 100%;
  background: linear-gradient(#032a516e, rgba(0, 0, 0, 0.8)),
    url(https://costo-bar.netlify.app/images/banner2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 380px;
  display: grid;
  place-items: center;
  div {
    width: 600px;
    text-align: center;
    height: 230px;
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.colors.whiteOne};
    margin-top: 5em;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 2.5em;
    }
    h1 {
      font-size: 3.5rem;
      color: ${({ theme }) => theme.colors.whiteOne};
    }
    p {
      font-size: 1.7rem;
      font-weight: 300;
    }
    strong {
      letter-spacing: 1px;
      word-spacing: 2px;
    }
    a {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.whiteOne};
      font-family: ${({ theme }) => theme.fonts.stylishFont};
    }
  }
`;
