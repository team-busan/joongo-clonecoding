import { BsChatDots } from "react-icons/bs";

const ChatButton = () => {
  return (
    <button className="flex items-center gap-1">
      <BsChatDots className="[transform:rotateY(180deg)] text-2xl" />
      <span>채팅하기</span>
    </button>
  );
};

export default ChatButton;
