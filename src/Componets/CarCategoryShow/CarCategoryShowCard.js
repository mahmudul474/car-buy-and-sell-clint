import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import CarCard from './CarCard';


const CarCategoryShowCard = () => {

 

  const params = useParams()

 


  const {data:carDatas = []} = useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
        const res = await fetch(`http://localhost:5000/allCars?model=${params.model}`);
        const data = await res.json();
        return data;
    }
});













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