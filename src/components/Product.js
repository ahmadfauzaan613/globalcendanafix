import React from 'react'
import kelapa1 from '../Assets/img-coconut-1.png'
import kelapa2 from '../Assets/isaac-n-c-hL9pRezOKwc-unsplash.png'
import kelapa3 from '../Assets/coconut-milk-bg.png'
import kelapa4 from '../Assets/Minyak-Kelapa-Murni-1.png'
import Card from './Card'
import { Fade } from 'react-reveal'

function Product() {
  return (
    <div className="py-[60px] desktop3:px-[16rem] desktop2:px-[1rem] desktop:px-[1rem]  laptop:px-[1rem]">
      <Fade bottom>
        <p className="text-center desktop3:text-[36px] desktop2:text-[36px] desktop:text-[36px] laptop:text-[36px] phone:text-[28px] tablet:text-[28px] font-medium">Our Products</p>
        <p className="text-center pt-[8px] text-[16px] phone:px-[10px] tablet:px-[10px] text-[#0000009c]">
          Sed ut perspiciatis aperiam unde omnis istetus error <br className="phone:hidden" /> volupta dolorem que laudantium, totam rem.
        </p>
        <div className="pt-[48px] grid desktop2:grid-cols-4 desktop3:grid-cols-4 desktop:grid-cols-4 laptop:grid-cols-4 tablet:grid-cols-2 tablet:gap-y-4 gap-x-4 phone:px-[10px] tablet:px-[10px] phone:space-y-5">
          <Card img={kelapa1} judul={'Fresh Coconut'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
          <Card img={kelapa2} judul={'Coconut Raw'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
          <Card img={kelapa3} judul={'Coconut Milk'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
          <Card img={kelapa4} judul={'Coconut Oil'} judul2={'Ballan wrasse climbing gourami amur pike Arctic char.'} />
        </div>
      </Fade>
    </div>
  )
}

export default Product
