import React, { useEffect, useState } from 'react';
import './CsarCategoris.css'
import cover from '../../assets/caru-img/Mercedes-cover.jpg'
import car from '../../assets/caru-img/ferrari.jpg'
import BookModal from '../BookModal/BookModal';
import Category from '../Category/Category';

const CarCategoris = () => {
    


  return (
    <div>
      <div class="card text-bg-dark ">
        <img src={cover} class="card-img img-fluid igm-height" alt="..." />
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <div className='text-center'>
            <div className='text-white'>

              <h1 className='shadow-lg'> <span className=''>WELCOME</span> <span className='text-warning1'> MOTORO <br /> AUTOMOTIVE THEME</span> </h1>

            </div>
          </div>
        </div>
      </div>

      <Category></Category>

      {/* card */}


    </div>
  );
};

export default CarCategoris;