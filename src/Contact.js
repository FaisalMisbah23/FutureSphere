import React, { useEffect } from 'react'
import Form from './components/contact/Form'
import Offices from './components/about/Offices'
import Faq from './components/contact/Faq'
import CTA from './components/home/CTA'
import { Link } from 'react-router-dom'

const Contact = () => {
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
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 lg:py-18 md:py-12 py-6 items-center justify-center flex-col">
      <div className="text-center lg:w-[80%] w-full mb-10">
      <Link to="/signup">    <h1 className="title-font sm:text-[3.4vw] sm:leading-[4vw] text-3xl mb-4 font-medium text-gray-900">Contact Us</h1></Link>
        <p className="mb-4 leading-relaxed">At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change.</p>
      </div>
    </div>
  </section>
  <Form/>
  <Offices/>
  <Faq/>
  <CTA/>
 </div>
  )
}

export default Contact
