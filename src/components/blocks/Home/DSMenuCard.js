import React from "react";
import { Link } from "react-router-dom";
import { DSMenuCardStyle } from "../../styles/DailySpecials/DSStyled";
import DSMenuItem from "./DSMenuItem";

const DSMenuCard = () => {
  const dsItems = [
    {
      title: "Snack of the day",
      item: "A side of spicy popcorn shrimp",
      price: "8.99",
    },
    {
      title: "Cocktail of the day",
      item: "The Blended Yellow Bird",
      price: "6.75",
    },
  ];

  return (
    <DSMenuCardStyle>
      <h1>Daily Specials</h1>

      {dsItems.map((item, index) => {
        return <DSMenuItem itemName={item} key={index} />;
      })}

      <Link to="/menu">See full menu</Link>
    </DSMenuCardStyle>
  );
};

export default DSMenuCard;
