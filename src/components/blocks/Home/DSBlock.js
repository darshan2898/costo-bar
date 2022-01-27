import React from "react";
import { DSBlockStyle } from "../../styles/DailySpecials/DSStyled";
import DSImage from "./DSImage";
import DSMenuCard from "./DSMenuCard";

const DSBlock = () => {
  return (
    <DSBlockStyle>
      <DSImage />
      <DSMenuCard />
    </DSBlockStyle>
  );
};

export default DSBlock;
