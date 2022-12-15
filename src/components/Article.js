import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slick2 from './Slick'

function Article() {
  return (
    <div className="my-[60px]">
      <div className="py-[30px] px-[16rem] bg-[#faf8f7]">
        <p className="text-center text-[36px] font-medium">Articles & Blog</p>
        <p className="text-center pt-[8px] text-[16px] text-[#0000009c]">
          Sed ut perspiciatis aperiam unde omnis istetus error <br /> volupta dolorem que laudantium, totam rem.
        </p>
        <div>
          <Slick2 />
        </div>
      </div>
    </div>
  )
}

export default Article
