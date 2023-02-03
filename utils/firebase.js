// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfhebuVt04MHjHVAjgER2GdaF1hgJxb1I",
  authDomain: "nativelandnativesky.firebaseapp.com",
  projectId: "nativelandnativesky",
  storageBucket: "nativelandnativesky.appspot.com",
  messagingSenderId: "1019362837009",
  appId: "1:1019362837009:web:8ff571560388ebe79c27b0",
  measurementId: "G-KNT1Z9R21T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
//const analytics = getAnalytics(app);
export  {firestore , auth, app, getAuth, storage};