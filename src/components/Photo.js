import React from 'react'
import kelapa1 from '../Assets/Coconut-The_Wonder_Fruit-1920x1280-940x627-1.jpeg'
import kelapa2 from '../Assets/pexels-photo-7676720.jpeg'
import kelapa3 from '../Assets/photo-1580984969064-9a264d75832c.jpg'
function Photo() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3">
        <div className='photo'>
        <img src={kelapa1} alt="" className="w-full h-full poto" />
        </div>
        <div className='photo'>
        <img src={kelapa2} alt="" className="w-full h-full poto" />
        </div>
        <div className='photo'>
        <img src={kelapa3} alt="" className="w-full h-full poto" />
        </div>
       
      </div>
      <div className="hero2 w-full">
        <p className="centered text-center py-[12%] text-[44px] text-white font-normal">Create Meaningful <br />
Experiences for Supplier.</p>
      </div>
    </div>
  )
}

export default Photo
