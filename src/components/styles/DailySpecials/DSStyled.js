import styled from "styled-components";

export const DSSpecialStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.lightgrey};
  padding: 12em;
  display: grid;
  place-items: center;
  @media (max-width: 1100px) {
    padding: 10em 2.5em;
  }
`;

export const DSBlockStyle = styled.div`
  width: 620px;
  height: 700px;
  background: ${({ theme }) => theme.colors.whiteOne};
  display: grid;
  place-items: center;
  padding: 1.5em;
  position: relative;
  place-self: end end;
  margin-right: 5em;
  box-shadow: 8px 8px 0px ${({ theme }) => theme.colors.lightblue};
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    place-self: center center;
  }
`;

export const DSImageStyle = styled.div`
  width: 386px;
  height: 580px;
  position: absolute;
  top: 50%;
  left: -300px;
  transform: translateY(-50%);
  box-shadow: 7.0711px 7.0711px 0px 0px rgb(3 42 81 / 10%);
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DSMenuCardStyle = styled.div`
  width: 100%;
  height: 100%;
  border: 2.5px solid ${({ theme }) => theme.colors.lightblue};
  border-style: dotted;
  display: grid;
  place-items: center;
  padding: 10em 0;
  h1 {
    font-size: 5rem;
    margin-bottom: 1em;
    @media (max-width: 320px) {
      font-size: 6rem;
      text-align: center;
    }
  }
  a {
    font-family: ${({ theme }) => theme.fonts.stylishFont};
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const DSMenuItemStyle = styled.div`
  text-align: center;
  margin-bottom: 1.5em;
  h1 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.lightblue};
    letter-spacing: 1px;
    margin-bottom: 0.4em;
  }
  p {
    font-size: 1.7rem;
    font-weight: 300;
  }
  h2 {
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.bodyFont};
  }
`;
