import React from 'react'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import Mission from './components/home/Mission'
import Clients from './components/home/Clients'
import Services from './components/home/Services'
import Testimonials from './components/home/Testimonials'
import Blog from './components/home/Blog'
import CTA from './components/home/CTA'

const Home = () => {
  return (
    <div className='bg-indigo-100'>
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
