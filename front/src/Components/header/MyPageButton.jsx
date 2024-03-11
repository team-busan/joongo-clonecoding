import { MdOutlinePerson } from "react-icons/md";

const MyPageButton = () => {
  return (
    <button className="flex items-center gap-1">
      <MdOutlinePerson className="text-2xl" />
      <span>마이페이지</span>
    </button>
  );
};

export default MyPageButton;
