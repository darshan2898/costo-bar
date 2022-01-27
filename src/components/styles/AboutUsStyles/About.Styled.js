import styled from "styled-components";

export const HomePageAboutStyle = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 10em 0;
  h1 {
    font-size: 4.3rem;
    text-align: center;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0;
    small {
      font-size: 5rem;
      display: grid;
      place-items: center;
      color: ${({ theme }) => theme.colors.lightblue};
    }
    .line {
      width: 100px;
      height: 2px;
      background: #e5e4e2;
      margin: 0 2em;
    }
  }
  p {
    font-size: 2.3rem;
    text-align: center;
    font-weight: 300;
    padding: 1em 10em;
    @media (max-width: 1100px) {
      padding: 1em;
    }
  }
`;
