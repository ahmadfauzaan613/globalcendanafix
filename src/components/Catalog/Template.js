import React from 'react'
import Navbar from '../Navbar'
import Gambar1 from '../../Assets/coconut-milk-bg.png'
import Footer from '../Footer'

function Template() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
      <div className="pt-[60px] px-[16rem]">
        <div className="border rounded-[4px] h-full w-full">
          <img src={Gambar1} className="w-[1300px] h-[600px]" alt="" />
        </div>
        <p className="pt-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Artikel / 5 April 2022</p>
        <p className="pt-[20px] pb-[48px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra ligula sit amet quam scelerisque, vel luctus quam congue. Fusce iaculis ut diam id egestas. Quisque ullamcorper efficitur ullamcorper. Vivamus in tellus ut risus pellentesque gravida maximus nec odio. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nam quis arcu sed metus egestas sagittis. In hac habitasse platea dictumst. Aliquam commodo dolor sit amet nisi luctus, nec lobortis tortor sollicitudin. Etiam congue purus mauris, eu dignissim lectus pretium vel. Pellentesque ligula velit,
          mollis ac semper eget, tempor quis velit. Nullam nisl mauris, interdum in ornare non, maximus non dolor. Ut neque lorem, ullamcorper ut aliquet auctor, ultrices et dolor. Praesent a nibh accumsan, convallis lacus in, viverra leo. Integer gravida magna ac tortor dictum suscipit. Integer
          metus leo, ullamcorper ac ante non, ultricies accumsan nisi. Nullam vitae vestibulum nulla. Morbi commodo justo id nisi pharetra faucibus. Ut gravida posuere lobortis. In ut eros quam. Vestibulum sollicitudin mauris ut lectus cursus consectetur. Fusce vel pulvinar ex. Etiam auctor tempor
          aliquam. Morbi at vulputate turpis. Maecenas dolor magna, suscipit quis facilisis nec, ultrices et quam. Sed dictum mauris eget luctus interdum. Suspendisse a mi accumsan, accumsan mi ac, varius ligula. Maecenas quis purus consectetur, blandit sem id, tincidunt eros. Mauris tristique
          feugiat lacus, in sollicitudin nisl consectetur euismod. Quisque porttitor, tellus non pulvinar tristique, nunc nisi vulputate tellus, efficitur ultrices metus mauris non risus. Sed a ornare dolor. Cras dictum, erat quis viverra ullamcorper, felis nunc lobortis magna, sed aliquam tortor
          magna nec metus. Quisque nec diam auctor enim tincidunt dapibus nec in massa. Quisque sed felis ac mi laoreet placerat ut vel sapien. Fusce laoreet egestas mauris, nec blandit massa pellentesque et. Suspendisse in consectetur est. Phasellus pulvinar a elit a mattis. Integer mattis posuere
          tellus in commodo. Curabitur hendrerit mi egestas varius eleifend. Vestibulum viverra placerat odio, ac placerat velit porta ut. Sed cursus mollis leo et ullamcorper. Cras neque elit, viverra sed feugiat a, fermentum sed augue. Vestibulum pellentesque, est nec placerat rhoncus, lacus metus
          congue orci, semper interdum libero ligula tristique leo. Pellentesque id rhoncus metus. Vestibulum quis urna quis metus facilisis luctus et id nunc. Donec ac diam hendrerit, rhoncus dolor sit amet, tincidunt mauris. Donec at dui sit amet ante auctor auctor eu vitae mauris. Morbi fermentum
          tellus at elementum viverra.
        </p>
        <div className="border-y py-[20px]">
          <p>Related Posts</p>
          <div className="flex items-center flex-wrap gap-x-[60px] pt-[20px]">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>

        <p className="text-center text-[14px] text-[#717070] pb-[12px] pt-[16px] font-light">Copyright © 2022 PT. GLOBAL CENDANA EKSPOR</p>
      </div>
    </div>
  )
}

export default Template
