import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [products, setProducts] = useState({});

  useEffect(() => {
    axiosInstance.get(`/product/${id}`) 
      .then((res) => {
        setProducts(res.data.product);
      })
      .catch((error) => {
        console.log("Detail", error);
      });

  }, [id]);

  console.log(products);
  return <div>{products.title}</div>;
};

export default ProductDetail;
