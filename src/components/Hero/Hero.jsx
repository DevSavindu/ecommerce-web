import React from "react";
import Image1 from "../../assets/Grey Black Modern Aesthetic Minimalist  Photo Collage Instagram Post (4).png";
import image2 from "../../assets/Grey Black Modern Aesthetic Minimalist  Photo Collage Instagram Post (2).png";
import image3 from "../../assets/Grey Black Modern Aesthetic Minimalist  Photo Collage Instagram Post.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    img: image2,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    img: image3,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];
const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* bckgrnd pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Lorem Ipsum is simply dummy text
              </h1>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-10 transition-all duration-200 text-white py-2 px-4 rounded-full ">
                  Order now
                </button>
              </div>
            </div>
            {/* image */}
            <div className=" order-1 sm:order-2">
              <div className="relative z-10">
                <img
                  src={Image1}
                  alt=""
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]  sm:scale-125 object-contain mx-auto"
                />
              </div>
            </div>
            {/* text */}
          </div>
        </div>
        </Slider>
        
      </div>
    </div>
  );
};

export default Hero;
