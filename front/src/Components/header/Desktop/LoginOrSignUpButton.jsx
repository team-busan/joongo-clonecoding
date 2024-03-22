import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginOrSignUpButton = () => {
  return (
    <Link to="/sign?form=in" className="flex items-center gap-1">
      <MdLogin className="text-xl xl:text-2xl" />
      <span>로그인/회원가입</span>
    </Link>
  );
};

export default LoginOrSignUpButton;
