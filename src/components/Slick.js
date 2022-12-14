import React, { Component } from 'react'
import Slider from 'react-slick'
import kelapa1 from '../Assets/pexels-photo-7248417.png'
import kelapa2 from '../Assets/7796259596-klasfikasidanmorfologitanamankelapa.png'
import kelapa3 from '../Assets/pexels-photo-7248417.png'
import kelapa4 from '../Assets/pexels-photo-7248417.png'
import Card from './Card'

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
            <Card img={kelapa1} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2 photo2">
            <Card img={kelapa2} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2 photo2">
            <Card img={kelapa3} judul={'1'} judul2={'2'} />
          </div>
          <div className="pr-2 photo2">
            <Card img={kelapa4} judul={'1'} judul2={'2'} />
          </div>
        </Slider>
      </div>
    )
  }
}
