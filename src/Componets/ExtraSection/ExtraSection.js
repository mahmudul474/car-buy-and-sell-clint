import React from 'react';
import './ExtraSection.css'
import { Link } from 'react-router-dom';

const ExtraSection = () => {
  return (
    <div className='bg-danger1 p-5'>
      <div className='row'>

        <div className='col-12 col-lg-8 col-md-8 d-flex justify-content-center align-items-center'>
          <div>
            <h2 className='text-font fw-bold text-white'>Motoro is perfect for your start up business !</h2>
            <p className='text-white'>You will save your time and money get started today.</p>
          </div>
        </div>

        <div className='col-12 col-lg-4 col-md-4 d-flex justify-content-center align-items-center'>
          <Link to='/signup'> <button className='btn btn-hover px-5 py-4 fw-bold text-white text-font font-size rounded-pill'>Sign Up</button> </Link>
        </div>

      </div>
    </div>
  );
};

export default ExtraSection;