import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  //   sign in with google

  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Sign Out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  //   Observe  User  auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  }, []);
  return {
    singInUsingGoogle,
    handleSignOut,
    user,
  };
};

export default useFirebase;
