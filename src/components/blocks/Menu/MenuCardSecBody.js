import React from "react";
import MenuCard from "./MenuCard";
import { MenuCardSecBodyStyle } from "../../styles/MenuStyles/Menu.Styled";

const MenuCardSecBody = ({ itemsArr }) => {
  return (
    <MenuCardSecBodyStyle>
      {itemsArr.map((item, index) => {
        return <MenuCard key={index} item={item} />;
      })}
    </MenuCardSecBodyStyle>
  );
};

export default MenuCardSecBody;
