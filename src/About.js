import React, { useEffect } from 'react'
import Hero from './components/about/Hero'
import Story from './components/about/Story'
import Clients from './components/home/Clients'
import Values from './components/about/Values'
import Team from './components/about/Team'
import Offices from './components/about/Offices'
import Jobs from './components/about/Jobs'
import CTA from './components/home/CTA'

const About = () => {
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
      <Story/>
      <Clients/>
      <Values/>
      <Team/>
      <Offices/>
      <Jobs/>
      <CTA/>
    </div>
  )
}

export default About
