import React, { useState, useEffect } from 'react';
import { axiosInstance, API_URL } from '../stores/API';
import { useSearchParams } from 'react-router-dom';
import SearchFilter from '../Components/SearchComponents/SearchFilter';
import SearchProduct from '../Components/SearchComponents/SearchProduct';

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [searchText] = useSearchParams();
  const text = searchText.get('search');
  const [products, setProducts] = useState([]);

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

  console.log(products);
  console.log(text);

  const filterProducts = (searchText) => {
    return products.filter(product => product.title.includes(searchText));
  }; //검색 결과에 따른 데이터 출력 

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = filterProducts(text); 

  return (
    <div>
      <h2>검색결과 &quot;{text}&quot;</h2>
      <SearchFilter/>
      <p>현재 페이지의 상품 가격을 비교해봤어요</p>
      <SearchProduct products={filteredProducts}/>
    </div>
  );
};

export default Search;