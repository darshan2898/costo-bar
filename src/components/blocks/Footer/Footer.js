import React from "react";
import MainFooter from "./MainFooter";
import SubFooter from "./SubFooter";
import { FooterStyles } from "../../styles/FooterStyles/Footer.Styled";

const Footer = () => {
  return (
    <FooterStyles>
      <MainFooter />
      <SubFooter />
    </FooterStyles>
  );
};

export default Footer;
