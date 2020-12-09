import { updateObject } from "../utility";

const initState = {
  isLoading: false,
  authError: null,
};

const loginStart = (state, action) => {
  return updateObject(state, { isLoading: true, authError: null });
};

const loginSuccess = (state, action) => {
  return updateObject(state, { isLoading: false, authError: null });
};

const loginError = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    authError: action.error.message,
  });
};

const signOutSuccess = (state, action) => {
  return updateObject(state, { isLoading: false, authError: null });
};

const signUpStart = (state, action) => {
  return updateObject(state, { isLoading: true, authError: null });
};

const signUpSuccess = (state, action) => {
  return updateObject(state, { isLoading: false, authError: null });
};

const signUpError = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    authError: action.error.message,
  });
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return loginStart(state, action);
    case "LOGIN_ERROR":
      return loginError(state, action);
    case "LOGIN_SUCCESS":
      return loginSuccess(state, action);
    case "SIGNOUT_SUCCESS":
      return signOutSuccess(state, action);
    case "SIGNUP_START":
      return signUpStart(state, action);
    case "SIGNUP_SUCCESS":
      return signUpSuccess(state, action);
    case "SIGNUP_ERROR":
      return signUpError(state, action);
    default:
      return state;
  }
};

export default authReducer;
