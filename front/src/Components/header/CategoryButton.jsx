import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import SelectCategory from "./SelectCategory";

const CategoryButton = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mouseYPos, setMouseYPos] = useState(0);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMouseYPos(e.clientY);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <>
      <div
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => {
          if (mouseYPos < 60 || mouseYPos > 65) {
            setIsMouseOver(false);
          }
        }}
        className="bg-primary px-3.5 flex items-center text-white gap-2 h-11 rounded-lg cursor-pointer opacity-90 hover:opacity-100"
      >
        <MdMenu />
        <span>카테고리</span>
      </div>
      {isMouseOver && <SelectCategory />}
    </>
  );
};

export default CategoryButton;
