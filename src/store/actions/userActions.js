import { axiosAuth } from "../../axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

/**
 * 
lastName: ""
_id: "5df7ff6eb46a0d00172db207"
email: "webReg@gma.com"
firstName: "WEBREG"
 * 
 */

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  axiosAuth()
    .post("/users/login", credentials)
    .then(res => {
      console.log("Login response: ", res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.accessToken });
    })
    .catch(err => {
      console.log("Error logging in: ", err.response);
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error });
    });
};

export const register = user => dispatch => {
  dispatch({ type: REGISTER_START });
  axiosAuth()
    .post("/users/register", user)
    .then(res => {
      console.log("Register response: ", res);
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(err => {
      console.log("Error registering: ");
      console.log(err.response);
      dispatch({ type: REGISTER_FAILURE, payload: err.message });
    });
};
