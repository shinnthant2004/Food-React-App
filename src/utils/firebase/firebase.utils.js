import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const createUserDocument = async (user, additional = {}) => {
  if (!user) return;
  const userDocRef = doc(db, "users", user.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additional,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const SignUpWithGoogle = async () =>
  await signInWithPopup(auth, GoogleProvider);

export const SignUpWithEmailAndPassword = async (email, password) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signInUserWithEmailAndPassword = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
