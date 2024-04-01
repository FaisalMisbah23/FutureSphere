import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <>
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 lg:py-18 md:py-12 py-6 items-center justify-center flex-col">
      <div className="text-center lg:w-[80%] w-[90%] mb-10">
        <h1 className="title-font sm:text-[3.4vw] sm:leading-[4vw] text-3xl mb-4 font-medium text-gray-900">Join Our Team and Shape the Future</h1>
        <p className="mb-4 leading-relaxed">Looking for an opportunity to showcase your web design skills? Join our team of talented designers, both remote and on-site, and bring your creativity to life. Collaborate with a dynamic group, create stunning websites, and make a lasting impact in the world of design, no matter where you are.</p>
        <div className="flex justify-center">
        <Link to="/signup">   <button className="inline-flex text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Signup</button></Link>
      <Link  to="/contact" >  <button className="ml-4 inline-flex text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Contact Us</button></Link>
        </div>
      </div>
      <img className="sm:w-[80% w-[90%] sm:rounded-[50px] object-cover object-center" alt="hero" src="/careers/Header Image Section.png" />
    </div>
  </section>
 </>
  )
}

export default Hero
