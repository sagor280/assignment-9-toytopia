import React, { use } from 'react';

import './Navber.css';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const{user,logOut}=use(AuthContext);
  const handleLogOut=()=>{
    console.log('user try to logout');
    logOut()
    .then(()=>{
      alert('You Logged Out successfully');
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="nav-link">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/toys" className="nav-link">All Toys</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-6 shadow-md sticky top-0 z-50">
      <div>{user && user.email}</div>
      {/* Left - Logo */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-4 shadow-lg">
            {links}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-1">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Toy</span>
            <span className="text-purple-800">Topia</span>
          </h1>
        </NavLink>
      </div>

      {/* Center - Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          {links}
        </ul>
      </div>

    
      <div className="navbar-end">
        {
          user ?( <button onClick={handleLogOut} className='btn px-10 bg-gradient-to-r from-purple-600 to-pink-500 border-none text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-md'>LogOut</button>) :(<Link
          to="/auth/login"
          className="btn px-10 bg-gradient-to-r from-purple-600 to-pink-500 border-none text-white font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
        >
          Login
        </Link>)
        }
        
      </div>
    </div>
  );
};

export default Navbar;
