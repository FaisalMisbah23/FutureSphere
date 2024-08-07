import React, { useEffect } from 'react'
import Hero from './components/blogs/Hero'
import Main from './components/blogs/Main'
import Section from './components/blogs/Section'
import CTA from './components/home/CTA'

const Blogs = () => {
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
      <Main/>
      <Section/>
      <CTA/>
    </div>
  )
}

export default Blogs
