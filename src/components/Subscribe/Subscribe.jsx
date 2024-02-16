import React from 'react';
import Banner from "../../assets/banner/Purple Minimalist Develop Your Mobile App With Us Medium Banner.png";

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
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
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
          className='w-full p-3'
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

