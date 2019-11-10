import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1LSuAy__OBsJzJNhJYAcqDYLknoZ_ie0",
  authDomain: "crwn-db-11302.firebaseapp.com",
  databaseURL: "https://crwn-db-11302.firebaseio.com",
  projectId: "crwn-db-11302",
  storageBucket: "crwn-db-11302.appspot.com",
  messagingSenderId: "776954515321",
  appId: "1:776954515321:web:bafd22a83ab7db2ddbe9a8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// Always show Google pop-up when authenticating
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
