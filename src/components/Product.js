import React from 'react'
import kelapa1 from '../Assets/img-coconut-1.png'
import kelapa2 from '../Assets/isaac-n-c-hL9pRezOKwc-unsplash.png'
import kelapa3 from '../Assets/coconut-milk-bg.png'
import kelapa4 from '../Assets/Minyak-Kelapa-Murni-1.png'
import Card from './Card'

function Product() {
  return (
    <div className="py-[60px] px-[16rem]">
      <p className="text-center text-[36px] font-medium">Our Products</p>
      <p className="text-center pt-[8px] text-[16px] text-[#0000009c]">
        Sed ut perspiciatis aperiam unde omnis istetus error <br /> volupta dolorem que laudantium, totam rem.
      </p>
      <div className="pt-[48px] grid grid-cols-4 gap-x-4">
        <Card img={kelapa1} judul={'Fresh Coconut'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
        <Card img={kelapa2} judul={'Coconut Raw'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
        <Card img={kelapa3} judul={'Coconut Milk'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
        <Card img={kelapa4} judul={'Coconut Oil'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
      </div>
    </div>
  )
}

export default Product
