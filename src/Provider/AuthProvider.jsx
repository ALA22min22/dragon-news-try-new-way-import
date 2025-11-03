import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
// import { createUserWithEmailAndPassword } from 'firebase/auth/web-extension';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContex = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)  // true mane oi user null.

    // console.log(user, loading);

    const userSignUp = (email, password) => {
        setLoading(true); //user loading hosse. true means = user status null.
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userSignOut = () => {
        setLoading(true) //user loading hosse. true means = user status null.
        return signOut(auth)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

//Handle update user Profile:
const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
}


//user state Observer:

    useEffect(()=>{    
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{ //subscribe
            setUser(currentUser);  // user data loaded done.
            setLoading(false)   // then loading is false.
        })

        return ()=>{        //unsubscribe
            unsubscribe();
        }
    }, [])

    const authData = {
        user,
        setUser,
        userSignUp,
        userSignOut,
        userLogin,
        loading,
        setLoading,
        updateUserProfile,
    }

    return <AuthContex value={authData}>
        {children}
    </AuthContex>
};

export default AuthProvider;