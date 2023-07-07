import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
 
export const AuthContex = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signup = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logout = ()=>{
        return signOut(auth)
    }

    const provider = new GoogleAuthProvider()

    const googlesigin = ()=>{
        return signInWithPopup(auth, provider)
    }

    const undateprof =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=> unsubscrib()
    },[])

    const authInfo = {signup,user, logout, undateprof, googlesigin, login}
    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;