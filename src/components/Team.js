import React from 'react'
import orang1 from '../Assets/h3-team-1.jpeg'
import orang2 from '../Assets/Team-img3.jpeg'
import orang3 from '../Assets/h3-team-3.jpeg'
import { Fade } from 'react-reveal'

function Team() {
  return (
    <div className="py-[30px] desktop3:px-[16rem] desktop2:px-[1rem] desktop:px-[1rem] laptop:px-[1rem]">
      <Fade bottom>
        <p className="text-center desktop3:text-[36px] desktop2:text-[36px] desktop:text-[36px] laptop:text-[36px] phone:text-[28px] tablet:text-[28px] font-medium">Meet Our Staff</p>
        <p className="text-center pt-[8px] text-[16px]  text-[#0000009c]">
          Sed ut perspiciatis aperiam unde omnis istetus error <br className="phone:hidden" /> volupta dolorem que laudantium, totam rem.
        </p>
        <div className="my-[48px] grid desktop3:grid-cols-3 desktop2:grid-cols-3 desktop:grid-cols-3 desktop:space-x-4 desktop2:space-x-4  desktop3:space-x-4 laptop:grid-cols-3  laptop:space-x-4 tablet:px-[10px] tablet:space-y-3 phone:px-[10px] phone:space-y-3">
          <Fade>
            <div>
              <img src={orang1} className="desktop3:w-[396px] desktop3:h-[280px] desktop2:w-[396px] desktop2:h-[280px] desktop:w-[396px] desktop:h-[280px] laptop:w-full laptop:h-[280px]  phone:w-full tablet:w-full rounded-[4px]" alt="" />
              <p className="pt-[16px] text-[20px] text-[#000]">Harold Sanders</p>
              <p className="text-[16px] text-[#767676ed]">Owner</p>
            </div>
          </Fade>
          <Fade>
            <div>
              <img src={orang2} className="w-[396px] h-[280px] phone:w-full tablet:w-full rounded-[4px]" alt="" />
              <p className="pt-[16px] text-[20px] text-[#000]">Andrew Cameron</p>
              <p className="text-[16px] text-[#767676ed]">Farmer</p>
            </div>
          </Fade>
          <Fade>
            <div>
              <img src={orang3} className="w-full h-[280px] phone:w-full tablet:w-full rounded-[4px]" alt="" />
              <p className="pt-[16px] text-[20px] text-[#000]">Sofia Charlotte</p>
              <p className="text-[16px] text-[#767676ed]">Manager</p>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  )
}

export default Team
