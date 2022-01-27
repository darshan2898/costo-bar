import React from "react";
import { HomePageAboutStyle } from "../../styles/AboutUsStyles/About.Styled";
import { GiShipWheel } from "react-icons/gi";
import { ContainerStyle } from "../../styles/Container.Styled";

const About = () => {
  return (
    <ContainerStyle>
      <HomePageAboutStyle>
        <h1>Let the good times roll</h1>
        <div className="icon">
          <div className="line"></div>
          <small>
            <GiShipWheel />
          </small>
          <div className="line"></div>
        </div>
        <p>
          I’m a text box. Double click me to edit the text or to change the way
          I look. You can change the font, size, color, and so much more. For
          advanced styling options, click on “more” located on the right hand
          side of the text editing menu.
        </p>
      </HomePageAboutStyle>
    </ContainerStyle>
  );
};

export default About;
