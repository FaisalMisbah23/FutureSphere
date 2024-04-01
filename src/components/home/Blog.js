import React from 'react'
import { Link } from 'react-router-dom'
const blogs=[
    {
        img:'Blogs Featured Image.png',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
    {
        img:'Blogs Featured Image.png',
        title:'The Future of AI in Healthcare: Transforming Patient Care',
        content:' Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.'
    },
]
const Blog = () => {
  return (
    <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000" >
    <div className="container sm:first-line:px-5 lg:py-15 md:py-10 py-5 mx-auto sm:w-[80%] w-[90%]">
      <div className="text-center mb-10">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Blogs</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">From our Latest Blogs</h1>
        <div className="flex justify-center">
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 rounded-3xl">
    {blogs.map((item,index)=>(
       <div key={index} className="p-4 md:w-1/3">
       <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white">
         <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`/home/${item.img}`} alt="blog" />
         <div className="p-6">
           <h2 className="tracking-widest text-xs title-font font-medium mb-4 "><span className='p-2 rounded-3xl bg-indigo-200 text-white'>Healthcare</span></h2>
           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
           <p className="leading-relaxed mb-3">{item.content}</p>
           <div className="flex justify-end">
        <Link to='/blogs/blog' className="text-gray-400 inline-flex items-end md:mb-2 lg:mb-0 border-b-2 border-gray-500">Read more</Link>
      </div>
         </div>
       </div>
     </div>
    ))}
      </div>
      <div className='flex items-center justify-center mx-auto sm:mt-10 mt-16'>
      <Link to='/contact'><button className="inline-flex items-center text-white bg-indigo-300 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">Contact Us</button></Link>
       <Link  to="blogs">     <button className="inline-flex items-center text-gray-900 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">View all<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7" />
             </svg></button>  </Link> 

      </div>
    </div>
  </section>
  )
}

export default Blog
