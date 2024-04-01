import React from 'react'
import Hero from './components/about/Hero'
import Story from './components/about/Story'
import Clients from './components/home/Clients'
import Values from './components/about/Values'
import Team from './components/about/Team'
import Offices from './components/about/Offices'
import Jobs from './components/about/Jobs'
import CTA from './components/home/CTA'

const About = () => {
  return (
    <div className='bg-indigo-100'>
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
