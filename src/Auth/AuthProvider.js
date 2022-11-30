import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import Loading from '../Sheard/Loading/Loading';

export const AuthContext = createContext() 

 const auth = getAuth(app)

 const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  const providerLogIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth,provider)
  }

  const signUp = (email, password) => {
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password) 
  }

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  const setUpdateProfile = (profile) => {
    setLoading(true)
    return updateProfile(auth.currentUser, profile)
  }

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, currentUser => {

      setUser(currentUser)
      setLoading(false)

   });
   return () => {
     return unsubscribe;
   } 
  },[])

  if(loading){
    return <Loading/>
  }
    
  const authInfo = {
    signUp , logIn , loading ,user, providerLogIn, logOut , setUpdateProfile
  }

  return (
    <div>
       <AuthContext.Provider value={authInfo}> 
            {children}
       </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;