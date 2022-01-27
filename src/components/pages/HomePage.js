import React from "react";
import Footer from "../blocks/Footer/Footer";
import About from "../blocks/Home/About";
import Banner from "../blocks/Home/Banner";
import DailySpecials from "../blocks/Home/DailySpecials";
import Header from "../blocks/Home/Header";
import HomeMenu from "../blocks/Home/HomeMenu";
import NavBar from "../blocks/Nav/NavBar";

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <HomeMenu />
      <Banner />
      <DailySpecials />
    </>
  );
};

export default HomePage;
