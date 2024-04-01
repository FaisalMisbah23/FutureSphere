import React from 'react'

const Table = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 mx-auto sm:w-[80%] w-full">
  
      <div className="flex flex-wrap -m-4">

        <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-[1px] border-gray-300 flex flex-col relative overflow-hidden bg-white">
          <div className='flex flex-col items-center'>
            <h2 className="text-3xl title-font mb-4 font-semibold text-center">Basic Plan</h2>
            <h1 className="text-6xl text-gray-600 leading-none flex items-center justify-center mb-4">
              <span>$0</span>
              <span className="text-xl mt-2 font-normal text-gray-500">/month</span>
            </h1>
            <h2 className="text-lg title-font mb-2 font-medium text-center">Great fit for the startups</h2>
          <button className="mb-2 text-gray-600 hover:text-white border-indigo-300 hover:bg-indigo-300 border-2 py-2 px-4 rounded-[50px] text-lg">Get Started </button>
          </div>
          <div className='flex flex-col'>
            <ul>
                <li className='mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>Responsive Website Design</span> 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>  </li>
                <li className='mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>Basic SEO Optimization</span> 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>  </li>
                <li className=' mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>24/7 Customer Support</span>  
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg> </li>   </ul>
          </div>
          <h1 className='text-gray-500 my-3'>Features</h1>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Unlimited Bandwidth
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Custom Domain
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Secure SSL Certificate
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
              <img className='bg-white h-4' src="remove 1 (Traced).png" alt="" />
              </span>Priority Customer Support
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
              <img className='bg-white h-4' src="remove 1 (Traced).png" alt="" />
              </span>Advanced Analytics and Reporting
            </p>
            <p className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
             <img className='bg-white h-4' src="remove 1 (Traced).png" alt="" />
              </span>E-commerce Integration
            </p>
          </div>
        </div>
        <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-indigo-300 flex flex-col relative overflow-hidden bg-white">
          <div className='flex flex-col items-center'>
            <span className="bg-indigo-300 text-white px-3 py-1  text-xs absolute right-0 top-0 rounded-bl">Recommended</span>
            <h2 className="text-3xl title-font mb-4 font-semibold text-center">Business Plan</h2>
            <h1 className="text-6xl text-indigo-300 leading-none flex items-center justify-center mb-4">
              <span>$19</span>
              <span className="text-xl mt-2 font-normal text-gray-500">/month</span>
            </h1>
            <h2 className="text-lg title-font mb-2 font-medium text-center">Great fit for the startups</h2>
          <button className="mb-2 text-gray-600 hover:text-white border-indigo-300 hover:bg-indigo-300 border-2 py-2 px-4 rounded-[50px] text-lg">Get Started </button>
          </div>
          <div className='flex flex-col'>
            <ul>
                <li className='mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>Responsive Website Design</span> 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>  </li>
                <li className='mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>Basic SEO Optimization</span> 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>  </li>
                <li className=' mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>24/7 Customer Support</span>  
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg> </li>   </ul>
          </div>
          <h1 className='text-gray-500 my-3'>Features</h1>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Unlimited Bandwidth
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Custom Domain
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Secure SSL Certificate
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Priority Customer Support
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Advanced Analytics and Reporting
            </p>
            <p className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
             <img className='bg-white h-4' src="remove 1 (Traced).png" alt="" />
              </span>E-commerce Integration
            </p>
          </div>
        </div>
        <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-[1px] border-gray-300 flex flex-col relative overflow-hidden bg-white">
          <div className='flex flex-col items-center'>
            <h2 className="text-3xl title-font mb-4 font-semibold text-center">Enterprise Plan</h2>
            <h1 className="text-6xl text-gray-600 leading-none flex items-center justify-center mb-4">
              <span>$29</span>
              <span className="text-xl mt-2 font-normal text-gray-500">/month</span>
            </h1>
            <h2 className="text-lg title-font mb-2 font-medium text-center">Great fit for the startups</h2>
          <button className="mb-2 text-gray-600 hover:text-white border-indigo-300 hover:bg-indigo-300 border-2 py-2 px-4 rounded-[50px] text-lg">Get Started </button>
          </div>
          <div className='flex flex-col'>
            <ul>
                <li className='mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>Responsive Website Design</span> 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>  </li>
                <li className='mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>Basic SEO Optimization</span> 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>  </li>
                <li className=' mt-3 p-2 text-indigo-300 bg-indigo-50 flex items-center justify-between text-lg px-2 rounded-lg'><span>24/7 Customer Support</span>  
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-4 h-4 bg-indigo-300 text-white rounded-full" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg> </li>   </ul>
          </div>
          <h1 className='text-gray-500 my-3'>Features</h1>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Unlimited Bandwidth
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Custom Domain
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Secure SSL Certificate
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Priority Customer Support
            </p>
            <p className="flex items-center text-gray-600 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>Advanced Analytics and Reporting
            </p>
            <p className="flex items-center text-gray-600">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-300 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>E-commerce Integration
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Table
