// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/banner/Blue and Gold Fashion Logo (1).png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
// eslint-disable-next-line no-unused-vars
import { data } from "autoprefixer";

const Menu = [
    {
        id:1,
        name: "Home",
        link: "/#"
    },
    {
        id:2,
        name: "Top Rated",
        link: "/#"
    },
    {
        id:3,
        name: "Kids Ware",
        link: "/#services"
    },
    {
        id:4,
        name: "Mens Ware",
        link: "/#"
    },
];

const DropdownLink =[

    {
        id: 1,
        name: "Trendig Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
    
];

const NavBar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-next dark:text-white duration-200 relative z-40">
      {/* upper NavBar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
          <a
  href="#"
  className="font-bold text-2xl sm:text-3xl flex gap-2 text-gray-900 dark:text-white"
>
  <img src={Logo} alt="" className="w-10 uppercase" />
  <span className="font-serif">SAJI Clothing</span>
</a>



          </div>
          {/* search bar and others */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:bg-next dark:border-gray-500"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* dark mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div 
      data-aos="zoom-in"
      className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data)=>(
                    <li key={data.id}>
                        <a href={data.link}
                        className="inline-block px-4 hover:text-primary duration-300"
                        >{data.name}</a>
                    </li>
                ))}

                {/* drop down n links */}
                <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2">
                          Trending Products
                    <span>
                        <FaCaretDown
                        className="transition-all duration-200 group-hover:rotate-180"/>
                    </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block
                w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                    <ul>
                        {DropdownLink.map((data) => (
                            <li key={data.id}>
                                <a href={data.link}
                                className="inline-block w-full rounded-md p-2 hover:bg-primary/40 dark:hover:bg-primary/90"
                                >{data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
