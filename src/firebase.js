import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp(  {
  apiKey: "AIzaSyB3cVAXkzRRKO416LkhF1SyqJ-vehExLD4",
  authDomain: "unichat-e9cf5.firebaseapp.com",
  projectId: "unichat-e9cf5",
  storageBucket: "unichat-e9cf5.appspot.com",
  messagingSenderId: "181794212101",
  appId: "1:181794212101:web:1362859547a4137a5d0f6c"
} ).auth() ;