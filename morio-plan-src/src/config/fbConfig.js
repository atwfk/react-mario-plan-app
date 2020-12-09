import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA9R8KyDfxRlbCUcdx-VwEwD08la8xzAOo",
  authDomain: "mario-plan-app-b6580.firebaseapp.com",
  databaseURL: "https://mario-plan-app-b6580.firebaseio.com",
  projectId: "mario-plan-app-b6580",
  storageBucket: "mario-plan-app-b6580.appspot.com",
  messagingSenderId: "466237957341",
  appId: "1:466237957341:web:983acbc1c6a821dab2e734",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
