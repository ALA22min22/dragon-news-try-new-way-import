import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContex } from '../Provider/AuthProvider';

const Register = () => {
    const provider = use(AuthContex)

    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("all value",name, photo, email, password);

        

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold text-center p-2">Register now!</h1>
                <div className="card-body">
                    <form onSubmit={handleForm}>
                        <fieldset className="fieldset">
                            {/* Your Name */}
                            <label className=" lebel  font-bold">Your Name</label>
                            <input type="text" name='name' className="input" placeholder="Your Name" />
                            {/* Photo URL */}
                            <label className=" lebel  font-bold">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />
                            {/* email */}
                            <label className=" lebel  font-bold">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            {/* password */}
                            <label className=" lebel  font-bold">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                Accept Term & Conditions
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
                <p className='text-center mb-2'>Have An Account ? <Link to={'/auth/login'} className='text-secondary'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;