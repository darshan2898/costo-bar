import React from "react";
import MenuIconsCard from "./MenuIconsCard";
import { FirstMenuStyle } from "../../styles/MenuStyles/Menu.Styled";
import { GiWineBottle, GiBoatFishing } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

const data = [
  {
    id: 1,
    icon: <GiWineBottle />,
    title: "Tropical Cocktails",
  },
  {
    id: 2,
    icon: <IoFastFoodOutline />,
    title: "Tasty Snacks",
  },
  {
    id: 3,
    icon: <GiBoatFishing />,
    title: "Special Occasions",
  },
];

const FirstMenu = () => {
  return (
    <>
      <FirstMenuStyle>
        <div className="left">
          <img src="https://costo-bar.netlify.app/images/hmp1.jpg" alt="" />
        </div>
        <div className="right">
          {data.map((item) => {
            return <MenuIconsCard key={item.id} item={item} />;
          })}
        </div>
      </FirstMenuStyle>
    </>
  );
};

export default FirstMenu;
