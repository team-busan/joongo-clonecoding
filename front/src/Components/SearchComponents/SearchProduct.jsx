import React, { useState, useEffect } from 'react';

export default function SearchProduct({ products }) {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState({ avgPrice: 0, highPrice: 0, lowPrice: 0 });
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      calculatePriceStats(products);
      setSortedProducts([...products]);
    }
  }, [products]);

  useEffect(() => {
    if (sortBy === 'latest') {
      setSortedProducts([...products].sort((a, b) => new Date(b.write_date_time) - new Date(a.write_date_time)));
    } else if (sortBy === 'highest') {
      setSortedProducts([...products].sort((a, b) => b.price - a.price));
    } else if (sortBy === 'lowest') {
      setSortedProducts([...products].sort((a, b) => a.price - b.price));
    }
  }, [sortBy, products]);

  const calculatePriceStats = (products) => {
    const prices = products.map(product => product.price);
    const avgPrice = prices.reduce((total, price) => total + price, 0) / prices.length;
    const highPrice = Math.max(...prices);
    const lowPrice = Math.min(...prices);
    setPrice({ avgPrice, highPrice, lowPrice });
  };

  const elapsedTime = (date) => {
    const start = new Date(date);
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return '방금 전';

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return start.toLocaleDateString();
  };

  const handleSortBy = (sortType) => {
    setSortBy(sortType);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <div className="flex flex-row justify-around items-center w-full bg-gray-200 h-14 rounded">
        <span className="flex flex-row">
          <p className="mr-5">평균 가격</p>
          <p className="font-bold">{price.avgPrice}</p>
        </span>
        <span className="flex flex-row">
          <p className="mr-5">가장 높은 가격</p>
          <p className="font-bold">{price.highPrice}</p>
        </span>
        <span className="flex flex-row">
          <p className="mr-5">가장 낮은 가격</p>
          <p className="font-bold">{price.lowPrice}</p>
        </span>
      </div>
      <div>
        <div className="flex flex-row justify-end mt-5 mb-5">
          <button 
            className={`mr-3 ml-3 py-2 px-4 rounded focus:outline-none ${sortBy === 'latest' ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handleSortBy('latest')}
          >
            최신순
          </button>
          <button 
            className={`mr-3 ml-3 py-2 px-4 rounded focus:outline-none ${sortBy === 'highest' ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handleSortBy('highest')}
          >
            높은 가격순
          </button>
          <button 
            className={`mr-3 ml-3 py-2 px-4 rounded focus:outline-none ${sortBy === 'lowest' ? 'bg-primary text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handleSortBy('lowest')}
          >
            낮은 가격순
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {sortedProducts.slice(startIndex, endIndex).map((item, i) => (
    <div key={i} className="image-container">
      <img src={item.main_upload_url} alt="" className="w-60 h-60 rounded" />
      <p className="text-lg font-bold mt-2">{item.title}</p>
      <p className="text-gray-500">{item.price}</p>
      <p className="text-gray-500">{elapsedTime(item.write_date_time)}</p>
    </div>
  ))}
</div>

      <footer className="flex gap-5 items-center">
        {[...Array(Math.ceil(products.length / itemsPerPage)).keys()].map((pageNumber) => (
          <button 
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className = "font-bold"
          >
            {pageNumber + 1}
          </button>
        ))}
      </footer>
    </main>
  );
}