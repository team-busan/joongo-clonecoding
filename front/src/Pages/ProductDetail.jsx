import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import DetailSlick from "../Components/DetailSlick";
import DetailContents from "../Components/DetailContents";
import DetailInfo from "../Components/DetailInfo";
import Comment from "../Components/Comment";


const ProductDetail = () => {
  const { id } = useParams(); 
  const [products, setProducts] = useState({});
  const [users, setUsers] = useState({});
  const [salesProducts, setSalesProducts] = useState([]);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    axiosInstance.get(`/product/${id}`) 
      .then((res) => {
        setProducts(res.data.product);
        setUsers(res.data.user);
        setSalesProducts(res.data.sales_product);
        setComments(res.data.comment);
      })
      .catch((error) => {
        console.log("Detail", error);
      });

  }, [id]);

  console.log(products);
  return (
  <>
  <div className="flex w-screen">
    <DetailSlick productMain={products} />
    <DetailContents productContent={products}/>
  </div>
  <DetailInfo productInfo={products} userInfo={users} salesInfo={salesProducts} />
  <Comment comment={comments}/>
  </>
)};

export default ProductDetail;
