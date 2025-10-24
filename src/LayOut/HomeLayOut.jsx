import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import Loading from '../Page/Loading';
 


const HomeLayOut = () => {
    const {state}=useNavigation();
    return (
        <div className=' '>
            <Navber></Navber>
            
            <main  className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 ">
           {state=="loading" ? <Loading/> :<Outlet></Outlet>} 
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayOut;