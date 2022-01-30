import React, { useState, useEffect } from "react";
import { MenuHeaderStyle } from "../../styles/HeaderStyles/Header.Styled";
import MenuHero from "./MenuHero";
import { useParams, useHistory } from "react-router-dom";

const MenuHeader = ({ title }) => {
  const [currentState, setCurrentState] = useState(null);

  const bgMenu = "https://costo-bar.netlify.app/images/bg2.jpg";
  const bgContact = "https://costo-bar.netlify.app/images/banner3.jpg";

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
