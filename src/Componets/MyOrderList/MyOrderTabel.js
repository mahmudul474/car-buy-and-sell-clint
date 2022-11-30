import React from 'react';
import { Link } from 'react-router-dom';
import PayModal from './PayModal';

const MyOrderTabel = ({ myOrderData }) => {

  const { price, productName, location } = myOrderData

  return (

    <tr>
      <th scope="row">{productName}</th>
      <td>{location}</td>
      <td>{price}</td>
      <td>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Pay
        </button>
        
        <PayModal/>

      </td>
    </tr>

  );
};

export default MyOrderTabel;