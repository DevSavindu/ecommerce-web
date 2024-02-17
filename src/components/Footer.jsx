import React from 'react'
import footerImg from '../assets/banner/Blue and Gold Fashion Logo (1).png'
import Banner from '../assets/footer/lllllllllllllllll.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

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
    className='text-secondary mb-20 dark:bg-gray-900 '>
      <div className='container'>
        <div 
        data-aos="zoom-in"
        className='grid md:grid-cols-3 pb-44 pt-5'>
            {/* company details */}
            <div className='py-8 px-4 '>
                <h1 className="text-secondary hover:scale-105 duration-200  dark:text-white font-serif sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                    <img src={footerImg} alt="" 
                    className='max-w-[50px]  shadow-sm p-1 rounded-full bg-primary  dark:bg-white '
                    />
                    SAJI Clothing</h1>
                <p className='dark:text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Deleniti voluptatibus quia iste dolore?
                     Aut, necessitatibus.</p>
            </div>
            {/* links */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 dark:text-primary'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 dark:text-white'>Important links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300  dark:text-primary  hover:dark:text-white  text-secondary' 
                                    key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 dark:text-white'>links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-secondary dark:text-primary  hover:dark:text-white' 
                                    key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* socail links */}
                <div>
                    <div className='flex items-center gap-3 mt-6 '>
                        <a href="#">
                        <FaInstagram className='text-3xl  hover:dark:text-white hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="#">
                            <FaFacebook className='text-3xl  hover:dark:text-white hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl  hover:dark:text-white hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                    </div>
                    <div className='mt-6'>
                        <div className='flex items-center gap-3  hover:dark:text-white'>
                            <FaLocationArrow/>
                            <p>Kothalawala, kaduwela, SL</p>
                        </div>
                        <div className='flex items-center gap-3  hover:dark:text-white'>
                            <FaMobileAlt/>
                            <p>+9477 206 8109</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
