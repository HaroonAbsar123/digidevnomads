// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase,  } from "firebase/database";
import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCETf7MKNHSWzE9L4dovk2Zq9iU0wN4dvA",
    authDomain: "fastcash4iphones-cdf6a.firebaseapp.com",
    projectId: "fastcash4iphones-cdf6a",
    storageBucket: "fastcash4iphones-cdf6a.appspot.com",
    messagingSenderId: "863565243595",
    appId: "1:863565243595:web:96f383fabec0ebc954e74e",
    measurementId: "G-9SRJ7FLMMK"
};



firebase.initializeApp({
    apiKey: "AIzaSyCETf7MKNHSWzE9L4dovk2Zq9iU0wN4dvA",
    authDomain: "fastcash4iphones-cdf6a.firebaseapp.com",
    projectId: "fastcash4iphones-cdf6a",
    storageBucket: "fastcash4iphones-cdf6a.appspot.com",
    messagingSenderId: "863565243595",
    appId: "1:863565243595:web:96f383fabec0ebc954e74e",
    measurementId: "G-9SRJ7FLMMK"
  })

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
// export const storage = getStorage(app);
export const db = getFirestore(app)



  