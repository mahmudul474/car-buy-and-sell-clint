import React, { useEffect, useState } from 'react';
import Catagorys from '../Catagorys';


const ProductCatagoris = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/catagory')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='my-12 '>
            <h2 className='text-center text-3xl my-20 text-teal-200 capitalize font-bold'>this is catagoru </h2>
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
           {
                categories.map(catagory=><Catagorys key={catagory._id} catagory={catagory}> </Catagorys>)
            }
            
           </div>
        </div>
    );
};

export default ProductCatagoris;