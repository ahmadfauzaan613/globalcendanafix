import React, { Component } from 'react'
import Slider from 'react-slick'
import Kelapa1 from '../Assets/photo-1603779046675-2eccbab9b982.jpg'

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="py-[24px]">
        <Slider {...settings}>
          <div className="pr-2 photo2">
            <div className="">
              <img src={Kelapa1} alt="" className="w-full h-[400px]" />
            </div>
            <div className="">
              <img src={Kelapa1} alt="" className="w-full h-[400px]" />
            </div>
            <div className="">
              <img src={Kelapa1} alt="" className="w-full h-[400px]" />
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
