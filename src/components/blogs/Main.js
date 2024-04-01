/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex lg:py-20 md:py-14 py-7 md:flex-row-reverse flex-col-reverse items-center bg-white sm:w-[80%] w-[90%] rounded-3xl">
        <div className="lg:flex-grow md:w-1/2 w-[90%] lg:px-4 md:px-8  flex flex-col items-start md:text-left md:mb-0">
          <h3 className='mb-10'><span className='px-4 py-2 text-white font-medium bg-indigo-200 rounded-[25px] sm:text-xl text-md'>Healthcare</span></h3>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">The Benefits of Email Marketing for Small Businesses</h1>
            <p className="mb-8 leading-relaxed">The Benefits of Email Marketing for Small Businesses
In this article, we discuss how email marketing can help small businesses reach their target audience, increase brand awareness, and drive sales.</p>
            <div className='ml-auto sm:pr-4'>
                <Link to="/blogs/blog" className='text-gray-400 border-b-[1px] broder-gray-500 cursor-pointer'>Read more</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[90%] rounded-3xl sm:mb-0 mb-12">
            <img className="object-cover object-center rounded" alt="hero" src="/blogs/Image.png" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Main
