// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "compegg-67678.firebaseapp.com",
  projectId: "compegg-67678",
  storageBucket: "compegg-67678.appspot.com",
  messagingSenderId: "233709940517",
  appId: "1:233709940517:web:3ffdc4c878c7429e88f4cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);