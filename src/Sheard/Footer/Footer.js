import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-black text-white p-3'>
      <div className='container py-5'>
        <div className='row'>

          <div className='col-12 col-lg-4 '>
          <Link to="/"> <div>
          <h1 className='text-primary'><span className='text-white'>Hea</span>Easy</h1>
         </div></Link>
          </div>

          <div className='col-6 col-lg-2 footerHeaders'>
            <h4>For Sell</h4>
            <ul className='footerList'>

              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              
            </ul>
          </div>

          <div className='col-6 col-lg-2 footerHeaders'>
            <h4>For Pre-Order</h4>
            <ul className='footerList'>

              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              
            </ul>

          </div>

          <div className='col-12 col-lg-4 footerHeaders'>
            <h4>News Letter</h4>

            <div className='footerContacts'>
              <p className='text-success'><i className="fa-solid fa-location-dot"></i></p>
              <h6 className='text-wrap '>3556 Beech Street, San Francisco,
                California, CA 94108
              </h6>
            </div>

            <div className='footerContacts'>
              <p className='text-warning'><i className="fa-solid fa-envelope"></i></p>
              <h6> allen@example.com</h6>
            </div>

            <div className='footerContacts'>
              <p className='text-info'><i className="fa-solid fa-phone"></i></p>
              <h6> +88 01234293874</h6>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Footer;