import React from "react";
import ContactForm from "./ContactForm";
import { ContactSecLeftStyle } from "../../styles/ContactStyles/Contact.Styled";

const ContactSecLeft = () => {
  return (
    <ContactSecLeftStyle>
      <h1>Get in touch</h1>
      <p>
        I'm a text box. Double click me to edit the text or to change the way I
        look. You can change the font, size, color, and so much more.
      </p>
      <ContactForm />
    </ContactSecLeftStyle>
  );
};

export default ContactSecLeft;
