import React, { useState, useEffect } from 'react';

export default function SearchProduct({ products }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  console.log(products);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="flex flex-row">
        <span className="flex flex-row">
          <p>평균 가격</p>
          <p>10000</p>
        </span>
        <span className="flex flex-row">
          <p>가장 높은 가격</p>
          <p>21000</p>
        </span>
        <span className="flex flex-row">
          <p>가장 낮은 가격</p>
          <p>2000</p>
        </span>
      </div>
      <div>
        <div className="flex flex-row">
          <p>최신순</p>
          <p>높은 가격순</p>
          <p>낮은 가격순</p>
        </div>
      </div>
      <div className="grid grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((item, i) => (
        <ul key={i}>
          <img src={item.main_upload_url} alt="" className="w-full h-auto" />
          <p className="text-lg font-bold mt-2">{item.title}</p>
          <p className="text-gray-500">{item.price}</p>
          <p className="text-gray-500">{item.write_date_time}</p>
        </ul>
      ))}
      </div>
    </main>
  );
}