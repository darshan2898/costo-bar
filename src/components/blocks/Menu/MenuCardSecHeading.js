import React from "react";
import { MenuCardSecHeadingStyles } from "../../styles/MenuStyles/Menu.Styled";

const MenuCardSecHeading = ({ data }) => {
  return (
    <MenuCardSecHeadingStyles>
      <h1>{data.title}</h1>
      <h2>{data.subTitle}</h2>
    </MenuCardSecHeadingStyles>
  );
};

export default MenuCardSecHeading;
