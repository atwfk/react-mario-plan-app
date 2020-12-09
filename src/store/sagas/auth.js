import { put } from "redux-saga/effects";
import * as actions from "../actions/authActions";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

export function* signInSaga(action) {
  yield put(actions.loginStart());
  const firebase = yield getFirebase();
  try {
    yield firebase
      .auth()
      .signInWithEmailAndPassword(action.email, action.password);
    yield put(actions.loginSuccess());
  } catch (error) {
    yield put(actions.loginError(error));
  }
}

export function* signOutSaga(action) {
  const firebase = yield getFirebase();
  yield firebase.auth().signOut();
  yield put(actions.signOutSuccess());
}

export function* signUpSaga(action) {
  yield put(actions.signUpStart());
  const firebase = yield getFirebase();
  const firestore = yield getFirestore();
  try {
    const response = yield firebase
      .auth()
      .createUserWithEmailAndPassword(action.email, action.password);
    firestore
      .collection("users")
      .doc(response.user.uid)
      .set({
        firstName: action.firstName,
        lastName: action.lastName,
        initials: action.firstName[0] + action.lastName[0],
      });
    yield put(actions.signUpSuccess());
  } catch (error) {
    yield put(actions.signUpError(error));
  }
}
