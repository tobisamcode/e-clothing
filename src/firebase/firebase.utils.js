import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyAizLuXeAfUok4YcJbAje7Px6mfZkvrNQM",
  authDomain: "e-clothing-d3e53.firebaseapp.com",
  projectId: "e-clothing-d3e53",
  storageBucket: "e-clothing-d3e53.appspot.com",
  messagingSenderId: "649096120687",
  appId: "1:649096120687:web:88e97564ed1a818dd0009a",
  measurementId: "G-F6XC7C65YW"
};

const firebaseApp = initializeApp(config);

firebase.initializeApp(config);

export const auth = getAuth(firebaseApp);
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).then(result => {}).catch(() => {});
export default firebase;