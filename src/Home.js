import React, { useEffect } from 'react'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import Mission from './components/home/Mission'
import Clients from './components/home/Clients'
import Services from './components/home/Services'
import Testimonials from './components/home/Testimonials'
import Blog from './components/home/Blog'
import CTA from './components/home/CTA'

const Home = () => {  
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
    <div id='top' className='bg-indigo-100'>
      <Hero/>
      <Features/>
      <Mission/>
      <Clients/>
      <Services/>
      <Testimonials/>
      <Blog/>
      <CTA/>
    </div>
  )
}

export default Home
