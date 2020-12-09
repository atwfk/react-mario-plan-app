import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { reduxFirestore, createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";
import Spinner from "./components/layout/spinner/Spinner";
import { watchAuth, watchProject } from "./store/sagas/index";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware),
    reduxFirestore(firebase, fbConfig)
  )
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchProject);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Spinner />;
  return children;
}

const app = (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
