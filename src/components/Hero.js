import React from 'react'
import { Fade } from 'react-reveal'
function Hero() {
  return (
    <div className="hero w-full">
      <Fade Big>
        <p className="text-white font-bold centered text-center desktop3:py-[12%] desktop3:text-[60px] desktop2:py-[15%] desktop2:text-[50px] desktop:py-[20%] desktop:text-[40px] laptop:py-[25%] laptop:text-[48px] phone:pt-[50%] phone:text-[28px] tablet:pt-[30%] tablet:text-[38px]">
          {' '}
          PT. GLOBAL CENDANA EKSPOR
        </p>
      </Fade>
    </div>
  )
}

export default Hero
