import React from 'react'

function Card(props) {
  return (
    <div>
      <div className="bg-gray-400 cursor-pointer">
        <img src={props.img} alt="" className="w-full h-full poto2" />
      </div>
      <p className="py-[16px] text-[21px] text-[#334b35]">{props.judul}</p>
      <p className='text-[#7a7a7a] text-[16px]'>{props.judul2}</p>
    </div>
  )
}

export default Card
