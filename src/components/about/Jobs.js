import React from 'react'
import { Link } from 'react-router-dom'
const offices=[
    {
        img:'Office Image Wrapper.png',
        city:'San Francisco',
        address:'123 Main Street, Suite 200',
        number:'(555) 123-4567'
   },
    {
        img:'Office Image Wrapper-1.png',
        city:'New Mexico',
        address:'789 Canyon Road',
        number:'(555) 555-1234'
   },
    {
        img:'Office Image Wrapper-2.png',
        city:'London',
        address:'789 Oak Street, Suite 402',
        number:'+44 20 1234 5678'
   },
    
   
]
const Jobs = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 lg:py-18 md:12 py-6  mx-auto sm:w-[80%]  w-[90%]">
      <div className="text-center mb-10">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Careers</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">New job opportunities</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Browse through vacancies. internships and job postings at FutureSphere</p>
        <div className="flex mt-6 justify-center">
        </div>
      </div>
      <div className='flex flex-col sm:gap-12 gap-20'>
      <div className="sm:-m-4 -mx-4 -mb-10 -mt-4 bg-white border-[1px] broder-gray-200">
            <div className='flex sm:items-center items-start justify-between my-4 sm:mx-8 mx-6'>
                <div className='flex flex-col sm:w-[85%] w-[100%]  text-left'>
                    <h1 className='font-semibold text-lg'>Project Manger</h1>
                    <h1 className='text-indigo-300 text-lg'>Full Time - On site</h1>
                    <p>FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.</p>
                </div>
               <Link to="/careers/jobs"> <div><img src="/about/Vector.png" alt="" className='w-[15] p-3 rounded-full border-[1px] border-gray-500' /></div></Link>
            </div>
      </div>
      <div className="sm:-m-4 -mx-4 -mb-10 -mt-4 bg-white border-[1px] broder-gray-200">
            <div className='flex sm:items-center items-start justify-between my-4 sm:mx-8 mx-6'>
                <div className='flex flex-col sm:w-[85%] w-[100%] text-left'>
                    <h1 className='font-semibold text-lg'>Human Resources</h1>
                    <h1 className='text-indigo-300 text-lg'>Full Time - On site</h1>
                    <p>FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.</p>
                </div>
                <div> <Link to="/careers/jobs"><img src="/about/Vector.png" alt="" className='w-[15] p-3 rounded-full border-[1px] border-gray-500' /></Link></div>
            </div>
      </div>
      <div className="sm:-m-4 -mx-4 -mb-10 -mt-4 bg-white border-[1px] broder-gray-200 ">
            <div className='flex sm:items-center items-start justify-between my-4 sm:mx-8 mx-6'>
                <div className='flex flex-col sm:w-[85%] w-[100%] text-left'>
                    <h1 className='font-semibold text-lg'>UI/UX Designer</h1>
                    <h1 className='text-indigo-300 text-lg'>Full Time - On site</h1>
                    <p>FutureSphere is in need of a talented Product Designer with more tha 3 years of past experience in tech sector.</p>
                </div>
                   <div> <Link to="/careers/jobs#top"> <img src="/about/Vector.png" alt="" className='w-[15] p-3 rounded-full border-[1px] border-gray-500' /></Link></div>
            </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Jobs
