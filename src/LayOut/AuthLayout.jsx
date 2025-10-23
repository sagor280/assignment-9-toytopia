import React from 'react';
import Navbar from '../Component/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10'>
             <header>
            <Navbar></Navbar>
        </header>
        <main className=''>
            <Outlet></Outlet>
        </main>
        </div>
    );
};

export default AuthLayout;