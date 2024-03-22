import React, {useState, useRef, useCallback} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


export default function DetailSlick({productMain}) {
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
  };
  if (!productMain) {
    return <div>loading...</div>;
    }
  return (
    <div className=' w-2/5 flex'>
      <div  onClick={previous} onKeyDown={previous} role="presentation" className='relative top-44'>
        <SlArrowLeft />
      </div>
      <div className='container w-full bg-slate-100'>
        <Slider {...settings} ref={slickRef}>
          <div>
            <img src={productMain.main_upload_url} alt="first" className="w-full h-96"/>
          </div>
          <div>
              <img src={productMain.sub_upload_url} alt="sceond" className="w-full h-96"/>
          </div>
        </Slider>
        </div>
        <div  onClick={next} onKeyDown={next} role="presentation" className='relative top-44'>
        <SlArrowRight />
      
      </div>
    </div>
    
  )
}
