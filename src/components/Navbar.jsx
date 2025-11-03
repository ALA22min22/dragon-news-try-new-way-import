import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userimg from "../assets/user.png";
import { AuthContex } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContex);

  const handleLogOut =() => {
    userSignOut()
    .then(result => {
      alert('logout sucessfull', result)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-3 items-center">
        <img className="w-12  " src={`${user? user.photoURL : userimg}`} alt="" />
        {
          user ? 
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">Log-Out</button>
          : <Link to={"/auth/login"}><button className="btn btn-primary px-10 ">Login</button></Link>
        }


      </div>
    </div>
  );
};

export default Navbar;
