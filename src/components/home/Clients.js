import React from 'react'

const Clients = () => {
  return (
    <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000" >
    <div className="container px-5 lg:py-24 md:py-18 py-12 mx-auto sm:w-[80%]  w-[90%]">
      <div className="text-center">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Our Clients</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">Trusted by Industry Leaders</h1>
        <p className="text-base leading-relaxed sm:w-[70%] w-[90%] mx-auto text-gray-500s">Join our roster of satisfied clients and experience the exceptional results and service that have earned us the trust of industry leaders worldwide</p>
    <div className='flex flex-wrap items-center justify-evenly  mt-8'>
        <img src="/home/Company logo.png" alt="" />
        <img src="/home/Company logo-1.png" alt="" />
        <img src="/home/Company logo-2.png" alt="" />
        <img src="/home/Company logo-3.png" alt="" />
        <img src="/home/Company logo-4.png" alt="" />
    </div>
    </div>
    </div>
  </section>
  )
}

export default Clients
