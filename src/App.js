import React from "react";
import "./App.scss";
import IntroBody from "./components/IntroBody/IntroBody";
import FullLanding from "./components/FullLanding/FullLanding";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <FullLanding />
        <IntroBody />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
