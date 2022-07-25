import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEKqrqmiQ--aLlqrIDL-6OYSfupBjFEio",
  authDomain: "housing-app-dd5ea.firebaseapp.com",
  projectId: "housing-app-dd5ea",
  storageBucket: "housing-app-dd5ea.appspot.com",
  messagingSenderId: "693353697781",
  appId: "1:693353697781:web:05efa1cb6d7dc8045f50bc",
  measurementId: "G-CK0HYR71PN"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
initializeApp(firebaseConfig)
export const db = getFirestore()