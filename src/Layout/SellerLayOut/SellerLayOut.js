import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';
import Navbar from '../../Sheard/Navbar/Navbar';

const SellerLayOut = () => {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default SellerLayOut;