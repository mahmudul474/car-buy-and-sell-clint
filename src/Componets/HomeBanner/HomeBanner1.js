import React from 'react';
import './HomeBanner.css'
import cover from '../../assets/caru-img/cover1.jfif'

const HomeBanner1 = () => {
  return (
    <div className='container-fluid bg-danger1 text-font'>

      <div className='row'>

        <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'>
            
            <div className='text-white'>
               <h1 className=''> WELCOME <span className='text-warning1'> MOTORO <br /> AUTOMOTIVE THEME</span> </h1>
               <h4 className='fw-bold'>Buy <span className='text-warning1'>&</span> Sell Your Dream Car</h4>
            </div>
      
        </div>

        <div className='col-12 col-md-6 col-lg-6'>
          <img src={cover} className='img-fluid w-100' alt="" />
        </div>

      </div>
      
    </div>
  );
};

export default HomeBanner1;