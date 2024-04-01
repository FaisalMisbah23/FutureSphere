import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ()=>{
    return(
        <div className='bg-indigo-100 '>
            <div className='container px-5 mx-auto py-12 flex flex-col items-center gap-6 sm:w-[40%]'>
                <div className='flex flex-col items-center gap-2'>
                    <img src="/Empty State.png" alt="" />
                    <h1 className='text-xl text-indigo-300 '>Oops! Nothing to see here</h1>
                </div>
                <div>
              <Link to="/">      <button className="text-white bg-indigo-300 px-2 py-1 flex items-center">
                       <img className='rotate-180' src="/right-arrow.png" alt="" /> <span className='ml-2'>     Back to Home</span>
                    </button></Link>
                </div>
      </div>
        </div>
    )
}

export default NotFound
