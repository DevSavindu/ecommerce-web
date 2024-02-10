import React from "react";
import Logo from "../../assets/Brown Bubble Chatting Mobile App Logo (5).png";

const NavBar = () => {
  return (
    <div>
      {/* upper NavBar */}
      <div>
        <div className="container">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10 uppercase" />
              SAJI Clothing
            </a>
          </div>
          {/* search bar and others */}
          <div>
            <div className="group">
              <input type="text" placeholder="Search" 
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div></div>
    </div>
  );
};

export default NavBar;
