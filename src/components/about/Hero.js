import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <>
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 lg:py-18 md:py-12 py-6 items-center justify-center flex-col">
      <div className="text-center lg:w-[80%] w-full mb-10">
        <h1 className="title-font sm:text-[3.4vw] sm:leading-[4vw] text-3xl mb-4 font-medium text-gray-900">To revolutionize industries through innovative technology solutions, driving positive change and empowering individuals and businesses</h1>
        <p className="mb-4 leading-relaxed">At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change. We are dedicated to pushing the boundaries of what's possible, creating transformative experiences that make a lasting impact in a rapidly evolving digital landscape.</p>
        <div className="flex justify-center">
        <Link to="/signup">     <button className="inline-flex text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Sign Up</button></Link>
      <Link to="/contact">    <button className="ml-4 inline-flex text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Contact Us</button></Link>
        </div>
      </div>
      <img className="sm:w-[80%] sm:rounded-[50px] object-cover object-center" alt="hero" src="/about/Hero.png" />
    </div>
  </section>
 </>
  )
}

export default Hero
