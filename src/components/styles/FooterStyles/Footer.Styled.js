import styled from "styled-components";

export const FooterStyles = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.whiteOne};
`;

export const MainFooterStyles = styled.div`
  width: 100%;
  .icon {
    width: 100%;
    text-align: center;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1em;
  }
  .frListItems {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    h1 {
      font-family: ${({ theme }) => theme.fonts.stylishFont};
      font-size: 7rem;
      transform: rotate(-7deg);
      margin-bottom: 0.1em;
    }
    h2 {
      font-size: 2rem;
      font-weight: bold;
      letter-spacing: 1px;
    }
    .underline {
      width: 15px;
      height: 2px;
      background: ${({ theme }) => theme.colors.black};
      margin: 1.5em auto;
    }
    p {
      font-size: 1.7rem;
      font-weight: 300;
    }
    @media (max-width: 425px) {
      .title {
        margin: 2.5em 0;
      }
    }
  }
`;

export const SubFooterStyle = styled.div`
  width: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.darkblue};
  color: ${({ theme }) => theme.colors.whiteOne};
  padding: 1.5em;
  p {
    font-size: 1.2rem;
    letter-spacing: 1px;
    word-spacing: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      font-size: 2rem;
      margin: 0 0.5em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
