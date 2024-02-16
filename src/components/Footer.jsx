import React from 'react'
import footerImg from '../assets/banner/Blue and Gold Fashion Logo (1).png'
import Banner from '../assets/shirts/saddddddd.jpg'

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
        <div className='grid md:grid-cols-3 pv-44 pt-20'>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1 className="text-white dark:text-white font-serif sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                    <img src={footerImg} alt="" 
                    className='max-w-[50px]  shadow-sm p-1 rounded-full bg-white'
                    />
                    SAJI Clothing</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Deleniti voluptatibus quia iste dolore?
                     Aut, necessitatibus.</p>
            </div>
            {/* links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important links</h1>
                        <ul>
                            {
                                FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
