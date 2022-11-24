import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut }from "firebase/auth"
import app from '../firebase_config/Firebase.config';
 
export  const AuthContext=createContext()
const auth=getAuth(app)


const AuthProvider = ({children}) => {
const [user,setUser]=useState("")
    //user create in gmail-password
const creatUser=(email,password)=>{
 return  createUserWithEmailAndPassword(auth, email, password)
}

const login=(email,password)=>{

    return signInWithEmailAndPassword(auth, email, password)

}


const logOut=()=>{
    return signOut(auth)
}


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (creatUser)=>{
        setUser(creatUser)
    })

 return ()=>unsubscribe();

})




const authIfo={
    creatUser,
    login,
    logOut,
    user,
    
}

    return (
       
<AuthContext.Provider value={authIfo}>
    {children}
</AuthContext.Provider>


    );
};

export default AuthProvider;