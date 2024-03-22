import React, { useState, useEffect } from 'react';

export default function SearchProduct({ products }) {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [price, setPrice] = useState({avgPrice : 0, highPrice : 0, lowPrice : 0});

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      calculatePriceStats(products);
    }
  }, [products]);

  const calculatePriceStats = (products) => {
    const prices = products.map(product => product.price);
    const avgPrice = prices.reduce((total, price) => total + price, 0) / prices.length;
    const highPrice = Math.max(...prices);
    const lowPrice = Math.min(...prices);
    setPrice({ avgPrice, highPrice, lowPrice });
  };


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <main>
      <div className="flex flex-row justify-around items-center w-full bg-gray-200 h-14 rounded">
        <span className="flex flex-row">
          <p className = "mr-5">평균 가격</p>
          <p className = "font-bold">{price.avgPrice}</p>
        </span>
        <span className="flex flex-row">
          <p className = "mr-5">가장 높은 가격</p>
          <p className = "font-bold">{price.highPrice}</p>
        </span>
        <span className="flex flex-row">
          <p className = "mr-5">가장 낮은 가격</p>
          <p className = "font-bold">{price.lowPrice}</p>
        </span>
      </div>
      <div>
        <div className="flex flex-row justify-end mt-5 mb-5">
          <button>최신순</button>
          <p className = "mr-3 ml-3">|</p>
          <button>높은 가격순</button>
          <p className = "mr-3 ml-3">|</p>
          <button>낮은 가격순</button>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item, i) => (
          <div key={i} className="image-container">
            <img src={item.main_upload_url} alt="" className="w-60 h-60 rounded" />
            <p className="text-lg font-bold mt-2">{item.title}</p>
            <p className="text-gray-500">{item.price}</p>
            <p className="text-gray-500">{item.write_date_time}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
