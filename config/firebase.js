// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDzhvAlNrqXK9GZ_mre5A9dXUJmaXgTtB0",
  authDomain: "mader-57c7e.firebaseapp.com",
  projectId: "mader-57c7e",
  storageBucket: "mader-57c7e.appspot.com",
  messagingSenderId: "368879251778",
  appId: "1:368879251778:web:23e4e017ca8027b83e18db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);