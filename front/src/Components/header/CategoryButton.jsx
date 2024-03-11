import { MdMenu } from "react-icons/md";

const CategoryButton = () => {
  return (
    <div className="bg-primary px-3.5 flex items-center text-white gap-2 h-11 rounded-lg cursor-pointer opacity-90 hover:opacity-100">
      <MdMenu />
      <span>카테고리</span>
    </div>
  );
};

export default CategoryButton;
