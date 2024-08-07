import React, { useEffect } from 'react'
import Hero from './components/pricing/Hero'
import Table from './components/pricing/Table'
import CTA from './components/home/CTA'

const Pricing = () => {
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
    <div  id='top' className='bg-indigo-100'>
      <Hero/>
      <Table/>
      <CTA/>
    </div>
  )
}

export default Pricing
