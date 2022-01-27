import React from "react";
import BannerHero from "./BannerHero";
import { HomePageBannerStyle } from "../../styles/BannerStyles/Banner.Styled";

const Banner = () => {
  return (
    <HomePageBannerStyle>
      <BannerHero />
    </HomePageBannerStyle>
  );
};

export default Banner;
