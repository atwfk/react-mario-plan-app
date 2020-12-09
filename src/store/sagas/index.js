import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { signInSaga, signOutSaga, signUpSaga } from "./auth";
import { createProjectSaga } from "./projects";

export function* watchAuth() {
  yield all([
    yield takeEvery(actionTypes.SIGN_IN, signInSaga),
    yield takeEvery(actionTypes.SIGNOUT, signOutSaga),
    yield takeEvery(actionTypes.SIGN_UP, signUpSaga),
  ]);
}

export function* watchProject() {
  yield takeEvery(actionTypes.CREATE_PROJECT, createProjectSaga);
}
