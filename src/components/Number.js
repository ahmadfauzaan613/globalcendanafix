import React from 'react'
import CountUp from 'react-countup'

function Number() {
  return (
    <div className="py-[60px] bg-[#faf8f7] ">
      <div className="px-[16rem] flex items-center justify-around">
        <div>
          <p className="text-center text-[55px] text-[#367978]">
            <CountUp end={100} duration={6} />
          </p>
          <p className='text-[19px] text-[#54595f]'>Sold Daily</p>
        </div>
        <div>
          <p className="text-center text-[55px] text-[#367978]">
            <CountUp end={30} duration={6} />
          </p>
          <p className='text-[19px] text-[#54595f]'>Sold Daily</p>
        </div>
        <div>
          <p className="text-center text-[55px] text-[#367978]">
            <CountUp end={20} duration={6} />
          </p>
          <p className='text-[19px] text-[#54595f]'>Sold Daily</p>
        </div>
        <div>
          <p className="text-center text-[55px] text-[#367978]">
            <CountUp end={15} duration={6} />
          </p>
          <p className='text-[19px] text-[#54595f]'>Sold Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Number
