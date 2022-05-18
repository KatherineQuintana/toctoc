// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8i0MxmPujd2o8rofO0hjRLf6pL6ju2ss",
  authDomain: "toctoc-6f865.firebaseapp.com",
  projectId: "toctoc-6f865",
  storageBucket: "toctoc-6f865.appspot.com",
  messagingSenderId: "121276836257",
  appId: "1:121276836257:web:57d285c911f3da928c43e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;

export const saveData = (name) => {
  addDoc(collection(db, "eventData"), {
    name,
    datepost: Timestamp.fromDate(new Date()),
    });
}