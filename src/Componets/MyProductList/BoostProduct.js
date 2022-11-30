import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BoostProduct = () => {
   
const adds = useLoaderData([])

console.log(adds)

  return (
    <div>
       <h3>Boost</h3>
       <h3>{adds.length}</h3>
       <img src={adds.image} alt="" />
       <h4>{adds._id}</h4>
    </div>
  );
};

export default BoostProduct;