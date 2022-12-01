import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth'
import { AuthContext } from '../../Auth/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocalSign = () => {

  const { providerLogIn, user } = useContext(AuthContext)
  

  const provider = new GoogleAuthProvider()

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleSocial = () => {

    providerLogIn(provider)
      .then(result => {
        const email = result.user.email
        console.log(email)

       


        fetch(`https://hea-easy-server-devsobuj910.vercel.app/socialLogin/${user?.email}`)
          .then((res) => res.json())
          .then((result) => localStorage.setItem('AccountStatus', result[0].accountType));
        navigate(from, { replace: true })

      })
      .catch(error => console.error(error))

 



  }

  return (
    <div className='mt-3 px-3 text-center'>
      <button onClick={handleSocial} class="btn btn-info w-75 py-2 fw-bold" type="button">Sign In With Google</button>
    </div>
  );

};

export default SocalSign;