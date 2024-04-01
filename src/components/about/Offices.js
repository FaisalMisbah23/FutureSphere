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
const Offices = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container sm:px-5 px-2  mx-auto sm:w-[80%]  w-[90%]">
      <div className="text-center mb-10">
        <h3 className='mb-10'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Our Offices</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">Discover Our Global Network of Offices</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.</p>
        <div className="flex mt-6 justify-center">
        </div>
      </div>
      <div className="flex flex-wrap flex-row   sm:-m-4 -mx-4 -mb-10 -mt-4 rounded-3xl bg-white">
    {offices.map((item,index)=>(
       <div key={index} className="p-4 md:w-1/3">
       <div className="h-full rounded-lg overflow-hidden ">
         <img className="lg:h-60 md:h-48 w-full object-cover object-center" src={`/about/${item.img}`} alt="blog" />
         <div className="py-6 flex flex-col items-start ">
        <h1 className='text-lg text-indigo-300 font-semibold '>{item.city} </h1>
        <h1 className='text-lg text-gray-500 '>{item.address} </h1>
        <h1 className='text-lg text-gray-800'>{item.number} </h1>
         </div>
       </div>
     </div>
    ))}
      </div>
      <div className="flex items-center justify-center mx-auto sm:my-16 my-16">
      <Link to="/signup">   <button className="inline-flex text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Signup</button></Link>
       <Link to="/contact">  <button className="ml-4 inline-flex text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Contact Us</button></Link>  
        </div>
    </div>
  </section>
  )
}

export default Offices
