import React from 'react';
import AddSection from '../../Componets/AddSection/AddSection';
import BrandSection from '../../Componets/BrandSection/BrandSection';
import Home from '../../Componets/Home/Home';
import CategoryPages from '../CategoryPages/CategoryPages';
import ExtraSection from '../../Componets/ExtraSection/ExtraSection'

const HomePage = () => {
  return (
    <div>
       <Home></Home>
       <AddSection></AddSection>
       <BrandSection/>
       <CategoryPages/>
       <ExtraSection></ExtraSection>
    </div>
  );
};

export default HomePage;