import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#032a5177, rgba(56, 149, 207, 0.231)),
    url(http://localhost:3000/images/bg1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
  position: relative;
  z-index: -10;
  @media (max-width: 768px) {
    padding: 0 2.5em;
  }
`;

export const MenuHeaderStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#032a5177, rgba(56, 149, 207, 0.231)),
    url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
  position: relative;
  @media (max-width: 768px) {
    padding: 0 2.5em;
  }
`;
