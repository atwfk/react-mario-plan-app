import { updateObject } from "../utility";

const initState = {
  isLoading: false,
};

const createProjectStart = (state, action) => {
  return updateObject(state, { isLoading: true });
};

const createProjectSuccess = (state, action) => {
  return updateObject(state, { isLoading: false });
};

const createProjectError = (state, action) => {
  return updateObject(state, { isLoading: false });
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_START":
      return createProjectStart(state, action);
    case "CREATE_PROJECT_SUCCESS":
      return createProjectSuccess(state, action);
    case "CREATE_PROJECT_ERROR":
      return createProjectError(state, action);
    default:
      return state;
  }
};

export default projectReducer;
