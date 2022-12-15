import React, { useState } from 'react'
import Logo from '../Assets/Logo.png'

function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const buttonDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
    <>
      <div className="tablet:flex tablet:items-center desktop3:absolute desktop3:bg-white desktop3:w-full desktop3:top-0 desktop2:absolute desktop2:bg-white desktop2:w-full desktop2:top-0 desktop:absolute desktop:bg-white desktop:w-full desktop:top-0 laptop:absolute laptop:bg-white laptop:w-full laptop:top-0 phone:absolute phone:top-0 z-10 phone:bg-white phone:w-full tablet:absolute tablet:top-0 tablet:bg-white tablet:w-full  tablet:justify-between phone:flex phone:items-center phone:justify-between phone:px-[15px]  phone:py-[10px] tablet:px-[15px] tablet:py-[10px] laptop:flex laptop:items-center laptop:justify-between laptop:px-[1rem] laptop:py-[16px] desktop3:flex desktop3:items-center desktop3:justify-between desktop3:px-[16rem] desktop3:py-[24px] desktop:flex desktop:items-center desktop:justify-between desktop:px-[1rem] desktop:py-[14px] desktop2:flex desktop2:items-center desktop2:justify-between desktop2:px-[1rem] desktop2:py-[16px] ">
        <a href="#home">
          <img src={Logo} className="w-[64px] h-full" alt="" />
        </a>
        <div className="flex items-center space-x-4 phone:hidden tablet:hidden">
          <a href="#home">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">HOME</p>
          </a>
          <a href="#about">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">ABOUT US</p>
          </a>
          <a href="#gallery">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">GALLERY</p>
          </a>
          <a href="#product">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">PRODUCTS</p>
          </a>
          {/* <a href="#">
          <p className="text-[14px] cursor-pointer hover:text-[#00d084]">BLOG</p>
        </a> */}
          <a href="#team">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">TEAM</p>
          </a>
          <a href="#contact">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">CONTACT</p>
          </a>
        </div>
        {!dropdown ? (
          <span onClick={buttonDropdown} class="material-symbols-outlined cursor-pointer desktop3:hidden desktop2:hidden desktop:hidden laptop:hidden">
            menu
          </span>
        ) : (
          <span onClick={buttonDropdown} class="material-symbols-outlined cursor-pointer desktop3:hidden desktop2:hidden desktop:hidden laptop:hidden">
            close
          </span>
        )}
      </div>
      {dropdown && (
        <div className="bg-[#faf8f7] phone:absolute phone:top-16 tablet:absolute tablet:top-16 z-10 phone:w-full tablet:w-full px-[1rem] py-[8px] ">
          <a href="#home">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">HOME</p>
          </a>
          <a href="#about">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">ABOUT US</p>
          </a>
          <a href="#gallery">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">GALLERY</p>
          </a>
          <a href="#product">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">PRODUCTS</p>
          </a>
          {/* <a href="#">
          <p className="text-[14px] cursor-pointer hover:text-[#00d084]">BLOG</p>
        </a> */}
          <a href="#team">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">TEAM</p>
          </a>
          <a href="#contact">
            <p className="text-[14px] cursor-pointer hover:text-[#00d084]">CONTACT</p>
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar
