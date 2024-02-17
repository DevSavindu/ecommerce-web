// eslint-disable-next-line no-unused-vars
import React from 'react';
import Banner from "../assets/banner/bc7u_mupi_220518.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`, // Changed single quotes to backticks for string interpolation
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%", // Changed height to fill viewport height
    width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in" // Corrected attribute name
      //style={BannerImg}
      className="mb-20 bg-primary dark:bg-gray-800 text-white"
      
    >
      <div className="container backdrop-blur-sm py-10">
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products 
          </h1>
          <input 
          data-aos="fade-up"
          type="text" 
          placeholder='Enter your email'
          className='w-full p-3 rounded-md border border-gray-500 px-2 py-1 focus:outline-none focus:border-gray-500 dark:bg-next dark:border-gray-500 bg-gray-500'
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

