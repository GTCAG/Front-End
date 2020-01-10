import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_START,
  PERSIST_LOGIN
} from "../actions/userActions";

const initialState = {
  loggedIn: false,
  isLoggingIn: false,
  loginError: "",

  firstName: null,
  lastName: null,
  userId: null,
  email: null,

  isRegistering: false,
  registrationError: ""
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSIST_LOGIN:
      const { firstName, lastName, userId, email } = action.payload;
      return { ...state, loggedIn: true, firstName, lastName, userId, email };

    //Authorization/Logging in
    case LOGIN_START:
      return { ...state, isLoggingIn: true, loginError: "" };
    case LOGIN_SUCCESS:
      localStorage.setItem("authToken", action.payload);
      return { ...state, isLoggingIn: false, loggedIn: true };
    case LOGIN_FAILURE:
      return { ...state, isLoggingIn: false, loginError: action.payload };

    //Authorization/Registration
    case REGISTER_START:
      return { ...state, registrationError: "", isRegistering: true };
    case REGISTER_FAILURE:
      return {
        ...state,
        registrationError: action.payload,
        isRegistering: false
      };
    case REGISTER_SUCCESS:
      return { ...state, isRegistering: false, registrationError: "" };
    default:
      return { ...state };
  }
};
