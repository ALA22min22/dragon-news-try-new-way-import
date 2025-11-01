// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyComEBWAHHIf0ib2D68nlE9ytj92tiEpSQ",
  authDomain: "dragon-ball-news.firebaseapp.com",
  projectId: "dragon-ball-news",
  storageBucket: "dragon-ball-news.firebasestorage.app",
  messagingSenderId: "348328890223",
  appId: "1:348328890223:web:ce7904c7a4d317c421629a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
