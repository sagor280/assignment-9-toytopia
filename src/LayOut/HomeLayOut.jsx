import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';



const HomeLayOut = () => {
    return (
        <div className=' '>
            <Navber></Navber>
            
            <main  className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 ">
            <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayOut;