import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* TYPE-SCALE STYLE */

html {
  font-size: 62.5%;
  @media (max-width: 1024px) {
    font-size: 60%;
  }
  @media (max-width: 768px) {
    font-size:55.5%
  }
  @media (max-width: 425px) {
    font-size:53%
  }
  @media (max-width: 375px) {
    font-size:50%
  }
} /*10px*/

body {
background: ${({ theme }) => theme.colors.whiteOne};
font-weight: 400;
line-height: 1.75;
color: ${({ theme }) => theme.colors.black};
font-family: ${({ theme }) => theme.fonts.bodyFont};
}


h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-family:${({ theme }) => theme.fonts.headingFont};
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  color:${({ theme }) => theme.colors.black}
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}

img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  display: block;
  object-fit: cover;
}

/* LOADING */

.loading {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.darkblue};
  border-top: 3px solid ${({ theme }) => theme.colors.lightblue};
  transition: ${({ theme }) => theme.locals.transition};
  animation: spinner 1s infinite linear;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

`;

export default GlobalStyles;
