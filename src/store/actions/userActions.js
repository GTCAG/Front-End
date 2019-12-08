import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  axios
    .post("")
    .then(res => {
      console.log("Login response: ", res);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log("err could not log in: ", err);
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};

export const register = user => dispatch => {
  dispatch({ type: REGISTER_START });

  axios
    .post("")
    .then(res => {
      console.log("Register response: ", res);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(err => {
      console.log("Error registerting: ", err);
      dispatch({ type: REGISTER_FAILURE, payload: err.message });
    });
};
