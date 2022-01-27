import React from "react";
import { ContactSecRightStyle } from "../../styles/ContactStyles/Contact.Styled";

const ContactSecRight = () => {
  return (
    <ContactSecRightStyle>
      <h1>Contact</h1>
      <h1 style={{ marginTop: "-15px" }}>Information</h1>
      <div className="rgBody">
        <h2>Location</h2>
        <p>
          4523 Street Name, city, <br /> state, zip code
        </p>
        <h2>Hours</h2>
        <p>
          Mon - Fri: 8pm - 9pm <br /> Sat - Sun: 10am - 11pm
        </p>
        <h2>Give us a call</h2>
        <p>+1 (123) 456 - 7890</p>
      </div>
    </ContactSecRightStyle>
  );
};

export default ContactSecRight;
