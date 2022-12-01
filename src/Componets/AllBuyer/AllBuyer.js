import React, { useEffect, useState } from 'react';
import AllBuyerCard from './AllBuyerCard';

const AllBuyer = () => {

  const [allBuyers, setAllBuyers] = useState([])

  useEffect(() => {
    fetch(`https://hea-easy-server-devsobuj910.vercel.app/allBuyers`)
      .then(res => res.json())
      .then(data => setAllBuyers(data))
  }, [allBuyers])

  const handelBuyerDelete = (id) => {
    const proceed = window.confirm("Are you sure deleting your Buyer");
    if (proceed) {
      fetch(`https://hea-easy-server-devsobuj910.vercel.app/allBuyerDelete/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }

  return (
    <div>
      <div className='container mt-3 mb-3'>

        <h3 className='text-center'>All Seller List</h3>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          {
            allBuyers.map(allBuyer => <AllBuyerCard
              key={allBuyer._id}
              allBuyerData={allBuyer}
              handelBuyerDelete={handelBuyerDelete}
            ></AllBuyerCard>)
          }

        </div>

      </div>
    </div>
  );
};

export default AllBuyer;