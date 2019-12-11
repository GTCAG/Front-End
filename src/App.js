import React from "react";
import "./App.scss";
import IntroBody from "./components/IntroBody/IntroBody";
import FullLanding from "./components/FullLanding/FullLanding";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <NavBar />

        <FullLanding />
        <IntroBody />
      </Route>
      <Route path="/about">
        <NavBar />

        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  );
}

export default App;
