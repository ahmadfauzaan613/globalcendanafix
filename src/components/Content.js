import React from 'react'
import kelapa from '../Assets/tunas-kelapajpg-20220408070958.jpeg'
import kelapa2 from '../Assets/278700837.jpeg'

function Content() {
  return (
    <div className="px-[16rem] py-[60px]">
      <p className='text-[38px] font-light text-[#262626]'>
        If you want to be happy <br /> for a lifetime, <span className='font-bold'>plant coconut.</span>
      </p>
      <p className="py-[24px] text-[17px] font-light text-[#262626]">
        Epicurei mel ut, sit ne elit illum euismod. Quo at tantas quidam, id quas ut a mur delicata qui, vix ei prima men titum om <br /> nesque. Liber soluta mei ut, ut vis graeci noluisse .Ne modo qual isque vix, eu nibh. His et has prima dolor. Est solum <br /> falli latine cu, et est equide
        adversa um.
      </p>
      <div className="flex items-center pb-[24px]  space-x-3">
        <img src={kelapa} alt="" className="w-[21vw] h-full rounded-[4px]" />
        <img src={kelapa2} alt="" className="w-[21vw] h-full rounded-[4px]" />
      </div>
      <p className='text-[17px] font-light text-[#262626]"'>
        Epicurei mel ut, sit ne elit illum euismod. Quo at tantas quidam, id quas ut a mur delicata qui, vix ei prima men titum om <br /> nesque. Liber soluta mei ut, ut vis graeci noluisse .Ne modo qual isque vix, eu nibh. His et has prima dolor. Est solum <br /> falli latine cu, et est equide
        adversa um.
      </p>
    </div>
  )
}

export default Content
