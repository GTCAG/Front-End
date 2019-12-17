import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (true ? children : <Redirect to="/login" />)}
    ></Route>
  );
};

export default PrivateRoute;
