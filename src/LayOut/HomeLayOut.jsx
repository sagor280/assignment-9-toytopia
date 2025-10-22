import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import HeroSection from '../Component/Hero';
import Hero from '../Component/Hero';


const HomeLayOut = () => {
    return (
        <div className=' '>
            <Navber></Navber>
            
            <main  className="min-h-[80vh] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 ">
            <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayOut;