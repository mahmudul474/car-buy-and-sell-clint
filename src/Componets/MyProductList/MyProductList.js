import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import MyProductListCard from './MyProductListCard';
import { useQuery } from "react-query";


const MyProductList = () => {

  const { user } = useContext(AuthContext)

  const [myProducts, setMyPoroduts] = useState([])

  useEffect(() => {
    fetch(`https://hea-easy-server-devsobuj910.vercel.app/products/${user?.email}`)
      .then(res => res.json())
      .then(data => setMyPoroduts(data))
      .catch(e => console.error(e))
  }, [user?.email])



  const handleProductDelete = (id) => {
    const proceed = window.confirm("Are you sure deleting your product");
    // console.log(id)
    if (proceed) {
      fetch(`https://hea-easy-server-devsobuj910.vercel.app/productsData/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          // if (data.acknowledged === true) {
          //   alert('Are you sure delete your item')
          // }
          console.log(data)
        })

    }
    const remaining = myProducts.filter(product => product._id === id)
    setMyPoroduts(remaining)

  }


  return (
    <div className='container mt-3 mb-3 text-font'>

      <h3 className='text-center'>My Products List</h3>

      <div className='container mt-4 mb-3'>

        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">

          {
            myProducts.map(myProduct => <MyProductListCard
              key={myProduct._id}
              myProduct={myProduct}
              handleProductDelete={handleProductDelete}
            ></MyProductListCard>)
          }

        </div>

      </div>

    </div>


  );
};

export default MyProductList;