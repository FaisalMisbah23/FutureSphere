import React from 'react'

const Story = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex sm:px-5 px-2 lg:pt-18 md:pt-12 pt-6 md:flex-row flex-col-reverse items-center bg-white sm:w-[80%] w-[90%] rounded-3xl">
          <div className="lg:flex-grow md:w-1/2 w-[90%] lg:pr-18 md:pr-12 flex flex-col items-start md:text-left md:mb-0">
          <h3 className='mb-10'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-[25px] sm:text-xl text-md'>Our Story</span></h3>
            <p className="mb-8 leading-relaxed">In 2010, our founder, Vasily, faced a daunting challenge - preparing for the Law School Admission Test (LSAT) while juggling an internship and evening classes in different cities. The lack of time and a conducive study environment made it incredibly difficult for him to achieve his dream of becoming a lawyer. <br /><br />

During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn't exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] rounded-3xl mb-12">
            <img className="object-cover object-center rounded-3xl" alt="hero" src="/home/mission-Image.png" />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-6 md:flex-row-reverse flex-col-reverse items-center bg-white sm:w-[80%] rounded-3xl">
          <div className="lg:flex-grow md:w-1/2 w-[90%] lg:pl-18 md:pl-12 flex flex-col items-start md:text-left md:mb-0">
            <p className="leading-relaxed mb-2">This success prompted Vasily to establish FutureSphere, an app development company with a strong focus on creating profitable and impactful applications. Building on their initial achievement, FutureSphere expanded their educational app portfolio to include exams such as SAT, GMAT, MCAT, and more, catering to the needs of a broader audience. <br /><br />

As time went on, it became evident that the industry had much more to offer than just exam-focused applications. People began approaching FutureSphere, seeking guidance on how to develop their own apps, what it takes to succeed, and how to navigate the complex world of mobile applications. In response to this growing demand for expertise and support, FutureSphere expanded its services and evolved into a comprehensive resource for aspiring app creators - a company known as FutureSphere.</p>
    
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] rounded-3xl sm:mb-0 mb-12">
            <img className="object-cover object-center rounded-3xl mb-8" alt="hero" src="/home/mission-Image.png" />
          </div>
        </div>
      </section>
  )
}

export default Story
