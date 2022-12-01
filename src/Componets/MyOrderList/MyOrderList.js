import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import MyOrderTabel from './MyOrderTabel';

const MyOrderList = () => {

  const { user } = useContext(AuthContext)

  
  const {data: myOrders = [],} = useQuery({
    queryKey: ['myOrders'],
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/bookingData/${user?.email}`)
        const data = await res.json();
        return data;
    }
});



  return (
    <div className='container mt-3 mb-3'>

      <div>

        <h2>My Order List</h2>
        <p>Our all order list and pay hear</p>

      </div>

      <table class="table">

        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">location</th>
            <th scope="col"> Price </th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {
            myOrders.map(myOrder => <MyOrderTabel
              key={myOrder._id}
              myOrderData={myOrder}
            ></MyOrderTabel>)
          }
        </tbody>

      </table>

    </div>
  );
};

export default MyOrderList;