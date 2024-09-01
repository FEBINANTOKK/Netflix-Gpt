// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyVLwGCYi3mixr0MFTQc62fbeCodL5Qns",
  authDomain: "netflixgpt-abdda.firebaseapp.com",
  projectId: "netflixgpt-abdda",
  storageBucket: "netflixgpt-abdda.appspot.com",
  messagingSenderId: "485307304473",
  appId: "1:485307304473:web:59823b63c7f1e98955f888",
  measurementId: "G-YSKFJ7Q0PP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
