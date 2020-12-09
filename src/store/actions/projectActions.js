import * as actionTypes from "./actionTypes";

export const createProjectStart = () => {
  return {
    type: actionTypes.CREATE_PROJECT_START,
  };
};

export const createProjectSuccess = () => {
  return {
    type: actionTypes.CREATE_PROJECT_SUCCESS,
  };
};

export const createProjectError = (error) => {
  return {
    type: actionTypes.CREATE_PROJECT_ERROR,
    error: error,
  };
};

export const createProject = (project) => {
  return {
    type: actionTypes.CREATE_PROJECT,
    project: project,
  };
};
