import Customers from '@/components/ui/home/customer'
import Hero from '@/components/ui/home/hero'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      {/* <Hero></Hero> */}
      <Customers></Customers>
      <Hero title="Big Deal"></Hero>
    </div>
  )
}

export default HomePage