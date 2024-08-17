import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import png1 from '../assets/image-video/1.png';
import png2 from '../assets/image-video/2.png';
import png3 from '../assets/image-video/3.png';
import png4 from '../assets/image-video/4.png';
import png5 from '../assets/image-video/5.png';
import png6 from '../assets/image-video/6.png';
import png7 from '../assets/image-video/7.png';
import png8 from '../assets/image-video/8.png';
import png9 from '../assets/image-video/9.png';
import png10 from '../assets/image-video/10.png';
import png11 from '../assets/image-video/11.png';



export default function Page4(){
    
    const ListCarusalIMG = [
      {
        id:1,
        img: `${png1}`,
      },
      {
        id:2,
        img: `${png2}`,
      },
      {
        id:3,
        img: `${png3}`,
      },
      {
        id:4,
        img: `${png4}`,
      },
      {
        id:5,
        img: `${png5}`,
      },
      {
        id:6,
        img: `${png6}`,
      },
      {
        id:7,
        img: `${png7}`,
      },
      {
        id:8,
        img: `${png8}`,
      },
      {
        id:9,
        img: `${png9}`,
      },
      {
        id:10,
        img: `${png10}`,
      },
      {
        id:11,
        img: `${png11}`,
      },
      
    ]

    
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        cssEase: "linear"
      };

    return (
        <>
          <div className="page4">
            <div className="page4div">
            <Slider {...settings}>
              {ListCarusalIMG.map((Imgid)=>(
                    <div key={Imgid.id} className="carousel-img">
                      <img src={Imgid.img} alt=""/>
                    </div>
                )
              )}
              </Slider>
            </div>
          </div>
        </>
    );
}