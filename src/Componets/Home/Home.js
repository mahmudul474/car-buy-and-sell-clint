
import { useEffect, useState } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBanner1 from '../HomeBanner/HomeBanner1';

const Home = () => {

  const [carus, setCarus] = useState([])

  useEffect(() => {
    fetch('carusel.json')
    .then(res => res.json())
    .then(data => setCarus(data))
  },[])

  return (
    <div>
       <HomeBanner1/>
    </div>
  );
};

export default Home;