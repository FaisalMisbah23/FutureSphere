import React from 'react'

const Form = () => {
  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5  mx-auto sm:w-[90%] w-full flex flex-col items-center gap-10 pb-20">
      <div className='flex items-start gap-12'>
      <div className="lg:w-2/3 md:w-1/2 mx-auto">
        <div className="flex flex-wrap -m-2 bg-white p-4 rounded-lg md:h-[594px] lg:h-[594px]">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">First Name</label>
              <input type="text" id="name" name="name" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Last Name</label>
              <input type="text" id="name" name="name" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Subject</label>
              <input type="text" id="name" name="name" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Services</label>
              <div className='flex flex-wrap items-start gap-6'>
                <button className='bg-indigo-100 text-gray-600 px-4 py-2 hover:bg-indigo-300 hover:text-white text-lg rounded'>Healthcare</button>
                <button className='bg-indigo-100 text-gray-600 px-4 py-2 hover:bg-indigo-300 hover:text-white text-lg rounded'>Business</button>
                <button className='bg-indigo-100 text-gray-600 px-4 py-2 hover:bg-indigo-300 hover:text-white text-lg rounded'>Cloud Computing</button>
              </div>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
            </div>
          </div>

          <div className="p-2 w-full flex sm:items-center items-start sm:gap-0 gap-4 justify-between sm:flex-row flex-col">
          <p className='flex items-center justify-between'>  <input type="checkbox" name="" id="" /> <span className='ml-2'>I agree with terms of usage and privacy policy.</span> </p>
            <button className="flex hover:text-white hover:bg-indigo-300 border-2 py-2 px-4 focus:outline-none border-indigo-300 text-lg rounded-3xl">Submit</button>
          </div>
        
        </div>
        <div className='lg:flex hidden items-center justify-between -m-2 p-4 rounded-lg bg-white mt-8'>
        <div className='flex flex-col gap-2 items-center'>
          <img className="object-none" src="/contact/Icon.png" alt="" />
          <h1 className='font-semibold text-lg'>Sales and Business</h1>
          <h2 className='text-gray-400 text-md'>abcd1234@gmail.com</h2>
           </div>
        <div className='flex flex-col gap-2 items-center'>
          <img className="object-none" src="/contact/Icon-1.png" alt="" />
          <h1 className='font-semibold text-lg'>Partners</h1>
          <h2 className='text-gray-400 text-md'>partners1234@gmail.com</h2>
           </div>
        <div className='flex flex-col gap-2 items-center'>
          <img className="object-none" src="/contact/Icon-2.png" alt="" />
          <h1 className='font-semibold text-lg'>Customer Support</h1>
          <h2 className='text-gray-400 text-md'>support1234@gmail.com</h2>
           </div>
      
      </div>
      </div>
      <div className='md:block lg:block hidden'>
        <img src="/Box.png" alt="" />
      </div>
      </div>
      <div className='lg:hidden flex items-center justify-between sm:flex-row flex-col sm:gap-0 gap-4 -m-2 w-full  p-4 rouned-lg bg-white'>
        <div className='flex flex-col gap-2 items-center'>
          <img className="object-none" src="/contact/Icon.png" alt="" />
          <h1 className='font-semibold text-lg'>Sales and Business</h1>
          <h2 className='text-gray-400 text-md'>abcd1234@gmail.com</h2>
           </div>
        <div className='flex flex-col gap-2 items-center'>
          <img className="object-none" src="/contact/Icon-1.png" alt="" />
          <h1 className='font-semibold text-lg'>Partners</h1>
          <h2 className='text-gray-400 text-md'>partners1234@gmail.com</h2>
           </div>
        <div className='flex flex-col gap-2 items-center'>
          <img className="object-none" src="/contact/Icon-2.png" alt="" />
          <h1 className='font-semibold text-lg'>Customer Support</h1>
          <h2 className='text-gray-400 text-md'>support1234@gmail.com</h2>
           </div>
      
      </div>
    </div>
  </section>
  )
}

export default Form
