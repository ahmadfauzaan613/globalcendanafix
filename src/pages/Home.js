import React from 'react'
import Article from '../components/Article'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Navbar from '../components/Navbar'
import Number from '../components/Number'
import Photo from '../components/Photo'
import Product from '../components/Product'
import Team from '../components/Team'
import Whatsapp from '../Assets/whatsapp.png'

function Home() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
      <Hero />
      <Content />
      <Number />
      <Photo />
      <Product />
      {/* <Article /> */}
      <Team />
      <Location />
      <Footer />
      <div className='absolute bottom-4 right-6 cursor-pointer'>
        <img src={Whatsapp} alt='' className='w-[2vw] h-full' />
      </div>
    </div>
  )
}

export default Home
