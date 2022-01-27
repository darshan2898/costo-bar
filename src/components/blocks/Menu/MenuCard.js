import React from "react";
import { MenuCardStyle } from "../../styles/MenuStyles/Menu.Styled";

const MenuCard = ({ item }) => {
  const { itemName, price } = item;
  return (
    <MenuCardStyle>
      <div className="heading">
        <h1>{itemName}</h1>
        <h2>${price}</h2>
      </div>
      <div className="underline"></div>
      <p>
        I’m a text box. Double click me to edit the text or to change the way I
        look.
      </p>
    </MenuCardStyle>
  );
};

export default MenuCard;
