import { useState, useEffect } from "react";

import UserViewedProduct from "./UserViewedProduct";
import { MdSearch } from "react-icons/md";

const UserViewedProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("viewedProducts")) || []);
  }, []);

  return (
    <div className="hidden xl:flex absolute top-[120px] right-6 min-[1300px]:right-8 min-[1380px]:right-14 w-24 p-2 border-[1px] border-mediumGray rounded-md flex-col items-center gap-3">
      <p className="text-sm">최근본상품</p>
      {products.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <MdSearch className="text-darkGray" />
          <p className="text-center text-sm text-darkGray">
            최근 본 상품이 없습니다.
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3 items-center">
          {products.map((product, index) => {
            return (
              <UserViewedProduct
                key={index}
                product={product}
                setProducts={setProducts}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserViewedProductsContainer;
