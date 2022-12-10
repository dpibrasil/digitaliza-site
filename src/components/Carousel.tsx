import React from "react";
import Slider from "react-slick";

import  img1  from "../assets/images/TA-141w (1) 1.svg"
import  img2  from "../assets/images/Logo+Mar+Vermelho-158w 1.svg"
import  img3  from "../assets/images/Major-153w 1.svg"
import  img4  from "../assets/images/OAF-62284662-152w (1) 1.svg"
import  img5  from "../assets/images/SI-d556a44c-124w 1.svg"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Carousel(Props:any){
    <div>

    </div>
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3
  };
  return (
    <Slider {...settings}>
      <div className="flex items-center bg-[#13C194] rounded">
        <img className=""></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
      <div className="flex items-center bg-[#13C194] rounded">
        <img></img>
      </div>
    </Slider>
  );
}
