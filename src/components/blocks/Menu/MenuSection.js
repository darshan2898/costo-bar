import React from "react";
import MenuCardSection from "./MenuCardSection";
import MenuImgSec from "./MenuImgSec";
import { ContainerStyle } from "../../styles/Container.Styled";
import items from "../../../data/allData";

const MenuSection = () => {
  return (
    <>
      {items.map((item, index) => {
        const { menuBodyData, menuImgData } = item;
        return (
          <ContainerStyle key={index}>
            <MenuCardSection data={menuBodyData} />
            <MenuImgSec images={menuImgData} />
          </ContainerStyle>
        );
      })}
    </>
  );
};

export default MenuSection;
