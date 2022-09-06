import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAizLuXeAfUok4YcJbAje7Px6mfZkvrNQM",
  authDomain: "e-clothing-d3e53.firebaseapp.com",
  projectId: "e-clothing-d3e53",
  storageBucket: "e-clothing-d3e53.appspot.com",
  messagingSenderId: "649096120687",
  appId: "1:649096120687:web:88e97564ed1a818dd0009a",
  measurementId: "G-F6XC7C65YW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
