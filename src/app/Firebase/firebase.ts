// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0wKdYDf71y7z3SgBebFGu3UQWEKEwe-M",
  authDomain: "bijles-planner.firebaseapp.com",
  projectId: "bijles-planner",
  storageBucket: "bijles-planner.appspot.com",
  messagingSenderId: "665319802685",
  appId: "1:665319802685:web:bccf8d7c5a0e2a50d86754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);