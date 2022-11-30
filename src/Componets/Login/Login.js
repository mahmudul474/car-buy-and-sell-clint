import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import SocalSign from '../../Sheard/SocalSign/SocalSign';

const Login = () => {

  const { logIn } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)
    logIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch(error => console.error(error))

  }

  return (
    <div className='container-fluid pb-4 bg-color text-color'>

      <div className='row  align-items-center g-4'>

        < div className='col-12 col-lg-6 ps-0 ps-lg-5 d-none d-lg-block' >
          <img src='' className='img-fluid' alt="" />
          <div className='text-center pt-3'>
            <h1 className='fw-bold text-danger'>WelCome Motor <br /> Automotive Theme</h1>
            <p className='px-0 px-lg-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore vitae iusto officiis repudiandae cumque aliquid eius laborum doloribus non</p>
          </div>
        </div >

        <div className='col-12 col-lg-6 '>

          <div className='row align-items-center'>
            <div className='col-0 col-lg-1'>

            </div>
            <div className='col-8 col-lg-7 ps-5'>
              <img src='' className='w-50 pb-2 pb-lg-5' alt="" />
              <h1>Sign into Your Account</h1>
            </div>
            <div className='col-4 d-flex align-items-center gap-2 backtoHome'>
              <i className="fa-solid fa-arrow-left"></i>
              <Link to="/" className='backtoHome'>Back to Home</Link>
            </div>

          </div>



          <form className='w-75 pt-5 container ' onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label fw-bold ">Email</label>
              <input type="email" name='email' className="form-control  inputField" id="formGroupExampleInput" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label fw-bold">Password</label>
              <input type="password" name='password' className="form-control  inputField" id="formGroupExampleInput2" placeholder="Password" required />
            </div>


            <>

            </>
            <div className=''>
              <p className='text-center fw-bold'>Need User? <Link to="/signUp" className='forgotPass'> Sign Up </Link> </p>
            </div>

            <div className='pt-4'>
              <button type="submit" className="btn submitButton btn-lg bg-danger w-100">Sign In</button>
            </div>

          </form>


          <SocalSign />


        </div>

      </div >

    </div >
  );
};

export default Login;