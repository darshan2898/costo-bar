import React from "react";
import { SecondMenuStyle } from "../../styles/MenuStyles/Menu.Styled";
import { GiCompass } from "react-icons/gi";
import { Link } from "react-router-dom";

const SecondMenu = () => {
  return (
    <SecondMenuStyle>
      <div className="left">
        <div className="icon">
          <GiCompass />
        </div>
        <h1>Make a reservation</h1>
        <p>
          I’m a text box. Double click me to edit the text or to change the way
          I look.
        </p>
        <Link to="/contact">call us today...</Link>
      </div>
      <div className="right">
        <img src="https://costo-bar.netlify.app/images/hmp2.jpg" alt="" />
      </div>
    </SecondMenuStyle>
  );
};

export default SecondMenu;
