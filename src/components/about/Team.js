import React from 'react'
import Carousel from './Carousel'

const Team = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container sm:px-5 px-2 lg:py-16 md:py-8 py-4 mx-auto sm:w-[80%]">
      <div className="text-center mb-10">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Our Team</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-6">Meet our team</h1>
        <p className="text-base leading-relaxed xl:w-3/5 lg:w-3/4 mx-auto text-gray-500s">Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality.</p>
      </div>
      <div className='bg-white text-lg mb-8 sm:px-16 px-4 py-8'>
      <p className="leading-relaxed text-center"> During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn't exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.. </p>
      <div className='flex flex-col items-center gap-2 mt-6'>
        <h3 className='text-indigo-300 font-semibold text-lg'>John Wick</h3>
        <h3 className='text-gray-600 text-lg'>CEO FutureSphere</h3>
        <span className='flex items-center gap-3'>
            <a href=""><img src="/about/Facebook.png" alt="" /></a>
            <a href=""><img src="/about/Linkedin.png" alt="" /></a>
            <a href=""><img src="/about/Twitter.png" alt="" /></a>
        </span>
      </div>
      </div>
<Carousel/>  
   
   
      {/* <div className='flex items-center justify-center gap-3 mx-auto sm:mt-10 mt-16'>
      <button className="inline-flex items-center border-indigo-300 rounded-full border-[1px] p-4 focus:outline-non"> <img src='/home/left-arrow.png' alt='icon'/> </button>   
        <button className="inline-flex items-center bg-indigo-300 border-0 p-4 focus:outline-non rounded-full text-base"><img src='/home/right-arrow.png' alt='icon' /></button>   

      </div> */}
    </div>
  </section>
  )
}

export default Team
