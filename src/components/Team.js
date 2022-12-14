import React from 'react'
import orang1 from '../Assets/h3-team-1.jpeg'
import orang2 from '../Assets/Team-img3.jpeg'
import orang3 from '../Assets/h3-team-3.jpeg'

function Team() {
  return (
    <div className="py-[30px] px-[16rem]">
      <p className="text-center text-[36px] font-medium">Meet Our Staff</p>
      <p className="text-center pt-[8px] text-[16px] text-[#0000009c]">
        Sed ut perspiciatis aperiam unde omnis istetus error <br /> volupta dolorem que laudantium, totam rem.
      </p>
      <div className="my-[48px] grid grid-cols-3 space-x-4">
        <div>
          <img src={orang1} className="w-[396px] h-[280px] rounded-[4px]" alt="" />
          <p className="pt-[16px] text-[20px] text-[#000]">Harold Sanders</p>
          <p className='text-[16px] text-[#767676ed]'>Owner</p>
        </div>
        <div>
          <img src={orang2} className="w-[396px] h-[280px] rounded-[4px]" alt="" />
          <p className="pt-[16px] text-[20px] text-[#000]">Andrew Cameron</p>
          <p className='text-[16px] text-[#767676ed]'>Farmer</p>
        </div>
        <div>
          <img src={orang3} className="w-full h-[280px] rounded-[4px]" alt="" />
          <p className="pt-[16px] text-[20px] text-[#000]">Sofia Charlotte</p>
          <p className='text-[16px] text-[#767676ed]'>Manager</p>
        </div>
      </div>
    </div>
  )
}

export default Team
