import React from 'react'
import { Link } from 'react-router-dom'
const values=[
    {
        img:'Icon.png',
        title:'Integrity',
        content:'Upholding honesty and ethical conduct in everything we do, building trust with our stakeholders.'
   },
    {
        img:'Icon-1.png',
        title:'Innovation',
        content:'Embracing a culture of creativity and continuous improvement to drive groundbreaking solutions.'
   },
    {
        img:'Icon-2.png',
        title:'Collaboration',
        content:'Fostering a collaborative environment that encourages teamwork, diversity, and shared success.'
   },
    {
        img:'Icon-3.png',
        title:'Customer-centric',
        content:' Putting our customers at the heart of everything we do, delivering exceptional experiences and exceeding their expectations.'
   },
    {
        img:'Icon-4.png',
        title:'Sustainability',
        content:'Operating with a focus on environmental and social responsibility, striving for a more sustainable future.'
   },
    {
        img:'Icon-5.png',
        title:'Excellence',
        content:'Pursuing excellence in all aspects of our work, setting high standards and striving for continuous growth and improvement.'
   },
   
]
const Values = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 lg:py-12 md:py-8 py-4 mx-auto sm:w-[80%] w-[90%]">
      <div className="text-center mb-10">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Our Values</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">Guided by Integrity and Purpose</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">At FutureSphere, we are driven by a strong set of values that shape every aspect of our business, ensuring transparency, ethical practices, and a shared commitment to making a positive impact.</p>
        <div className="flex mt-6 justify-center">
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 bg-white rounded-3xl">
    {values.map((item,index)=>(
         <div key={index} className="p-4 md:w-1/3 flex flex-col text-center items-center sm:border-0 rounded-md border-[1px] border-gray-100">
         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
           <img src={`/about/${item.img}`} alt="img" className="w-10 h-10" />
         </div>
         <div className="flex-grow">
         <h2 className="text-gray-900 text-2xl title-font font-medium mb-8" style={{ textShadow: "0px 40px 50px rgba(127,86,217,0.8)" }}>{item.title}</h2>
           <p className="leading-relaxed text-lg mb-4">{item.content} </p>
         </div> 
       </div>
    ))}
      </div>
      <div className='flex items-center justify-center mx-auto sm:mt-10 mt-16'>
      <Link to='/contact'><button className="inline-flex items-center text-white bg-indigo-300 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">Contact Us</button></Link>
      <Link  to="/values">     <button className="inline-flex items-center text-gray-900 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">View all<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
             </svg></button>  </Link>
      </div>
    </div>
  </section>
  )
}

export default Values
