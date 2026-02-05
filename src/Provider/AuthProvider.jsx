import React, { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading,setLoading] = useState(true)
  // console.log(user,loading);

  //   ---------------create uer email with password----------------
  const creatUserEmail = (email, password) => {
     setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
   
  };
  // -----------handle login button --------------------
  const login = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  };
  // --------------------log out handle-----------------------
  const logOut = ()=>{
    return signOut(auth)
  }
  // -----------------update data profile----------------
  const updateUser = (updateData)=>{
    return updateProfile(auth.currentUser,updateData)
  }
  // --------------------set observer set this site -----------------------------
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubcribe();
    };
  }, []);
  // user info
  const userInfo = {
    creatUserEmail,
    login,
     logOut,
    user,
    setuser,
    loading,
    setLoading,
     updateUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
