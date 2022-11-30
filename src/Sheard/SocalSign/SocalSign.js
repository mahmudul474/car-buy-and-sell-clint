import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth'
import { AuthContext } from '../../Auth/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocalSign = () => {

  const { providerLogIn, user } = useContext(AuthContext)
  const [social, setSocal] = useState()

  const provider = new GoogleAuthProvider()

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleSocial = () => {

    providerLogIn(provider)
      .then(result => {
        const email = result.user.email
        console.log(email)

        // const social ={
        //   email: user.email,
        //   name: user.displayName,
        //   accountType: 'Buyer'
        // }

        //  fetch(`http://localhost:5000/registerData/${user?.email}`,{
        //    method: 'POST',
        //    headers :{
        //     'content-type': 'application/json',
        //    },
        //    body: JSON.stringify(social)
        //  })
        //  .then(res => res.json())
        //  .then(data => setSocal(data))


        fetch(`http://localhost:5000/socialLogin/${user?.email}`)
          .then((res) => res.json())
          .then((result) => localStorage.setItem('AccountStatus', result[0].accountType));
        navigate(from, { replace: true })

      })
      .catch(error => console.error(error))

  //     fetch(`http://localhost:5000/socialLogin/${user?.email}`,{
  //       method: 'POST',

  //     })
  //     .then((res) => res.json())
  //     .then((result) => localStorage.setItem('AccountStatus', result[0].accountType));
  //   navigate(from, { replace: true })

  // })
  // .catch(error => console.error(error))



  }

  return (
    <div className='mt-3 px-3 text-center'>
      <button onClick={handleSocial} class="btn btn-info w-75 py-2 fw-bold" type="button">Sign In With Google</button>
    </div>
  );

};

export default SocalSign;