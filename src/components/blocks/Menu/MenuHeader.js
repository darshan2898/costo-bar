import React, { useState, useEffect } from "react";
import { MenuHeaderStyle } from "../../styles/HeaderStyles/Header.Styled";
import MenuHero from "./MenuHero";
import { useParams, useHistory } from "react-router-dom";

const MenuHeader = ({ title }) => {
  const [currentState, setCurrentState] = useState(null);

  const bgMenu = "http://localhost:3000/images/bg2.jpg";
  const bgContact = "http://localhost:3000/images/banner3.jpg";

  const name = useHistory();

  useEffect(() => {
    if (name.location.pathname === "/menu") {
      setCurrentState(true);
    }
  }, []);

  return (
    <MenuHeaderStyle bg={currentState ? bgMenu : bgContact}>
      <MenuHero title={title} />
    </MenuHeaderStyle>
  );
};

export default MenuHeader;
