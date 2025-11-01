import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayouty = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='py-10 w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className=''>  
                {/* w-4/12 mx-auto */}
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayouty;