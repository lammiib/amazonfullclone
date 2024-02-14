import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Dd5LSwmCvGNOaAoY_7NB6UDIsTXRqO0",
  authDomain: "fullclone-44283.firebaseapp.com",
  projectId: "fullclone-44283",
  storageBucket: "fullclone-44283.appspot.com",
  messagingSenderId: "86826697167",
  appId: "1:86826697167:web:dc3933f8be1af1ae5e52ba"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
