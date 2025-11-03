import React, { use } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivetRoute = ({children}) => {
    const {user, loading} = use(AuthContex);
    const location = useLocation();
    // console.log(location);

    if(loading){ // loading: true & user: null
        return <Loading></Loading>  //user null handle kortese. then->
    }

    if(user && user?.email){ //loading: false & user: have data.
        return children;     // user data pawar por user data show kortese.
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate> // when user is false then nevigate to the login page.
};

export default PrivetRoute;