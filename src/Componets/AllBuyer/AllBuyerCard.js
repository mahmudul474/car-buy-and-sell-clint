import React from 'react';

const AllBuyerCard = ({allBuyerData, handelBuyerDelete}) => {
   
  const {_id, email, name, accountType} = allBuyerData

  return (
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">ID : {_id}</h5>

          <p class="card-text">Email: {email}</p>

          <p class="card-text">Name: {name}</p>
          <p class="card-text">Account: {accountType}</p>

          <div className='d-flex justify-content-around'>
            <button className='btn btn-success'>Verified</button>

            <button onClick={() =>handelBuyerDelete(_id)} className='btn btn-danger'>Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllBuyerCard;