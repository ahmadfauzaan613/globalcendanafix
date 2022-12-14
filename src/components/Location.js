import React from 'react'
import img from '../Assets/img.jpeg'
function Location() {
  return (
    <div className="mt-[48px] grid grid-cols-2">
      <div className="col-span-1">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className="col-span-1 bg-[#367978] ">
        <div className='px-[60px] py-[25%]'>
        <p className='text-white font-light text-[42px]'>How to find us? We are located in Indonesia</p>
      <p className='text-white text-[17px]'>Lorem ipsum incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      
      </div>
    </div>
  )
}

export default Location
