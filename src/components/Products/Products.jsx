import { data } from 'autoprefixer'
import React from 'react'
import {FaStar} from "react-icons/fa6"
import img1 from "../../assets/women/happy-young-woman-shirt-with-shopping-bags.jpg"
import img2 from "../../assets/women/lady-pink-suit-looking-camera.jpg"
import img3 from "../../assets/women/surprised-woman-with-shopping-packets.jpg"
import img4 from "../../assets/women/smiley-woman-with-earphones-shopping-bags.jpg"
import img5 from "../../assets/women/brunette-woman-with-coffee-shopping-bags-shoulder.jpg"

const ProductsData = [
    {
        id:1,
        img: img1,
        title: "Women Ethnic",
        rating:5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "Women Ethnic",
        rating:  4.5,
        color: "red",
        aosDelay: "200",
    },
    {
        id:3,
        img: img3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id:4,
        img: img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "yellow",
        aosDelay: "600",
    },
    {
        id:5,
        img: img5,
        title: "Fashion T- Shirt",
        rating: 4.5,
        color: "pink",
        aosDelay: "800",
    },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary '>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'> Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto</p>
        </div>
        {/* body */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center  gap-5'>
            {/* card section */}
            {ProductsData.map((data) => (
                <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay} 
                key={data.id} 
                className='space-y-3'>
                    <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'  />
                    <div>
                        <h3 className='font-semibold'>{data.title}</h3>
                        <p className='text-sm text-gray-600'>{data.color}</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400'/>
                            <span>{data.rating}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Products
