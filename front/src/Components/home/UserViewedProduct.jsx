import { Link } from "react-router-dom";

import { MdClose } from "react-icons/md";

const UserViewedProduct = ({ product, setProducts = { setProducts } }) => {
  const handleDelete = (e) => {
    const viewedProducts = JSON.parse(localStorage.getItem("viewedProducts"));
    for (let i = 0; i < viewedProducts.length; i++) {
      if (viewedProducts[i].product_id === product.product_id) {
        viewedProducts.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
    setProducts(viewedProducts);
    e.preventDefault();
  };

  return (
    <Link
      to={`/product/${product.product_id}`}
      className="w-20 h-20 relative rounded-md"
    >
      <img
        className="w-20 h-20 rounded-md object-cover"
        src={product.main_upload_url}
        alt="product"
      />
      <div
        onClick={(e) => handleDelete(e)}
        onKeyDown={(e) => handleDelete(e)}
        role="presentation"
        className="absolute right-1 top-1 bg-white border-[1px] border-black rounded-full flex justify-center items-center"
      >
        <MdClose />
      </div>
    </Link>
  );
};

export default UserViewedProduct;
