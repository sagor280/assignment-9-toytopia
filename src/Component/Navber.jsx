import React from 'react';
import { NavLink } from 'react-router';
import './Navber.css';

const Navbar = () => {
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/profile">My Profile</NavLink></li>
      <li><NavLink to="/toys">AllToys</NavLink></li>
    </>
  );

  return (
    <div className="navbar `bg-gradient-to-br` from-primary/10 via-secondary/10 to-accent/10">
      {/* Left - Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Toy</span>
          <span className="text-purple-800">Topia</span>
        </NavLink>
      </div>

      {/* Center - Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          {links}
        </ul>
      </div>

      {/* Right - Button */}
      <div className="navbar-end">
        <NavLink to="/login" className="btn btn-sm bg-neutral text-white font-semibold hover:bg-neutral-focus">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
