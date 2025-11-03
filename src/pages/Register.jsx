import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthProvider';

const Register = () => {
    const { userSignUp, setUser, updateUserProfile } = use(AuthContex);
                                   // look^
    const [nameError, setNameError] = useState("");  //handle name error.

    const navigate = useNavigate();  //nevigate kortesi

    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError('plz provide minimap 5 cherecters');
            return;
        }
        else {
            setNameError("");
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log("all value", name, photo, email, password);

        userSignUp(email, password)
            .then(result => {
                const user = result.user;

                updateUserProfile({ displayName: name, photoURL: photo }) // update-User_profile
                    .then(() => {

                        setUser({...user, displayName: name, photoURL: photo});  //display name photoUrl egula normaly user create korar somoy set hoy nah tai ektu onno vabe set kore dibo. 

                        navigate('/'); // 10 no. apply
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)   // normal jodi error khay tahole eta kaj korbe
                    });

            })
            .catch(error => {
                alert('error find', error)
            })



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
                            <input type="text" name='name' required className="input" placeholder="Your Name" />
                            {
                                nameError && <p className='text-red-500 text-[10px]'>{nameError}</p>
                            }
                            {/* Photo URL */}
                            <label className=" lebel  font-bold">Photo URL</label>
                            <input type="text" name='photo' required className="input" placeholder="Photo URL" />
                            {/* email */}
                            <label className=" lebel  font-bold">Email</label>
                            <input type="email" name="email" required className="input" placeholder="Email" />
                            {/* password */}
                            <label className=" lebel  font-bold">Password</label>
                            <input type="password" name='password' required className="input" placeholder="Password" />
                            {/* checkBox */}
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                Accept Term & Conditions
                            </div>
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
                <p className='text-center mb-2'>Have An Account ? <Link to={'/auth/login'} className='text-secondary'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;