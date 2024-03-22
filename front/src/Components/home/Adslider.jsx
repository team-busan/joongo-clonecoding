import SliderContainer from "./SliderContainer";
import AdCard from "./AdCard";

const Adslider = () => {
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
    <SliderContainer settings={settings}>
      {sampleArray.map((item, index) => {
        return (
          <div key={index}>
            <AdCard />
          </div>
        );
      })}
    </SliderContainer>
  );
};

export default Adslider;
