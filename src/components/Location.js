import React from 'react'
import Fade from 'react-reveal/Fade'
import img from '../Assets/img.jpeg'
function Location() {
  return (
    <div id='contact' className="desktop3:mt-[48px] desktop2:mt-[48px] desktop:mt-[48px] grid desktop3:grid-cols-2 desktop2:grid-cols-2 desktop:grid-cols-2  laptop:grid-cols-2 ">
      <Fade left>
        <div className="col-span-1">
          <img src={img} alt="" className="w-full h-full" />
        </div>
      </Fade>
      <Fade right>
        <div className="col-span-1 bg-[#367978] ">
          <div className="desktop3:px-[60px] desktop2:px-[60px] desktop:px-[60px] laptop:px-[60px] phone:px-[20px] tablet:px-[20px] desktop3:py-[25%] desktop2:py-[25%] desktop:py-[15%] laptop:py-[5%]   phone:py-[10%] tablet:py-[10%]">
            <p className="text-white font-light text-[42px] laptop:text-[28px]">How to find us? We are located in Indonesia</p>
            <p className="text-white text-[17px]">
              Lorem ipsum incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Location
