import React from 'react';
import brand from '../../assets/caru-img/bner1170-1.png'

const BrandSection = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center mt-4'>

      <div>
        <hr class="border border-danger border-2 opacity-50" />
        <img src={brand} className="img-fluid" alt="" />
        <hr class="border border-danger border-2 opacity-50" />
      </div>


    </div>
  );
};

export default BrandSection;