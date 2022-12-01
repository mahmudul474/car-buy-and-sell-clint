import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MyProductListCard = ({ myProduct, handleProductDelete }) => {

  const { _id, seller, model, image, carType, price, oldPrice, location, UsedTime,
    postTime, } = myProduct

  const handleBoost = () => {

    toast.success('Success Your Boost')

    // const { _id, seller, model, image, carType, price, oldPrice, location, UsedTime,
    //   postTime, email} = myProduct

    // const boost ={
    //   seller: `${seller}`,
    //   image: `${image}`,
    //   price: `${price}` 
    // }

    //  fetch(`http://localhost:5000/boostProduct/`,{
    //    method: "POST",
    //    header:{
    //     "content-Type": "application/json",
    //    },
    //    body: JSON.stringify(boost)
    //  })
    //   .then(res => res.json())
    //   .then(data => data)
    //   .catch(e => console.error(e))



  }


  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top img-height1" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center"> Care name {model} </h5>
          <p class="card-text"><i class="fa-regular fa-circle-check text-success"></i> Seller Name : {seller}</p>
          <p class="card-text"> Car Type: {carType}</p>
          <p class="card-text"> Post Time: {postTime}</p>
          <p class="card-text"> location: {location}</p>
          <p class="card-text"> Old Price: $ {oldPrice}</p>
          <p class="card-text"> Used Time: {UsedTime}</p>
          <p className='card-text'>Current Price: {price}</p>

          <div className='d-flex justify-content-between'>

            {/* <Link to={`/boostProduct/${seller}`}>
              <button className='btn btn-danger'><i class="fa-solid fa-rocket"></i> Boost Product </button>
            </Link> */}
            <button onClick={handleBoost} className='btn btn-danger'><i class="fa-solid fa-rocket"></i> Boost Product </button>

            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${_id}`}>
            <i class="fa-solid fa-rocket"></i> Boost Product
            </button> */}

            {/* <BoostModal
             key={myProduct._id}
              myProductData={myProduct}
            /> */}

            <button onClick={() => handleProductDelete(_id)} className='btn btn-warning'><i class="fa-solid fa-trash-can"></i> Delete Item</button>

          </div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default MyProductListCard;