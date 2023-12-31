import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null) 
    const auth = getAuth(app)
    const googleAuth = new GoogleAuthProvider()
    const githubAuth = new GithubAuthProvider()
    const singUpWithEmail = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singUpWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleAuth)
    }
    const singUpWithGitHub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,githubAuth)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const userAuth = {
        user,
        singUpWithEmail,
        singUpWithGoogle,
        singUpWithGitHub,
        signIn,
        logOut,
        loading
    }
    
    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;