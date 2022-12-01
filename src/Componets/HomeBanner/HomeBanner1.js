import React from 'react';
import './HomeBanner.css'
import cover from '../../assets/slide-1.jpg'

const HomeBanner1 = () => {
  return (
    <div className='container-fluid  text-font  ' style={{ backgroundImage: `url(${cover})` }}>

    <div className='row ' style={{height:"500px"}} >

      <div className='col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center py-5'    >
          
          <div className='text-light' >
             <h1 className=''> Who Royal Cars Are.  </h1>
             <h4 className='fw-bold'>Buy <span className='text-warning1'>&</span> Sell Your Dream Car</h4>
             <p className='mt-3'>Automotive dealerships with consistent sales training regimens will typically ... <br/> today's automotive employees....
</p>
             <button className='btn btn-primary mt-2  w-50 py-3 '>show more</button>
          </div>
    
      </div>

   

    </div>
    
  </div>
  );
};

export default HomeBanner1;