import { axiosAuth } from "../../axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const PERSIST_LOGIN = "PERSIST_LOGIN";

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
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.accessToken });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error });
    });
};

export const persistLogin = () => dispatch => {
  const token = localStorage.getItem("authToken");
  if (token)
    axiosAuth()
      .get("/users/whoami")
      .then(res => {
        console.log("res, ", res);
        const { userId, email, firstName, lastName } = res.data;
        dispatch({
          type: PERSIST_LOGIN,
          payload: { userId, email, firstName, lastName }
        });
      })
      .catch(err => {
        console.log("Error doing persist,", err.response);
      });
};

export const register = (user, handleSuccess) => dispatch => {
  dispatch({ type: REGISTER_START });
  axiosAuth()
    .post("/users/register", user)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS });
      handleSuccess();
    })
    .catch(err => {
      console.log("Error registering: ");
      console.log(err.response);
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.error });
    });
};
