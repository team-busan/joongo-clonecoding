import React from 'react';
import PropTypes from 'prop-types';
import { Products } from "../stores/mockData.js";

const Card = ({ productId }) => {

    const product = Products.find((item) => item.product_id === productId);

    if (!product) {
        return (
          <div className="w-[190px] h-[190px] bg-gray-300 rounded-lg">
            <p className="p-4">상품을 찾을 수 없습니다.</p>
          </div>
        );
      }
      
  return (
    <div className="w-[190px] h-[330px] rounded-lg flex flex-col justify-between">
      <img src={product.main_upload_url} alt={product.title} className="w-full h-[190px] object-cover rounded-lg" />
      <div className="text-[16px] text-gray-800 mt-2">{product.title}</div>
      <div className="text-[18px] text-gray-700 mt-7">{product.price}원</div>
      <div className="text-[14px] text-gray-600">{product.write_date_time}</div>
    </div>
  );
};

Card.propTypes = { 
    productId: PropTypes.string.isRequired,
  };

export default Card;