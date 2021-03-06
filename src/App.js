import React, { useEffect } from "react";
import "./App.scss";
import IntroBody from "./components/IntroBody/IntroBody";
import FullLanding from "./components/FullLanding/FullLanding";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import ContactPage from "./components/Contact/ContactPage";
import LoginPage from "./components/Login/LoginPage";
import Register from "./components/Register/Register";
import { useDispatch } from "react-redux";

import { persistLogin } from "./store/actions/userActions";
import DonationsPage from "./components/Donations/DonationsPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistLogin());
  }, [dispatch]);

  return (
    <Router>
      <Route exact path="/">
        <NavBar />

        <FullLanding />
        <IntroBody />
      </Route>
      <Route path="/login">
        <NavBar />
        <div className="login-page-container">
          <LoginPage />
        </div>
      </Route>

      <Route path="/register">
        <NavBar />
        <div className="login-page-container">
          <Register />
        </div>
      </Route>

      <Route path="/about">
        <NavBar />
        <About />
      </Route>
      <Route path="/contact">
        <NavBar />
        <ContactPage />
      </Route>
      <Route path="/donate">
        <NavBar />
        <DonationsPage />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  );
}

export default App;
