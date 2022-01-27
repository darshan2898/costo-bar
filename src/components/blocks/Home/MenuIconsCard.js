import React from "react";
import { HomeMenuCardsIconsStyle } from "../../styles/MenuStyles/Menu.Styled";

const MenuIconsCard = ({ item }) => {
  const { icon, title } = item;

  return (
    <HomeMenuCardsIconsStyle>
      <small>{icon}</small>
      <h1>{title}</h1>
    </HomeMenuCardsIconsStyle>
  );
};

export default MenuIconsCard;
