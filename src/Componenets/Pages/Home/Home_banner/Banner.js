import React from 'react';
import bannerbg  from "../../../.././assets/home-baner/banner.jpg"


const Banner = () => {
    return (
        <div className="hero  justify-start h-[600px]" style={{ backgroundImage: `url("https://htmldemo.net/legend/legend/img/slider/6.jpg")` }}>
        <div className="hero-content  ">
          <div className='p-14 text-white'>
            <h1 className="text-5xl font-bold">      Feel the Music  <br /> in your bones                   
</h1>
            <p className="py-6  text-2xl">
      Music loud  <br />
      Fulfill your music needs                   

      </p>
            <button className="btn btn-primary">order-now</button>
          </div>
        </div>
      </div>
       
    );
};

export default Banner;