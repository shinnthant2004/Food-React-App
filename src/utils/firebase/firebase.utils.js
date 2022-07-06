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
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADvYjsBrb_0eZjd0eUQarBqfKp9Rzysn4",
  authDomain: "food-app-90661.firebaseapp.com",
  projectId: "food-app-90661",
  storageBucket: "food-app-90661.appspot.com",
  messagingSenderId: "1065532026596",
  appId: "1:1065532026596:web:bb8fdaa3f42fee782dc6f1",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
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
    const { displayName, email, imageUrl } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        imageUrl,
        ...additional,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export const getUserDetail = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    return docSnapShot;
  }
};

export const createCollectionAndDocuments = async (
  collectionKey,
  addDocumentsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  addDocumentsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object["name"]);
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
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
