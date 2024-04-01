import React from 'react'
import Hero from './components/pricing/Hero'
import Table from './components/pricing/Table'
import CTA from './components/home/CTA'

const Pricing = () => {
  return (
    <div className='bg-indigo-100'>
      <Hero/>
      <Table/>
      <CTA/>
    </div>
  )
}

export default Pricing
