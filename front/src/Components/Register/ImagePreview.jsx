import { MdClose } from "react-icons/md";

const ImagePreview = ({ src, handleDelete }) => {
  return (
    <div className="relative">
      <img
        className="w-20 h-20 rounded-lg object-cover"
        src={src}
        alt="업로드 이미지 미리보기"
      />
      <div
        onClick={() => handleDelete(src)}
        onKeyDown={() => handleDelete(src)}
        role="presentation"
        className="absolute right-1 top-1 bg-white border-[1px] border-black rounded-full flex justify-center items-center cursor-pointer"
      >
        <MdClose />
      </div>
    </div>
  );
};

export default ImagePreview;
