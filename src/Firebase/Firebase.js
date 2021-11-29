import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDavrpLF_sonuQQ6kToUEkS-JySuHidpNg",
  authDomain: "buyfy-55134.firebaseapp.com",
  projectId: "buyfy-55134",
  storageBucket: "buyfy-55134.appspot.com",
  messagingSenderId: "790433390594",
  appId: "1:790433390594:web:f6078576f36ad58006c71b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const serverTimestamp = () =>
  firebase.firestore.FieldValue.serverTimestamp();
export const storage = firebase.storage().ref();

export default firebase;
