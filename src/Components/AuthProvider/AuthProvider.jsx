import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null) 
    const auth = getAuth(app)
    const googleAuth = new GoogleAuthProvider()
    const singUpWithEmail = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singUpWithGoogle = ()=>{
        return signInWithPopup(auth,googleAuth)
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe()
    },[])

    const userAuth = {
        user,
        singUpWithEmail,
        singUpWithGoogle,
        signIn,
        logOut
    }
    
    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;