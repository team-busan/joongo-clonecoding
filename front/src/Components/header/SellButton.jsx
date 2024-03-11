import { MdAddShoppingCart } from "react-icons/md";

const SellButton = () => {
  return (
    <button className="flex items-center gap-1">
      <MdAddShoppingCart className="text-2xl" />
      <span>판매하기</span>
    </button>
  );
};

export default SellButton;
