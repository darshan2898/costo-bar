import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/blocks/Footer/Footer";
import NavBar from "../components/blocks/Nav/NavBar";
import ContactPage from "../components/pages/ContactPage";
import HomePage from "../components/pages/HomePage";
import MenuPage from "../components/pages/MenuPage";
import ErrorPage from "../components/pages/ErrorPage";

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/menu">
          <MenuPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
