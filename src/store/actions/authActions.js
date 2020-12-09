import * as actionTypes from "./actionTypes";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

export const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
  };
};

export const loginError = (error) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    error: error,
  };
};

export const signOutSuccess = () => {
  return {
    type: actionTypes.SIGNOUT_SUCCESS,
  };
};

export const signUpStart = () => {
  return {
    type: actionTypes.SIGNUP_START,
  };
};

export const signUpSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
  };
};

export const signUpError = (error) => {
  return {
    type: actionTypes.SIGNUP_ERROR,
    error: error,
  };
};

export const signIn = (Credentials) => {
  return {
    type: actionTypes.SIGN_IN,
    email: Credentials.email,
    password: Credentials.password,
  };
};

export const signOut = () => {
  return {
    type: actionTypes.SIGNOUT,
  };
};

export const signUp = (newUser) => {
  return {
    type: actionTypes.SIGN_UP,
    email: newUser.email,
    password: newUser.password,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    initials: newUser.firstName[0] + newUser.lastName[0],
  };
};
