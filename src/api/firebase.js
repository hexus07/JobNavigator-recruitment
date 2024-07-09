// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0l6RbUlXt0wwweOJYhgkuh0HNELgG0I",
  authDomain: "jobnavigator-c2260.firebaseapp.com",
  databaseURL:
    "https://jobnavigator-c2260-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jobnavigator-c2260",
  storageBucket: "jobnavigator-c2260.appspot.com",
  messagingSenderId: "46381311525",
  appId: "1:46381311525:web:6087c15436f17c6a7101cc",
  measurementId: "G-FWLVBCCW1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
