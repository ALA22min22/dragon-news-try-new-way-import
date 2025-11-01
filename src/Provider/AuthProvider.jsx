import React, { createContext, useState } from 'react';

export const AuthContex = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const authData = {
        user,
        setUser,
    }

    return <AuthContex value={authData}>
        {children}
    </AuthContex>
};

export default AuthProvider;