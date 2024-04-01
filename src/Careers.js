import React from 'react'
import Hero from './components/careers/Hero'
import Perks from './components/careers/Perks'
import Offices from './components/about/Offices'
import Jobs from './components/about/Jobs'
import CTA from './components/home/CTA'

const Careers = () => {
  return (
    <div className='bg-indigo-100'>
      <Hero/>
      <Perks/>
      <Offices/>
      <Jobs/>
      <CTA/>
    </div>
  )
}

export default Careers
