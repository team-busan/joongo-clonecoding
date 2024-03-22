import Adslider from "../Components/home/Adslider";
import ProductCardSlider from "../Components/home/ProductCardSlider";

import { useQuery } from "@tanstack/react-query";
import { getHomeProducts } from "../Utils/api";
import UserViewedProductsContainer from "../Components/home/UserViewedProductsContainer";
import { useEffect, useState } from "react";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["recentUploadedProducts"],
    queryFn: getHomeProducts,
  });

  const user_name = "구공구";

  const [settings1, setSettings1] = useState({});
  const [settings2, setSettings2] = useState({});
  const [settings3, setSettings3] = useState({});

  useEffect(() => {
    if (width > 1024) {
      setSettings1({
        slide: "a",
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        draggable: true,
      });
      setSettings2({
        slide: "a",
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        draggable: true,
      });
      setSettings3({
        slide: "a",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        draggable: true,
      });
    } else {
      setSettings1({
        slide: "a",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable: true,
      });
      setSettings2({
        slide: "a",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable: true,
      });
      setSettings3({
        slide: "a",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable: true,
      });
    }
  }, [width]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="px-0 tablet:px-8 w-full flex justify-center">
      <div className="w-full tablet:w-[1024px] desktop:w-[1280px]">
        <UserViewedProductsContainer />
        <Adslider width={width} />
        <ProductCardSlider
          data={data.recent}
          title="방금 등록된 상품"
          settings={settings1}
        />
        <ProductCardSlider
          data={data.hot}
          title="실시간 인기 상품"
          settings={settings2}
        />
        <ProductCardSlider
          data={data.random}
          title={`${user_name}님 이런 상품 어때요?`}
          settings={settings3}
        />
      </div>
    </div>
  );
};

export default Home;
