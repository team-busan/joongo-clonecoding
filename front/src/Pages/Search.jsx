import React, { useState, useEffect } from 'react';
import { axiosInstance, API_URL } from '../stores/API';
import { useSearchParams } from 'react-router-dom';
import SearchFilter from '../Components/SearchComponents/SearchFilter';
import SearchProduct from '../Components/SearchComponents/SearchProduct';

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [searchText] = useSearchParams();
  const text = searchText.get('keyword');
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({ main: "", sub: "", product_status : "", lowPrice : 0, highPrice : 0});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(API_URL.SEARCH);
        const flattenedData = response.data.flat();
        setProducts(flattenedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchText]);

  const filterProducts = (searchText, selectedCategory) => {
    let filtered = products.filter(product => product.title.includes(searchText));
  
    if (selectedCategory.main) {
      filtered = filtered.filter(product => product.main_category === selectedCategory.main);
      if (selectedCategory.sub) {
        filtered = filtered.filter(product => product.sub_category === selectedCategory.sub);
      }
    }
    // 유형에 따라 필터링
    if (selectedCategory.product_status !== "") {
      if(selectedCategory.product_status === "새상품") {
        filtered = filtered.filter(product => product.product_status === "새상품");
      } else if(selectedCategory.product_status === "중고") {
        filtered = filtered.filter(product => product.product_status === "중고");
      }
    }
    return filtered;
  };

  const onPriceChange = () => {
    let filteredProducts = [...products];
    filteredProducts = filterProducts(text, selectedCategory);
    filteredProducts = filteredProducts.filter(product =>
      (selectedCategory.lowPrice <= product.price &&
        product.price <= selectedCategory.highPrice)
    );
    setProducts(filteredProducts);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = filterProducts(text, selectedCategory); 

  return (
    <div className="p-20">
      <h2 className="mb-2">검색결과 &quot;{text}&quot;</h2>
      <SearchFilter
        setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}
        onPriceChange = {onPriceChange}/>
      <p className="mt-10 mb-5">현재 페이지의 상품 가격을 비교해봤어요</p>
      <SearchProduct products={filteredProducts}/>
    </div>
  );
};

export default Search;