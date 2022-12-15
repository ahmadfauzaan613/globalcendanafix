import React from 'react'
import Zoom from 'react-reveal/Zoom'
import CountUp from 'react-countup'

function Number() {
  return (
    <div id='gallery' className="desktop3:py-[60px] desktop2:py-[60px] desktop:py-[60px] laptop:py-[30px] phone:py-[30px]  tablet:py-[30px] bg-[#faf8f7] ">
      <div className="laptop:px-[8rem] laptop:flex laptop:items-center laptop:justify-around  desktop3:px-[16rem] desktop3:flex desktop3:items-center desktop3:justify-around  desktop:px-[1rem] desktop:flex desktop:items-center desktop:justify-around desktop2:px-[1rem] desktop2:flex desktop2:items-center desktop2:justify-around">
        <Zoom>
          <div className="phone:border-b phone:pb-[10px] tablet:border-b tablet:pb-[10px] ">
            <p className="text-center text-[55px] text-[#367978]">
              <CountUp end={100} duration={6} />
            </p>
            <p className="text-[19px] phone:text-center tablet:text-center laptop:text-center text-[#54595f]">Sold Daily</p>
          </div>
        </Zoom>
        <Zoom>
          <div className="phone:border-b phone:pb-[10px] tablet:border-b tablet:pb-[10px] ">
            <p className="text-center text-[55px] text-[#367978]">
              <CountUp end={30} duration={6} />
            </p>
            <p className="text-[19px] phone:text-center tablet:text-center laptop:text-center text-[#54595f]">Sold Daily</p>
          </div>
        </Zoom>

        <Zoom>
          <div className="phone:border-b phone:pb-[10px] tablet:border-b tablet:pb-[10px] ">
            <p className="text-center text-[55px] text-[#367978]">
              <CountUp end={20} duration={6} />
            </p>
            <p className="text-[19px] phone:text-center tablet:text-center laptop:text-center text-[#54595f]">Sold Daily</p>
          </div>
        </Zoom>
        <Zoom>
          <div className="">
            <p className="text-center text-[55px] text-[#367978]">
              <CountUp end={15} duration={6} />
            </p>
            <p className="text-[19px] phone:text-center tablet:text-center laptop:text-center text-[#54595f]">Sold Daily</p>
          </div>
        </Zoom>
      </div>
    </div>
  )
}

export default Number
