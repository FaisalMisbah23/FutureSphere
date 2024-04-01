import React from 'react'
import AnimatedNumbers from 'react-animated-numbers';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [num, setNum] = React.useState(50000);
  const [num1, setNum1] = React.useState(150000);
  const [num2, setNum2] = React.useState(98);
  React.useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
    <section className="text-gray-600 body-font" data-aos="fade-up" data-aos-duration="2000"  >
    <div  className="container mx-auto flex px-5 lg:py-18 md:py-12 py-6 items-center justify-center flex-col">
      <div className="text-center lg:w-[80%] w-full mb-10">
        <h1 className="title-font sm:text-[4.9vw] sm:leading-[6vw] text-3xl mb-4 font-medium text-gray-900">Revolutionizing the Future with Cutting-Edge Technology</h1>
        <p className="mb-4 leading-relaxed">Empowering Innovation for a Digital Tomorrow</p>
        <div className="flex justify-center">
        <Link to="/signup">    <button className="inline-flex text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Signup</button></Link>
        <Link to="contact">  <button className="ml-4 inline-flex text-white bg-indigo-300 border-0 py-2 px-6 focus:outline-none rounded-[50px] text-lg">Contact Us</button></Link>
        </div>
      </div>
      <img className="sm:w-[80%] sm:rounded-[50px] object-cover object-center rounded" alt="hero" src="/home/Hero.png" />
    </div>
    <div className="container mx-auto text-center flex sm:flex-row border-[1px] border-gray-100  items-center justify-around flex-col text-indigo-300 sm:w-[70%] w-[90%] bg-white">
       <div className="p-4 sm:w-1/3 w-full border-[1px] border-gray-100 flex flex-col items-center">
         {/* <h2 className="title-font font-bold sm:text-5xl text-3xl"></h2> */}
         <h2 className="title-font font-bold sm:text-5xl text-3xl">  <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={num}
      /></h2>
         <p className="leading-relaxed sm:text-4xl text-2xl font-semibold">New users</p>
       </div>
       <div className="p-4 sm:w-1/3 w-full border-[1px] border-gray-100 flex flex-col items-center">
         <h2 className="title-font font-bold sm:text-5xl text-3xl"> <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={num1}
      /></h2>
         <p className="leading-relaxed sm:text-4xl text-2xl font-semibold">Active Users</p>
       </div>
       <div className="p-4 sm:w-1/3 w-full border-[1px] border-gray-100 flex flex-col items-center">
         <h2 className="title-font font-bold sm:text-5xl text-3xl flex items-center"> <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={num2}
      />%</h2>
         <p className="leading-relaxed sm:text-4xl text-2xl font-semibold">Active Users</p>
       </div>
     </div>
  </section>
 </>
  )
}

export default Hero
