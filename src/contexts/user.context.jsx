import { createContext, useEffect, useState } from "react";
import {
  createUserDocument,
  onAuthStateChangedListener,
  CurrentLoggedUser,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        createUserDocument(user);
        const loggedUser = await CurrentLoggedUser(user.uid);
        const { displayName } = loggedUser.data();
        setCurrentUser(displayName);
      } else {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
