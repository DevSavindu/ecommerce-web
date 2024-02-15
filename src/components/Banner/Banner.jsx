import React from 'react'
import BannerImg from "../../assets/banner/lady-pink-suit-looking-camera.jpg"
import { GrSecure } from "react-icons/gr"
import {IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center '>
            {/* image */}
            <div data-aos="zoom-in">
                <img 
                src={BannerImg} 
                alt="" 
                className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                />
            </div>
            {/* text details */}

        </div>

      </div>
    </div>
  )
}

export default Banner
