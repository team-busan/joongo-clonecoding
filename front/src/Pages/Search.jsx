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
  const [selectedCategory, setSelectedCategory] = useState({ main: "", sub: "", type : ""});

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

  const filterProducts = (searchText, selectedCategory) => {
    let filtered = products.filter(product => product.title.includes(searchText));

    // 카테고리에 따라 필터링
    if (selectedCategory.main) {
      filtered = filtered.filter(product => product.main_category === selectedCategory.main);
      if (selectedCategory.sub) {
        filtered = filtered.filter(product => product.sub_category === selectedCategory.sub);
      }
    }

    // 유형에 따라 필터링
    if (selectedCategory.type !== "") {
      if(selectedCategory.type === 0) {
        filtered = filtered.filter(product => product.type === 0);
      } else if(selectedCategory.type === 1) {
        filtered = filtered.filter(product => product.type === 1);
      }
    }

    return filtered;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = filterProducts(text, selectedCategory); 

  return (
    <div className="p-20">
      <h2 className="mb-2">검색결과 &quot;{text}&quot;</h2>
      <SearchFilter setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <p className="mt-10 mb-5">현재 페이지의 상품 가격을 비교해봤어요</p>
      <SearchProduct products={filteredProducts}/>
    </div>
  );
};

export default Search;
