// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY  ,
  authDomain: "mern-estate-ca642.firebaseapp.com",
  projectId: "mern-estate-ca642",
  storageBucket: "mern-estate-ca642.appspot.com",
  messagingSenderId: "341584434133",
  appId: "1:341584434133:web:8c8965172ec06599e1a35c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);