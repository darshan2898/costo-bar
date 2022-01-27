import React from "react";
import { HeroStyles } from "../../styles/HeaderStyles/Hero.Styled";
import { GiTireIronCross } from "react-icons/gi";

const HeroHeader = () => {
  return (
    <HeroStyles>
      <p>
        19
        <span>
          <GiTireIronCross />
        </span>
        20
      </p>
      <h1>The Coast</h1>
      <h3>Grill & Bar</h3>
      <small>CO.</small>
    </HeroStyles>
  );
};

export default HeroHeader;
