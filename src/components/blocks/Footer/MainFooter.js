import React from "react";
import NavBar from "../Nav/NavBar";
import { MainFooterStyles } from "../../styles/FooterStyles/Footer.Styled";
import { GiWaves } from "react-icons/gi";
import { ContainerStyle } from "../../styles/Container.Styled";

const MainFooter = () => {
  return (
    <MainFooterStyles>
      <ContainerStyle>
        <div className="icon">
          <GiWaves />
        </div>
        <div className="frListItems">
          <div className="location">
            <h2>Location</h2>
            <div className="underline"></div>
            <p>0808 Street Name,</p>
            <p>city, state, zip code</p>
          </div>
          <div className="title">
            <h1>The Coast</h1>
            <NavBar />
          </div>
          <div className="reservations">
            <h2>Reservations</h2>
            <div className="underline"></div>
            <p>Please give us a call</p>
            <p>+1 234 567 8901</p>
          </div>
        </div>
      </ContainerStyle>
    </MainFooterStyles>
  );
};

export default MainFooter;
