import React from 'react'
import banner from "../../assets/banner/Purple Minimalist Develop Your Mobile App With Us Medium Banner.png"

const BannerImg ={
    backgroundImage: 'url(${Banner})',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}
const Subscribe = () => {
  return (
    <div
    data-aos-="zoom-in"
    className='bg-gray-100 dark:bg-gray-800 text-white '
    style={BannerImg}
    >
      <div className='container backdrop-blur-sm py-10 '>
        <div>
            <h1>Get Notified About New</h1>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
