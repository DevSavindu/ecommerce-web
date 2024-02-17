// eslint-disable-next-line no-unused-vars
import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Popup from "./components/Popup"

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState (false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar handleOrderPopup={handleOrderPopup}/>
      <Hero  handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts  handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup= {setOrderPopup}/>
      <div>
      <p className=" mb-2 flex justify-center -pb-1 text-secondary">SavinduNawarathne@2024</p>
      </div>
    </div>
  );
};

export default App;
