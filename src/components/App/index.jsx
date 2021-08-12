import React, { useContext } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../Header";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Works } from "../../pages/Works";
import { Navbar } from "../Navbar";
import { ThemeContext } from "../../Themecontext";
import { Project } from "../Project";

export const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "app dark" : "app light"}>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
        <Switch>
          <Route path="/works/:projectSlug">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
