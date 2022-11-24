import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sharred/Footer/Footer';
import Navbar from '../Pages/Sharred/Navar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>



        </div>
    );
};

export default Main;