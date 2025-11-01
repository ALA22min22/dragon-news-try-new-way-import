import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (

        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center p-2">Login now!</h1>
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
            <p className='text-center mb-2'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link></p>
        </div>
        </div>

    );
};

export default Login;