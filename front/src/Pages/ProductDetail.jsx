import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../stores/API";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
