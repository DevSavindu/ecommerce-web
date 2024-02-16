import React from 'react'
import footerImg from '../assets/banner/Blue and Gold Fashion Logo (1).png'
import Banner from '../assets/banner/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper.jpg'

const BannerImg = {
    backgroundImage: `url(${Banner})`, // Changed single quotes to backticks for string interpolation
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%", // Changed height to fill viewport height
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const footer = () => {
  return (
    <div 
    style={BannerImg}
    className='text-white mb-20'>
      <div className='container'>
        <div>
            {/* company details */}
            <div>
                <h1 className="font-serif">SAJI Clothing</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Deleniti voluptatibus quia iste dolore?
                     Aut, necessitatibus.</p>
            </div>
            {/* links */}
        </div>
      </div>
    </div>
  )
}

export default footer
