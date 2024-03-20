import SliderContainer from "./SliderContainer";
import ProductCard from "../ProductCard";

const ProductCardSlider = ({ data, title }) => {
  const settings = {
    slide: "a",
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    draggable: true,
  };

  return (
    <SliderContainer settings={settings} title={title}>
      {data.map((item, index) => {
        return <ProductCard key={index} product={item} />;
      })}
    </SliderContainer>
  );
};

export default ProductCardSlider;
