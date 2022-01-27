import React from "react";
import { DSMenuItemStyle } from "../../styles/DailySpecials/DSStyled";

const DSMenuItem = ({ itemName }) => {
  const { title, item, price } = itemName;

  return (
    <DSMenuItemStyle>
      <h1>{title}</h1>
      <p>{item}</p>
      <h2>${price}</h2>
    </DSMenuItemStyle>
  );
};

export default DSMenuItem;
