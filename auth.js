// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr7R3WRo8ubp9VbrblAPyCdXuOzeTq_M0",
  authDomain: "vanilla-firebase-b66de.firebaseapp.com",
  projectId: "vanilla-firebase-b66de",
  storageBucket: "vanilla-firebase-b66de.appspot.com",
  messagingSenderId: "214190730726",
  appId: "1:214190730726:web:f7d507cc1e00c17c523a27",
  measurementId: "G-8LVB5F4Q7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);