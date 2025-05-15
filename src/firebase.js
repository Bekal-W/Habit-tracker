// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_dybpXEaLWLhA89gMlDltB8VjEmCHkhI",
  authDomain: "habit-tracker-ba845.firebaseapp.com",
  projectId: "habit-tracker-ba845",
  storageBucket: "habit-tracker-ba845.firebasestorage.app",
  messagingSenderId: "691481451118",
  appId: "1:691481451118:web:0d1db6b77b8bd0d614647f",
  measurementId: "G-0SFN59N7RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

