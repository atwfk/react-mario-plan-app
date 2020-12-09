import { put, select } from "redux-saga/effects";
import * as actions from "../actions/projectActions";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

export function* createProjectSaga(action) {
  yield put(actions.createProjectStart());
  //Make async call to database
  const getProfile = (state) => state.firebase.profile;
  const getAthorId = (state) => state.firebase.auth.uid;
  const firebase = yield getFirebase();
  const firestore = yield getFirestore();
  const profile = yield select(getProfile, firebase);
  const authorId = yield select(getAthorId, firebase);
  try {
    yield firestore.collection("projects").add({
      ...action.project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
    });
    yield put(actions.createProjectSuccess());
  } catch (error) {
    yield put(actions.createProjectError(error));
  }
}
