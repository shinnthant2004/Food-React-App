import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
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

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const SignUpWithGoogle = async () =>
  await signInWithPopup(auth, GoogleProvider);

export const SignUpWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signInUserWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);
