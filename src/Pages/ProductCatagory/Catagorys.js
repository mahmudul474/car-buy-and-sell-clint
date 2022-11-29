import React from 'react';

const Catagorys = ({catagory}) => {

    console.log(catagory)

    return (
        <div className="p-4  ">
        <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110  object-contain  bg-no-repeat "   style={{ backgroundImage: `url(${catagory.img})` }}>
          <h2 className="title-font py-16  font-medium text-3xl  text-center   text-pink-900">{catagory.title}</h2>
          
        </div>
      </div>
    );
};

export default Catagorys;