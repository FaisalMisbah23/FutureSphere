import React, { useEffect } from 'react'
import CTA from './components/home/CTA'
const features=[
    {
        img:'Icon.png',
        title:'Cutting-Edge Innovation',
        content:'Experience groundbreaking technological advancements that push the boundaries of whats possible, revolutionizing industries and transforming the way we live and work.'
   },
    {
        img:'Icon-1.png',
        title:'Seamless Connectivity',
        content:'Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.'
   },
    {
        img:'Icon-2.png',
        title:'Intuiative User Interface',
        content:'Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.'
   },
    {
        img:'Icon-3.png',
        title:'Seamless Collaboration Tools',
        content:'Gain valuable insights and make data-driven decisions with advanced analytics tools.'
   },
    {
        img:'Icon-4.png',
        title:'Scalable Cloud Infrastructure',
        content:'Streamline communication and foster teamwork with efficient collaboration tools.'
   },
    {
        img:'Icon-5.png',
        title:'Intelligent Data Analytics',
        content:'Scale effortlessly with reliable and flexible cloud infrastructure solutions.'
   },
   
]
const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scrollToHash = () => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToHash();

    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);
  return (
    <section id='top' className="text-gray-600 body-font bg-indigo-100">
    <div className="container px-5 lg:py-16 md:py-12 py-8 mx-auto sm:w-[80%]">
      <div className="text-center mb-10">
        <h3 className='mb-8'><span className='px-4 py-2 bg-gray-100 font-medium text-indigo-300 rounded-3xl sm:text-xl text-md'>Features</span></h3>
        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900 mb-4">Discover the Tools that Drive Success</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Unleash innovation and accelerate growth with our dynamic product.</p>
        <div className="flex mt-6 justify-center">
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 bg-white rounded-3xl">
    {features.map((item,index)=>(
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
    </div>
    <CTA/>
  </section>
  )
}

export default Features
