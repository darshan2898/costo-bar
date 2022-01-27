import styled from "styled-components";

export const NavBarStyle = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.whiteOne};
  display: grid;
  place-items: center;
  padding: 1em;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavListItems = styled.li`
  padding: 0.6em;
  margin: 0 1em;
  font-size: 1.7rem;
  text-transform: uppercase;
  a {
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: ${({ theme }) => theme.locals.letterSpacing};
    transition: ${({ theme }) => theme.locals.transition};
    &:hover {
      color: ${({ theme }) => theme.colors.lightblue};
    }
  }
`;
