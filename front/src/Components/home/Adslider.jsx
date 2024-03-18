import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef, useCallback } from "react";

import Slider from "react-slick";
import AdCard from "./AdCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PrevArrow = ({ handlePrev }) => {
  return (
    <div
      onClick={handlePrev}
      onKeyDown={handlePrev}
      role="presentation"
      className="cursor-pointer"
    >
      <FaAngleLeft className="text-2xl" />
    </div>
  );
};

const NextArrow = ({ handleNext }) => {
  return (
    <div
      onClick={handleNext}
      onKeyDown={handleNext}
      role="presentation"
      className="cursor-pointer"
    >
      <FaAngleRight className="text-2xl" />
    </div>
  );
};

const Adslider = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => sliderRef.current.slickPrev(), []);
  const handleNext = useCallback(() => sliderRef.current.slickNext(), []);

  const settings = {
    slide: "img",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6500,
    draggable: true,
  };

  const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex w-full items-center justify-between my-10">
      <PrevArrow handlePrev={handlePrev} />
      <div className="w-[calc(100%-48px)]">
        <Slider {...settings} ref={sliderRef}>
          {sampleArray.map((item, index) => {
            return <AdCard key={index} />;
          })}
        </Slider>
      </div>
      <NextArrow handleNext={handleNext} />
    </div>
  );
};

export default Adslider;
