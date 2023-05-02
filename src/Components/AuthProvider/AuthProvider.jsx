import React, { createContext } from 'react';
export const AuthContext = createContext(null)
import {getAuth} from 'firebase/auth'
import app from '../../Firebase/firebase.config';
const AuthProvider = ({children}) => {
    const user = 'Mehedi Hasan'
    const auth = getAuth(app)
    const singUpWithEmail = (email,password)=>{
        return 
    }
    const userAuth = {
        user
    }
    
    return (
        <AuthContext.Provider value={userAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;