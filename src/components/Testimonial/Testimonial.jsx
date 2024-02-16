import React from 'react'

const TestimonialData = [

    {
        id: 1,
        name: "Victor",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta architecto",
        img: ""
    }
];

const Testimonial = () => {
  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary ">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            {" "}
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            architecto
          </p>
        </div>
        {/* Testimonial cards */}
        <div></div>
      </div>
    </div>
  )
}

export default Testimonial
