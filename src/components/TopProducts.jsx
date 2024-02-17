// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from "react-icons/fa";
import Img1 from "../assets/shirts/Brown Bubble Chatting Mobile App Logo (12).png";
import Img2 from "../assets/shirts/Brown Bubble Chatting Mobile App Logo (11).png";
import Img3 from "../assets/shirts/Brown Bubble Chatting Mobile App Logo (13).png";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a ullam unde obcaecati blanditiis excepturi perspiciatis molestiae error ducimus harum dolorem quidem, cupiditate voluptate cum, doloremque, incidunt necessitatibus maxime saepe.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a ullam unde obcaecati blanditiis excepturi perspiciatis molestiae error ducimus harum dolorem quidem, cupiditate voluptate cum, doloremque, incidunt necessitatibus maxime saepe.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a ullam unde obcaecati blanditiis excepturi perspiciatis molestiae error ducimus harum dolorem quidem, cupiditate voluptate cum, doloremque, incidunt necessitatibus maxime saepe.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* header */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            architecto
          </p>
        </div>
        {/* body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((product) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image */}
              <div className="h-[100px]">
                <img
                  src={product.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{product.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {product.description}
                </p>
                <button 
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-secondary"
                onClick={handleOrderPopup}>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
