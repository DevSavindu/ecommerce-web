import React from "react";
import Logo from "../../assets/Black & White Minimalist Elegant Photographer Portofolio Presentation.png";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative 2-40">
      {/* upper NavBar */}
      <div className="bg-primary/40 py-2 ">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 text-gray-600"
            >
              <img src={Logo} alt="" className="w-12 uppercase t" />
              SAJI Clothing
            </a>
          </div>
          {/* search bar and others */}
          <div>
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* odr button */}
          <button onClick={() => alert("Ordering not available yet")}
          className="bg-gradiant-to-r from-primary to-secondary">
            <span>Oder</span>
          </button>
        </div>
      </div>
      {/* lower Navbar */}
      <div></div>
    </div>
  );
};

export default NavBar;
