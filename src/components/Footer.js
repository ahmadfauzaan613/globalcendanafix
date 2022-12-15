import React from 'react'
import Logo from '../Assets/Logo.png'
import call from '../Assets/call.png'
import insta from '../Assets/instagram.png'
function Footer() {
  return (
    <div className="desktop3:pt-[60px] desktop2:pt-[60px] desktop:pt-[60px] laptop:pt-[60px]  phone:py-[20px] tablet:py-[20px] pb-[20px] desktop3:px-[16rem] desktop:px-[1rem] laptop:px-[1rem] phone:px-[10px] tablet:px-[10px]">
      <div className="flex justify-center">
        <img src={Logo} alt="" className="desktop3:w-[7vw] desktop:w-[12vw] desktop2:w-[12vw]  laptop:w-[20vw] tablet:w-[30vw] phone:w-[40vw] h-full" />
      </div>
      <div className="desktop3:flex desktop3:items-start desktop3:justify-around desktop2:flex desktop2:items-start desktop2:justify-around desktop:flex desktop:items-start desktop:justify-around phone:py-[20px] phone:px-[10px] tablet:py-[20px] tablet:px-[10px] laptop:px-[10px]  desktop3:py-[80px] desktop2:py-[80px] desktop:py-[80px] laptop:py-[80px]">
        <div>
          <p className="text-[20px] text-[#262626] font-[400]">About Company</p>
          <p className="py-[10px] text-[16px] text-[#717070] font-light">
            Duty the obligations of business will <br /> frequently occur that pleasure have too <br /> repudiated annoyances endures <br /> accepted.
          </p>
        </div>
        <div className="phone:py-[20px] tablet:py-[20px] laptop:py-[20px]">
          <p className="text-[20px] text-[#262626] font-[400]">Contact Us</p>
          <div className="flex items-center space-x-2 pt-[10px]">
            <img src={call} alt="" className="w-[15px] h-[15px]" />
            <p className=" text-[16px] text-[#717070] font-light">0813 3456 78</p>
          </div>
          <div className="flex items-center space-x-2 py-[4px]">
            <img src={call} alt="" className="w-[15px] h-[15px] " />
            <p className=" text-[16px] text-[#717070] font-light">021 1231 3123</p>
          </div>
          <div className="flex items-center space-x-2 ">
            <img src={call} alt="" className="w-[15px] h-[15px]" />
            <p className=" text-[16px] text-[#717070] font-light">mail@example.com</p>
          </div>
        </div>
        <div className="phone:py-[20px] tablet:py-[20px] laptop:py-[20px]">
          <p className="text-[20px] text-[#262626] font-[400]">Social Media</p>
          <div className="pt-[10px] flex items-center space-x-2">
            <img src={insta} className="w-[32px] h-full" alt="" />
            <img src={insta} className="w-[32px] h-full" alt="" />
            <img src={insta} className="w-[32px] h-full" alt="" />
          </div>
        </div>
        <div className="phone:py-[20px] tablet:py-[20px] laptop:py-[20px]">
          <p className="text-[20px] text-[#262626] font-[400]">Address</p>
          <p className="pt-[8px] text-[16px] text-[#717070] font-light">
            Jl. Indonesia Raya, Sudirman, Jakarta <br /> Selatan, DKI Jakarta, Indonesia, 10150
          </p>
        </div>
      </div>
      <p className="text-center text-[14px] text-[#717070] font-light">Copyright © 2022 PT. GLOBAL CENDANA EKSPOR</p>
    </div>
  )
}

export default Footer
