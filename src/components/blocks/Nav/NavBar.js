import React from "react";
import {
  NavBarStyle,
  NavUl,
  NavListItems,
} from "../../styles/NavbarStyles/NavBar.styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavBarStyle>
      <NavUl>
        <NavListItems>
          <Link to="/">Home</Link>
        </NavListItems>
        <NavListItems>
          <Link to="/menu">Menu</Link>
        </NavListItems>
        <NavListItems>
          <Link to="/contact">Contact</Link>
        </NavListItems>
      </NavUl>
    </NavBarStyle>
  );
};

export default NavBar;
