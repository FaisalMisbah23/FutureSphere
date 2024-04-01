import React from 'react'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000" >
        <div className="container mx-auto flex px-5 lg:py-21 md:py-14 py-7 md:flex-row flex-col-reverse items-center bg-white sm:w-[80%] rounded-3xl">
          <div className="lg:flex-grow md:w-1/2 w-[90%] lg:pr-18 md:pr-12 flex flex-col items-start md:text-left md:mb-0">
          <h3 className='mb-10'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-[25px] sm:text-xl text-md'>Our Mission Statement</span></h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Empowering the world through transformative technology solutions</h1>
            <p className="mb-8 leading-relaxed">We are dedicated to empowering individuals, businesses, and communities by providing innovative and cutting-edge technology solutions that unlock new possibilities and drive positive change. Our mission is to make technology accessible, reliable, and impactful, enabling our customers to thrive in the digital era and shape a better future for all.</p>
            <div className="flex items-start leading-none">
            <Link to="/signup">
        <button className="inline-flex items-center text-indigo-300 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">Signup</button>   </Link>
        <Link to="/contact">    <button className="inline-flex items-center text-white bg-indigo-300 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">Contact Us</button>   </Link>

                </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] rounded-3xl mb-12">
            <img className="object-cover object-center rounded" alt="hero" src="/home/mission-Image.png" />
          </div>
        </div>
      </section>
  )
}

export default Mission
