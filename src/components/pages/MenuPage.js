import React from "react";
import MenuBanner from "../blocks/Menu/MenuBanner";
import MenuHeader from "../blocks/Menu/MenuHeader";
import MenuSection from "../blocks/Menu/MenuSection";

const MenuPage = () => {
  return (
    <>
      <MenuHeader title={"Our Menu"} />
      <MenuSection />
      <MenuBanner />
    </>
  );
};

export default MenuPage;
