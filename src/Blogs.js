import React from 'react'
import Hero from './components/blogs/Hero'
import Main from './components/blogs/Main'
import Section from './components/blogs/Section'
import CTA from './components/home/CTA'

const Blogs = () => {
  return (
    <div className='bg-indigo-100'>
      <Hero/>
      <Main/>
      <Section/>
      <CTA/>
    </div>
  )
}

export default Blogs
