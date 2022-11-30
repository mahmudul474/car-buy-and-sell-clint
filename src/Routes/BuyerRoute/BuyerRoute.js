import React, { Children, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';
import Loading from '../../Sheard/Loading/Loading';

const BuyerRoute = ({children}) => {

  const {user, loading} = useState(AuthContext)
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email)

  const location = useLocation()

  if(loading || isBuyerLoading){
     return <Loading/>
  }

  if(user && isBuyer){
    return children;
  }

  return <Navigate to='/login' state={{from: location}}></Navigate>

};

export default BuyerRoute;