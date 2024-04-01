import React from 'react'

const Services = () => {
  return (
    <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000" >
        <div className="container mx-auto flex px-5 lg:py-21 md:py-14 py-7 md:flex-row flex-col-reverse items-center bg-white sm:w-[80%] w-[90%] rounded-3xl">
          <div className="lg:flex-grow md:w-1/2 w-[90%] lg:pr-18 md:pr-12 flex flex-col items-start md:text-left md:mb-0">
          <h3 className='mb-10'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-[25px] sm:text-xl text-md'>Services</span></h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-300">Streamlined Business Operations</h1>
            <p className="mb-8 leading-relaxed">Our technology solutions streamline and optimize business operations, automating processes, enhancing efficiency, and improving overall productivity. From seamless inventory management to streamlined customer relationship management, our solutions empower businesses to operate at their peak potential, saving time and resources while maximizing profitability.</p>
            <div className="flex items-center gap-2 ml-auto">
                <button className="inline-flex items-center border-indigo-300 rounded-full border-[1px] p-4 focus:outline-non"> <img src='/home/left-arrow.png' alt='icon'/> </button>   
                <button className="inline-flex items-center bg-indigo-300 border-0 p-4 focus:outline-non rounded-full text-base"><img src='/home/right-arrow.png' alt='icon' /></button>   
                </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] rounded-3xl mb-12">
            <img className="object-cover object-center rounded" alt="hero" src="/home/mission-Image.png" />
          </div>
        </div>
      </section>
  )
}

export default Services
