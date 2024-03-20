import Adslider from "../Components/home/Adslider";
import ProductCardSlider from "../Components/home/ProductCardSlider";

import { useQuery } from "@tanstack/react-query";
import { getHomeProducts } from "../Utils/api";
import UserViewedProductsContainer from "../Components/home/UserViewedProductsContainer";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["recentUploadedProducts"],
    queryFn: getHomeProducts,
  });

  const user_name = "구공구";

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="px-0 tablet:px-8 w-full flex justify-center">
      <div className="w-full tablet:w-[1024px] desktop:w-[1280px]">
        <UserViewedProductsContainer />
        <Adslider />
        <ProductCardSlider data={data.recent} title="방금 등록된 상품" />
        <ProductCardSlider data={data.hot} title="실시간 인기 상품" />
        <ProductCardSlider
          data={data.random}
          title={`${user_name}님 이런 상품 어때요?`}
        />
      </div>
    </div>
  );
};

export default Home;
