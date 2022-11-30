import React from 'react';
import comare from '../../assets/caru-img/Comaro.jpg';
import ferari from '../../assets/caru-img/ferrari.jpg';
import audi from '../../assets/caru-img/audi.jpg';
import bmw from '../../assets/caru-img/bmw.jpg';


const AddSection = () => {

  return (

    <div className='container mt-5 mb-3'>
       
       <h2>Our Best Deals Of the Weeks</h2>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
        <div class="col">
          <div class="card">
            <img src={comare} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">This is the best</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={ferari} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">This is the best</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card">
            <img src={audi} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">This is the best</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>


    </div>

  );

};

export default AddSection;