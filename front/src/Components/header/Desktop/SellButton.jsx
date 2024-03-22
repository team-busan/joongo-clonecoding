import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const SellButton = () => {
  return (
    <Link to="/product/register" className="flex items-center gap-1">
      <MdAddShoppingCart className="text-xl xl:text-2xl" />
      <span>판매하기</span>
    </Link>
  );
};

export default SellButton;
