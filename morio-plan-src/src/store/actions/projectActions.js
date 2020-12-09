import * as actionTypes from "./actionTypes";

const createProjectStart = () => {
  return {
    type: actionTypes.CREATE_PROJECT_START,
  };
};

const createProjectSuccess = () => {
  return {
    type: actionTypes.CREATE_PROJECT,
  };
};

const createProjectError = (error) => {
  return {
    type: actionTypes.CREATE_PROJECT_ERROR,
    error: error,
  };
};

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(createProjectStart());
    //Make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(createProjectSuccess());
      })
      .catch((error) => {
        dispatch(createProjectError(error));
      });
  };
};
