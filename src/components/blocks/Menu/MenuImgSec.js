import React from "react";
import { MenuImageStyle } from "../../styles/MenuStyles/Menu.Styled";

const MenuImgSec = ({ images }) => {
  return (
    <MenuImageStyle>
      {images.map((item, index) => {
        return <img src={item} alt="" key={index} />;
      })}
    </MenuImageStyle>
  );
};

export default MenuImgSec;
