import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../assets/lotties/buildingweb';



const HeroComponent = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">

      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie
          className='w-1/2 lg:w-full hidden lg:block'
          animationData={animationData}
          play

        />
        <div className='p-4'>
          <h1 className="text-4xl  text-center lg:text-start  lg:text-5xl font-bold">
            Mitra Andal untuk Solusi Website Korporat dan Pemerintahan
          </h1>
          <p className="py-6  text-sm text-center lg:text-start">
            Menawarkan layanan pembuatan website yang aman, efisien, dan sesuai
            standar industri, kami berkomitmen mendukung operasi digital
            pemerintahan dan korporasi besar.
          </p>
          <button className="btn border-warning btn-basic block mx-auto lg:mx-0">Hubungi Kami</button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
