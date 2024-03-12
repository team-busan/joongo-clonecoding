import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { axiosInstance } from '../stores/API';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [products, setProducts] = useState({});

  useEffect(() => {
    axiosInstance.get(`/product/${id}`) 
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Detail", error);
      });

  }, [id]);

  console.log(products);
  return <div>{products.title}</div>;
};

export default ProductDetail;
