import SliderContainer from "./SliderContainer";
import ProductCard from "../ProductCard";

const ProductCardSlider = ({ data, title, settings }) => {
  return (
    <SliderContainer settings={settings} title={title}>
      {data.map((item, index) => {
        return <ProductCard key={index} product={item} />;
      })}
    </SliderContainer>
  );
};

export default ProductCardSlider;
