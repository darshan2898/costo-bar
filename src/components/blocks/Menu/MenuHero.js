import React from "react";
import { MenuHeroStyles } from "../../styles/HeaderStyles/Hero.Styled";

const MenuHero = ({ title }) => {
  return (
    <MenuHeroStyles>
      <h1>The Coast</h1>
      <h2>{title}</h2>
    </MenuHeroStyles>
  );
};

export default MenuHero;
