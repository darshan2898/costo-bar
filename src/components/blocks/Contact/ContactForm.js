import React from "react";
import { ContactFormStyle } from "../../styles/ContactStyles/Contact.Styled";

const ContactForm = () => {
  return (
    <ContactFormStyle>
      <label htmlFor="name">Full Name</label>
      <input type="text" />
      <label htmlFor="email">Email address</label>
      <input type="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" cols="30" rows="5"></textarea>
      <button>submit</button>
    </ContactFormStyle>
  );
};

export default ContactForm;
