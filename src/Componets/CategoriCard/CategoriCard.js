import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoriCard = ({ category }) => {

  const { model, logo } = category

  const [carDetas, setCardatas] = useState([])

  useEffect(() => {
    fetch('https://hea-easy-server-devsobuj910.vercel.app/allCars')

  }, [])

  return (
    <div class="col">
      {/* /carCategoryShowCard */}
      <div class="card">
        <img src={logo} class="card-img-top height" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{model}</h5>
          <div className=''>

            <Link to={`/carCategoryShowCard/${model}`}>
              <button className='btn bg-success text-white fw-bold'> <i class="fa-solid fa-car"></i> See Car</button>
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
};

export default CategoriCard;