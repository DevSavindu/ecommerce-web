import React from 'react'
import Light  from "../../assets/web/light-mode 1.png"
import dark from "../../assets/web/night-mode.png"


const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem
        ("theme") : "light"
    );
    
    const element = document

  return (
    <div className='relative'>
      <img src={Light} 
      alt=""
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
      transition-all duration-300 absolute right-0 z-10 '
       />
       <img src={dark} 
      alt=""
      className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
      transition-all duration-300'
       />
    </div>
  )
}

export default DarkMode
