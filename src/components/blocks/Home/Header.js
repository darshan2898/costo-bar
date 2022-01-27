import React from "react";
import { HeaderStyle } from "../../styles/HeaderStyles/Header.Styled";
import HeroHeader from "./HeroHeader";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HeroHeader />
      </HeaderStyle>
    </>
  );
};

export default Header;
