import React from "react";
import { ContainerStyle } from "../../styles/Container.Styled";
import ContactSecLeft from "./ContactSecLeft";
import ContactSecRight from "./ContactSecRight";
import { ContactSecStyle } from "../../styles/ContactStyles/Contact.Styled";

const ContactSection = () => {
  return (
    <ContainerStyle>
      <ContactSecStyle>
        <ContactSecLeft />
        <ContactSecRight />
      </ContactSecStyle>
    </ContainerStyle>
  );
};

export default ContactSection;
