import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../stores/API";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/product/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Detail", error);
      });
  }, [id]);

  useEffect(() => {
    const viewedProducts =
      JSON.parse(localStorage.getItem("viewedProducts")) || [];

    if (products.main_upload_url) {
      if (
        viewedProducts.includes({
          product_id: id,
          main_upload_url: products.main_upload_url,
        })
      ) {
        return;
      }
      if (viewedProducts.length >= 3) {
        viewedProducts.pop();
        viewedProducts.unshift({
          product_id: id,
          main_upload_url: products.main_upload_url,
        });
      } else {
        viewedProducts.unshift({
          product_id: id,
          main_upload_url: products.main_upload_url,
        });
      }
    }

    localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
  }, [products]);

  console.log(products);
  return <div>{products.title}</div>;
};

export default ProductDetail;
