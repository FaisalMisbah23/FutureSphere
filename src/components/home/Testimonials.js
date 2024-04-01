import React from 'react'

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000" >
    <div className="container px-5 lg:pt-21 md:pt-14 pt-7 mx-auto sm:w-[80%] w-[90%]">
      <div className="text-center">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Testimonials</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-8">1M+ Global Customers</h1>
    </div>
    </div>
    <div className="container mx-auto flex px-5 lg:py-21 md:py-14 py-7 md:flex-row-reverse flex-col-reverse items-center bg-white sm:w-[80%] rounded-3xl">
          <div className="lg:flex-grow md:w-1/2 w-[90%] lg:pl-18 md:pl-12 flex flex-col items-start md:text-left md:mb-0">
            <p className="leading-relaxed mb-2">I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our business operations, streamlining processes and boosting productivity. The seamless connectivity and intuitive user interface have made a significant impact on our team's efficiency. Thanks to their advanced data analytics capabilities, we now make data-driven decisions with confidence. I highly recommend FutureSphere to any organization seeking to stay ahead in the digital era.</p>
            <h1 className="title-font sm:text-lg text-xl font-medium text-gray-900">Sarah Thompson</h1>
            <h1 className="sm:text-lg text-xl font-medium text-gray-90 mb-8">CEO Thompson Enterprises</h1>
            <div className="flex items-center gap-2 ml-auto"> {/* Changed to ml-auto */}
        <button className="inline-flex items-center border-indigo-300 rounded-full border-[1px] p-4 focus:outline-non"> <img src='/home/left-arrow.png' alt='icon'/> </button>   
        <button className="inline-flex items-center bg-indigo-300 border-0 p-4 focus:outline-non rounded-full text-base"><img src='/home/right-arrow.png' alt='icon' /></button>   
    </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] rounded-3xl sm:mb-0 mb-12">
            <img className="object-cover object-center rounded" alt="hero" src="/home/Client Image.png" />
          </div>
        </div>
        <div className="container px-5 lg:py-9 md:py-6 py-3 mx-auto sm:w-[80%]">
        <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-4 bg-indigo-100" />
        <span className="absolute px-3 text-lg font-medium text-gray-500 -translate-x-1/2 bg-indigo-100 left-1/2">Trusted By</span>
      </div>
      <div className='flex flex-wrap items-center justify-evenly mt-8'>
        <img src="/home/Logo-1.png" alt="" />
        <img src="/home/Logo-2.png" alt="" />
        <img src="/home/Logo-3.png" alt="" />
        <img src="/home/Logo-4.png" alt="" />
        <img src="/home/Logo-5.png" alt="" />
    </div>
      </div>
  </section>
  )
}

export default Testimonials
