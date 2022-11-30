import React from 'react';
import './HomeBanner.css'
import slid from "../.././assets/caru-img/slide-1.jpg"
import "./Banner.css"

const HomeBanner1 = () => {
  return (
    <div className='container-fluid  text-font  ' style={{ backgroundImage: `url(${slid})` }}>

      <div className='row  height' >

        <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center py-5'    >
            
            <div className='text-light' >
               <h1 className=''> Who Royal Cars Are.  </h1>
               <h4 className='fw-bold'>Buy <span className='text-warning1'>&</span> Sell Your Dream Car</h4>
               <button className='btn btn-primary mt-5  w-50 py-3 '>show more</button>
            </div>
      
        </div>

     

      </div>
      
    </div>
  );
};

export default HomeBanner1;