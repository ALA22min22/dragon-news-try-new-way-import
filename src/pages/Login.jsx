import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthProvider';

const Login = () => {

    const { userLogin, setUser } = use(AuthContex);

    const location = useLocation();    // which location I am trying to get.
    const navigate = useNavigate();    //user login then nevigate the path.
    // console.log(location);

    const [error, setError] = useState(''); //handle error msg


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log("Login value", email, password);

        userLogin(email, password)
            .then(result => {
                const user = result.user
                // setUser(user);
                console.log(user);

                navigate(`${location.state? location.state : "/"}`) // 10 & 9 no line applying.
                
            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                // alert(errorCode, errorMessage)
                setError(errorCode);
            })


    }

    return (

        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold text-center p-2">Login now!</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
                <p className='text-center mb-2'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link></p>
            </div>
        </div>

    );
};

export default Login;