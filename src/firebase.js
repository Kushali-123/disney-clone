// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZUzT1308J_O766e_MKSaNpUJeKnhVnBE",
  authDomain: "disneyplus-clone-b9068.firebaseapp.com",
  projectId: "disneyplus-clone-b9068",
  storageBucket: "disneyplus-clone-b9068.appspot.com",
  messagingSenderId: "1004101729204",
  appId: "1:1004101729204:web:1f706b940c98020f72d0e1",
  measurementId: "G-E9N76ZV424"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 
const storage = firebase.storage();

export{auth, provider, storage};
export default db;