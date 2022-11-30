import React from 'react';
import { Outlet } from 'react-router-dom';
import DeshBoardNave from '../../Sheard/DeshBoardNave/DeshBoardNave';
import Footer from '../../Sheard/Footer/Footer';

const DeahBoardLayOut = () => {
  return (
    <div>
       <DeshBoardNave></DeshBoardNave>
       <Outlet></Outlet>
      
    </div>
  );
};

export default DeahBoardLayOut;