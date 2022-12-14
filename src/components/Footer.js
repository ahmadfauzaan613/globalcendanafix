import React from 'react'
import Logo from '../Assets/Logo.png'
import call from '../Assets/call.png'
import insta from '../Assets/instagram.png'
function Footer() {
  return (
    <div className="pt-[60px] pb-[20px] px-[16rem]">
      <div className="flex justify-center">
        <img src={Logo} alt="" className="w-[7vw] h-full" />
      </div>
      <div className="flex items-start justify-around py-[80px]">
        <div>
          <p className='text-[20px] text-[#262626] font-[400]'>About Company</p>
          <p className="py-[10px] text-[16px] text-[#717070] font-light">
            Duty the obligations of business will <br /> frequently occur that pleasure have too <br /> repudiated annoyances endures <br /> accepted.
          </p>
        </div>
        <div>
          <p className='text-[20px] text-[#262626] font-[400]'>Contact Us</p>
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
        <div>
          <p className='text-[20px] text-[#262626] font-[400]'>Social Media</p>
          <div className="pt-[10px] flex items-center space-x-2">
            <img src={insta} className="w-[32px] h-full" alt="" />
            <img src={insta} className="w-[32px] h-full" alt="" />
            <img src={insta} className="w-[32px] h-full" alt="" />
          </div>
        </div>
        <div>
          <p className='text-[20px] text-[#262626] font-[400]'>Address</p>
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
