import React from 'react';
import Navbar from './Navbar';
import { MdRoundedCorner } from 'react-icons/md';

const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen pl-36 bg-[url(/design1.png)] bg-cover mix-blend-lighten' 
      style={{
        backgroundSize: "30%",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <Navbar />
      <div className='container grid lg:grid-cols-2 pb-40 pl-96 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center pr-[30rem] pt-16'>
          <div>
            <p data-aos="zoom-in">I' m</p>
            <p data-aos="zoom-in">Muhammad</p>
            <p data-aos="zoom-in">Saleem Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
