import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useCallback, useRef } from "react";

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

const SliderContainer = ({ settings, title, children }) => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => sliderRef.current.slickPrev(), []);
  const handleNext = useCallback(() => sliderRef.current.slickNext(), []);

  return (
    <div className="pt-10 pb-20">
      {title && <h1 className="font-bold ml-[24px] mb-7">{title}</h1>}
      <div className="flex w-full items-center justify-between">
        <PrevArrow handlePrev={handlePrev} />
        <div className="w-[calc(100%-48px)]">
          <Slider {...settings} ref={sliderRef}>
            {children}
          </Slider>
        </div>
        <NextArrow handleNext={handleNext} />
      </div>
    </div>
  );
};

export default SliderContainer;
