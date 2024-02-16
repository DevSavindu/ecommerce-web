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

const App = () => {
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
      <NavBar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default App;
