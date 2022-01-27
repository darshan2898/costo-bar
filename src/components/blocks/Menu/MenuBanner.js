import React from "react";
import { Link } from "react-router-dom";
import { MenuBannerStyle } from "../../styles/BannerStyles/Banner.Styled";

const MenuBanner = () => {
  return (
    <MenuBannerStyle>
      <div>
        <h1>Make a reservation</h1>
        <p>
          Give us a call at <strong>(123) 345-6789</strong> , between 6am-10pm,
          or book online by sending us a message.
          <strong>
            Reservations are recommended for parties of 6 or more.
          </strong>
        </p>
        <Link to="/contact">Book Now</Link>
      </div>
    </MenuBannerStyle>
  );
};

export default MenuBanner;
