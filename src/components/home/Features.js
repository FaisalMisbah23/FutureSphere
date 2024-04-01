import React from 'react'
import { Link } from 'react-router-dom'
const feature=[
    {
        img:'Icon-1.png',
        title:'Cutting-Edge Innovation',
        content:'Experience groundbreaking technological advancements that push the boundaries of whats possible, revolutionizing industries and transforming the way we live and work.'
    },
    {
        img:'Icon-2.png',
        title:'Seamless Connectivity',
        content:'Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.'
    },
    {
        img:'Icon-3.png',
        title:'Intuitive User Interface',
        content:'Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.'
    },
]
const Features = () => {
  return (
    <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000" >
    <div className="container px-5 lg:py-24 md:py-18 py-12 mx-auto sm:w-[80%]">
      <div className="text-center mb-10">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Features</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">Discover the Tools that Drive Success</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Unleash innovation and accelerate growth with our dynamic product.</p>
        <div className="flex mt-6 justify-center">
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 bg-white rounded-3xl">
    {feature.map((item,index)=>(
         <div key={index} className="p-4 md:w-1/3 flex flex-col text-center items-center sm:border-0 rounded-md border-[1px] border-gray-100">
         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
           <img src={`home/${item.img}`} alt="img" className="w-10 h-10" />
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
         <Link to="/features" >   <button className="inline-flex items-center text-gray-900 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">View all<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7" />
             </svg></button>  </Link>
      </div>
    </div>
  </section>
  )
}

export default Features
