import React from 'react'
import { Fade } from 'react-reveal'
import kelapa from '../Assets/tunas-kelapajpg-20220408070958.jpeg'
import kelapa2 from '../Assets/278700837.jpeg'

function Content() {
  return (
    <div className="desktop3:px-[16rem] desktop3:py-[60px] desktop2:px-[1rem] desktop2:py-[60px] desktop:px-[1rem] desktop:py-[60px] phone:p-[1rem] tablet:p-[1rem] laptop:p-[1rem]">
      <Fade bottom>
        <p className="text-[38px] font-light text-[#262626]">
          If you want to be happy <br /> for a lifetime, <span className="font-bold">plant coconut.</span>
        </p>
        <p className="py-[24px] text-[17px] font-light text-[#262626]">
          Epicurei mel ut, sit ne elit illum euismod. Quo at tantas quidam, id quas ut a mur delicata qui, vix ei prima men titum om <br className="tablet:hidden" /> nesque. Liber soluta mei ut, ut vis graeci noluisse .Ne modo qual isque vix, eu nibh. His et has prima dolor. Est solum{' '}
          <br className="tablet:hidden laptop:hidden" /> falli latine cu, et est equide adversa um.
        </p>
        <div className="desktop3:flex desktop3:items-center desktop2:flex desktop2:items-center desktop:flex  desktop:items-center laptop:flex laptop:items-center pb-[24px] laptop:space-x-3  desktop3:space-x-3 desktop2:space-x-3 desktop:space-x-3 phone:space-y-3 tablet:space-y-3">
          <img src={kelapa} alt="" className="desktop3:w-[21vw] desktop2:w-[21vw] tablet:w-full laptop:w-[40vw] desktop:w-[40vw] phone:w-full h-full rounded-[4px]" />
          <img src={kelapa2} alt="" className="desktop3:w-[21vw] desktop2:w-[21vw] tablet:w-full laptop:w-[40vw] desktop:w-[40vw] phone:w-full h-full rounded-[4px]" />
        </div>
        <p className="text-[17px] font-light text-[#262626]">
          Epicurei mel ut, sit ne elit illum euismod. Quo at tantas quidam, id quas ut a mur delicata qui, vix ei prima men titum om <br className="tablet:hidden laptop:hidden" /> nesque. Liber soluta mei ut, ut vis graeci noluisse .Ne modo qual isque vix, eu nibh. His et has prima dolor. Est solum{' '}
          <br className="tablet:hidden laptop:hidden" /> falli latine cu, et est equide adversa um.
        </p>
      </Fade>
    </div>
  )
}

export default Content
