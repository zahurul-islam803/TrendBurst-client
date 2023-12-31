/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

// create user
const createUser = (email, password) =>{
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
}

// login
const login = (email, password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
}

// signInWithGoogle
const signInGoogle = () =>{
  setLoading(true);
  return signInWithPopup(auth, provider)
}

// updateProfile
const updateUserProfile = (name, photo) =>{
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
}

// logOut
const logOut = () =>{
  setLoading(true);
  return signOut(auth);
}

// onAuthStateChange
useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser);
    setLoading(false);
  });
  return ()=>{
    return unSubscribe ()
  };
},[]);
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    signInGoogle,
    updateUserProfile,
    logOut,
  }
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
