import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import SocalSign from '../../Sheard/SocalSign/SocalSign';

const SignUp = () => {

  const { signUp, setUpdateProfile,setLoading } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleSignUp = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const account = form.account.value;



    signUp(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        setProfile(name, photoURL)

        // data post 
        const userData = {
          email: email,
          name: name,
          accountType: account
        }

        fetch(` http://localhost:5000/registerData`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userData)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setLoading(false)
            navigate(from, { replace: true })
          })



      })
      .catch(error => console.error(error))

  }

  const setProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }

    setUpdateProfile(profile)
      .then(() => { })
      .catch(error => console.error(error))

  }

  return (
    <div className='container-fluid pb-4 bg-color text-color'>

      <div className='row  align-items-center g-4'>

      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
      </div>

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



          <form className='w-75 pt-5 container' onSubmit={handleSignUp}>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label fw-bold ">Full Name</label>
              <input type="text" name='name' className="form-control  inputField" placeholder="Full Name" required />
            </div>

            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label fw-bold ">Image URL</label>
              <input type="text" name='photoURL' className="form-control  inputField" placeholder="Image URL" required />
            </div>

            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label fw-bold ">Email</label>
              <input type="email" name='email' className="form-control  inputField" placeholder="Email" required />
            </div>

            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label fw-bold">Password</label>
              <input type="password" name='password' className="form-control  inputField" placeholder="Password" required />
            </div>

            <select name='account' class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>

            </select>

            <div>
              {/* <p>{error}</p> */}
            </div>

            <div className='pt-4'>
              <button type="submit" className="btn submitButton btn-lg w-100 bg-danger">Sign Up</button>
            </div>

          </form>

          <div className=''>
            <p className='text-center fw-bold'>Already have an account?  <Link to="/login" className='forgotPass fw-bold'> Sign in</Link> </p>
          </div>

          <SocalSign />

        </div>

      </div >

    </div >
  );
};

export default SignUp;