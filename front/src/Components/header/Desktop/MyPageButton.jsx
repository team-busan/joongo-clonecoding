import { MdOutlinePerson } from "react-icons/md";
import { Link } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { userState } from "../../../atoms";

const MyPageButton = () => {
  const userId = useRecoilValue(userState).user_id;

  return (
    <Link to={`/user/${userId}`} className="flex items-center gap-1">
      <MdOutlinePerson className="text-xl xl:text-2xl" />
      <span>마이페이지</span>
    </Link>
  );
};

export default MyPageButton;
