import React from 'react'
import kelapa1 from '../Assets/Coconut-The_Wonder_Fruit-1920x1280-940x627-1.jpeg'
import kelapa2 from '../Assets/pexels-photo-7676720.jpeg'
import { Fade } from 'react-reveal'
import kelapa3 from '../Assets/photo-1580984969064-9a264d75832c.jpg'
function Photo() {
  return (
    <div className="w-full">
      <div className="grid desktop3:grid-cols-3 desktop2:grid-cols-3 desktop:grid-cols-3  laptop:grid-cols-3 ">
        <Fade Big>
          <div className="photo">
            <img src={kelapa1} alt="" className="w-full h-full poto" />
          </div>
          <div className="photo">
            <img src={kelapa2} alt="" className="w-full h-full poto" />
          </div>
          <div className="photo">
            <img src={kelapa3} alt="" className="w-full h-full poto" />
          </div>
        </Fade>
      </div>
      <div className="hero2 w-full">
        <Fade bottom>
          <p className="centered text-center desktop3:py-[12%] desktop2:py-[12%] desktop:py-[20%] laptop:py-[20%] phone:py-[50%] tablet:py-[40%] desktop3:text-[44px] desktop2:text-[44px] desktop:text-[44px] laptop:text-[44px] phone:text-[28px] tablet:text-[28px] text-white font-normal">
            Create Meaningful <br />
            Experiences for Supplier.
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default Photo
