import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CarCard from './CarCard';


const CarCategoryShowCard = () => {

  const [carDatas, setCardatas] = useState([])

  // console.log(carDatas)

  const params = useParams()

  useEffect(() => {

    fetch(`http://localhost:5000/allCars?model=${params.model}`)
      .then(res => res.json())
      .then(data => setCardatas(data))
      .catch(error => console.error(error))

  }, [])


  return (
    <div className='container mt-4 mb-3'>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
        {
          carDatas?.map(cardata => <CarCard
            key={cardata._id}

            cardate={cardata}
          ></CarCard>)
        }
      </div>

    </div>
  );
};

export default CarCategoryShowCard;