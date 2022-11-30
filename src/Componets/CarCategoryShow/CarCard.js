import React, { useState } from 'react';
import BookModal from '../BookModal/BookModal';
import ReportModal from '../ReaportModal/ReportModal';
import './CategoryCard.css'


const CarCard = ({ cardate }) => {

  const { _id, seller, model, image, carType, price, oldPrice, location, UsedTime, postTime, report } = cardate;

  const [books, setBooks] = useState()

  const handleBook = (_id) => {

    setBooks(_id)

  }


  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top img-height1" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">Care name: {model}</h5>
          <p class="card-text"> <i class="fa-regular fa-circle-check text-success"></i> Seller Name:  {seller}</p>
          <p class="card-text"> Car Brand: {carType}</p>
          <p class="card-text"> Post Time: {postTime}</p>
          <p class="card-text"> location: {location}</p>
          <p class="card-text"> Old Price: $ {oldPrice}</p>
          <p class="card-text"> Used Time: {UsedTime}</p>
          <p className='card-text'>Current Price: {price}</p>

          <div className='d-flex justify-content-between'>
            {/* modal start */}

            <button onClick={() => handleBook(books)} type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Book Now
            </button>

            <BookModal cardeta={cardate} />

            {/* modal end */}


            <div>
              <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-flag"></i> Report Item
              </button>
              <ReportModal 
               cardates={cardate}
               key={cardate._id}
              />
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;