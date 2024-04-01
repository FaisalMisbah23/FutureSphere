import React from 'react'

const CTA = () => {
  return (
    <div className="container mx-auto flex sm:px-5 lg:py-21 md:py-14 py-7 sm:w-[80%] w-[90%] relative" >
    <img src="/home/3 1.png" className='rounded-3xl w-full sm:h-auto h-[60vh] sm:object-cover object-none' alt="" />
    <div className='flex flex-col gap-6 absolute inset-0 justify-center items-center text-center'>
        <img src="/home/Icon Frame.png" alt="" />
        <h1 className='text-white sm:text-[3rem] text-[1.4rem]'>Do cool things with us.</h1>
        <h6 className='text-white sm:text-[1rem] text-[0.65rem]'>Stay in the loop with updates from our team and <br /> community. Once a month.</h6>
        <div className='flex sm:flex-row flex-col sm:gap-0 gap-2 sm:bg-white sm:p-1 sm:rounded-full'>
            <input type="email" placeholder='Enter your email' className='p-2 md:w-[35vw] lg:w-[22vw] bg-white sm:rounded-l-full rounded-xl' />
            <button className='p-2 bg-indigo-300 text-white sm:rounded-full rounded-xl'>Subscribe to newsletter</button> 
        </div>
    </div>
</div>

  )
}

export default CTA
