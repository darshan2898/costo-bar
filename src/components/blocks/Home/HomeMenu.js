import React from "react";
import FirstMenu from "./FirstMenu";
import SecondMenu from "./SecondMenu";
import { HomeMenuStyle } from "../../styles/MenuStyles/Menu.Styled";

const HomeMenu = () => {
  return (
    <HomeMenuStyle>
      <div className="menuCard">
        <FirstMenu />
        <SecondMenu />
      </div>
    </HomeMenuStyle>
  );
};

export default HomeMenu;
