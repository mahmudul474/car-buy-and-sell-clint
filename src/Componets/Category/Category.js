import React, { useEffect, useState } from 'react';
import './Category.css'
import marcity from '../../assets/caru-img/marcity.jfif';
import bmw from '../../assets/caru-img/bmw-logo.jpg';
import audi from '../../assets/caru-img/audi-logo.avif'
import CategoriCard from '../CategoriCard/CategoriCard';
import { Route } from 'react-router-dom';
import Loading from '../../Sheard/Loading/Loading';



const Category = () => {

  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://hea-easy-server-devsobuj910.vercel.app/category')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [])

  if (loading) {
    return <Loading />
  }

  return (

    <div className='container mt-3 mb-3'>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {
          categories.map(category => <CategoriCard
            key={category._id}
            category={category}
          ></CategoriCard>)
        }



      </div>

    </div>

  );

};

export default Category;