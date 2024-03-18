import { BsChatDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChatButton = () => {
  return (
    <Link to="/" className="flex items-center gap-1">
      <BsChatDots className="[transform:rotateY(180deg)] text-xl xl:text-2xl" />
      <span>채팅하기</span>
    </Link>
  );
};

export default ChatButton;
