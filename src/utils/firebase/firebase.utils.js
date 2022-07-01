import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADvYjsBrb_0eZjd0eUQarBqfKp9Rzysn4",
  authDomain: "food-app-90661.firebaseapp.com",
  projectId: "food-app-90661",
  storageBucket: "food-app-90661.appspot.com",
  messagingSenderId: "1065532026596",
  appId: "1:1065532026596:web:bb8fdaa3f42fee782dc6f1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
