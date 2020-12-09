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
  return (dispatch, getState, { getFirebase }) => {
    dispatch(loginStart());
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(Credentials.email, Credentials.password)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOutSuccess());
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(signUpStart());
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch(signUpSuccess());
      })
      .catch((error) => {
        dispatch(signUpError(error));
      });
  };
};
