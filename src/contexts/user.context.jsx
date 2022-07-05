import { createContext, useEffect, useState } from "react";
import {
  createUserDocument,
  onAuthStateChangedListener,
  getUserDetail,
  signOutUser,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  openSignIn: true,
  setOpenSignIn: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(true);
  const value = {
    currentUserName,
    setCurrentUserName,
    currentUserProfile,
    setCurrentUserProfile,
    openSignIn,
    setOpenSignIn,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      console.log(user);
      if (user) {
        createUserDocument(user);
        const loggedUser = await getUserDetail(user.uid);
        if (loggedUser) {
          const { displayName, imageUrl } = loggedUser.data();
          setCurrentUserName(displayName);
          setCurrentUserProfile(imageUrl);
        } else {
          const { displayName, photoURL } = user;
          setCurrentUserName(displayName);
          setCurrentUserProfile(photoURL);
        }
      } else {
        setCurrentUserName(user);
        setCurrentUserProfile(null);
      }
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
