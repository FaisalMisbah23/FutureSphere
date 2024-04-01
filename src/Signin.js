import React from 'react';
import { Link } from 'react-router-dom';

const Signin = ()=>{
    return(
        <div className='bg-indigo-100 '>
            <div className='container px-5 mx-auto py-12 flex flex-col items-center gap-6 sm:w-[40%]'>
                <div >
                    <img src="/Frame 1000002505.png" alt="" />
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-3xl font-semibold'>Sign In Request</h1>
                    <h3 className='text-xl text-gray-400'>Submit your sign in request and we will reach back asap.</h3>

                </div>
        <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="hover:text-white hover:bg-indigo-300 border-2 py-2 px-6 focus:outline-none border-gray-600 rounded-3xl text-lg">Get Started</button>
        </div>
        <div>
        <h3 className='text-xl text-indigo-300 flex items-center justify-center'><span className='mr-2'>Don't have an account yet?</span> <Link to="/signup">Sign Up</Link>   </h3>

        </div>
      </div>
        </div>
    )
}

export default Signin
