import CategoryButton from "./CategoryButton";
import Logo from "../Logo";
import SearchBox from "../SearchBox";
import ChatButton from "./ChatButton";
import SellButton from "./SellButton";
import MyPageButton from "./MyPageButton";
import LoginOrSignUpButton from "./LoginOrSignUpButton";

const DesktopHeader = ({ user }) => {
  return (
    <div className="w-full mx-4 lg:mx-0 lg:w-[1280px] h-[80px] relative flex items-center justify-between ">
      <CategoryButton />
      <Logo />
      <SearchBox />
      <ChatButton />
      <SellButton />
      {user.user_id ? <MyPageButton /> : <LoginOrSignUpButton />}
    </div>
  );
};

export default DesktopHeader;
