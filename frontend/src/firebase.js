/* eslint-disable no-unused-vars */


import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dashboard.firebaseapp.com",
  projectId: "mern-blog-dashboard",
  storageBucket: "mern-blog-dashboard.appspot.com",
  messagingSenderId: "886200368187",
  appId: "1:886200368187:web:069895da85dda20526f01e",
  measurementId: "G-Z1D3CFP3PP"
};


export const app = initializeApp(firebaseConfig);
