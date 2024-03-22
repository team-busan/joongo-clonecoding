import { Link } from "react-router-dom";

import calculateTime from "../Utils/calculateTime.js";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.product_id}`}
      className="w-72 tablet:w-40 desktop:w-48 min-h-80 rounded mx-auto"
    >
      <img
        className="w-20 h-20 min-[410px]:w-28 min-[410px]:h-28 min-[570px]:w-40 min-[570px]:h-40 min-[790px]:w-60 min-[790px]:h-60 min-[940px]:w-72 min-[940px]:h-72 tablet:w-40 tablet:h-40 desktop:w-48 desktop:h-48 object-cover rounded"
        src={product.main_upload_url}
        alt="product"
      />
      <div className="mt-4 px-3 flex flex-col gap-2">
        <h5>{product.title}</h5>
        <p className="font-bold text-xl">{product.price.toLocaleString()}원</p>
        <p className="text-darkGray">
          {calculateTime(product.write_date_time)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
