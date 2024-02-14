import React from 'react'
import Image1 from '../../assets/Grey Black Modern Aesthetic Minimalist  Photo Collage Instagram Post (1).png'
import image2 from '../../assets/Grey Black Modern Aesthetic Minimalist  Photo Collage Instagram Post (2).png'
import image3 from '../../assets/Grey Black Modern Aesthetic Minimalist  Photo Collage Instagram Post.png'

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: 2,
        img: image2,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: 3,
        img: image3,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
]
const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* bckgrnd pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 '>

      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Hero
