import React from "react";
import MenuCardSecBody from "./MenuCardSecBody";
import MenuCardSecHeading from "./MenuCardSecHeading";
import { MenuCardSecStyle } from "../../styles/MenuStyles/Menu.Styled";

const MenuCardSection = ({ data }) => {
  return (
    <MenuCardSecStyle>
      <MenuCardSecHeading data={data} />
      <MenuCardSecBody itemsArr={data.menuItems} />
    </MenuCardSecStyle>
  );
};

export default MenuCardSection;
