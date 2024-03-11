import { MdLogin } from "react-icons/md";

const LoginOrSignUpButton = () => {
  return (
    <button className="flex items-center gap-1">
      <MdLogin className="text-2xl" />
      <span>로그인/회원가입</span>
    </button>
  );
};

export default LoginOrSignUpButton;
