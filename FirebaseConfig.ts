import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdLf-y9UpwuQjJYuIYmQ9wU29gvVs2eR4",
  authDomain: "mhelps-3fae8.firebaseapp.com",
  projectId: "mhelps-3fae8",
  storageBucket: "mhelps-3fae8.appspot.com",
  messagingSenderId: "40045876080",
  appId: "1:40045876080:web:101a91796a9c90fa69f5b5",
  measurementId: "G-C88TDTRXT0",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
