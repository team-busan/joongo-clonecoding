import { useState } from "react";
import { MdMenu } from "react-icons/md";
import SelectCategory from "./SelectCategory";

import { motion } from "framer-motion";

const CategoryButton = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="relative">
      <motion.button
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className="bg-primary px-3.5 flex items-center text-white gap-2 h-11 rounded-lg"
      >
        <MdMenu className="text-lg" />
        <span>카테고리</span>
      </motion.button>
      <div
        className="absolute w-28 h-5"
        onMouseEnter={() => setIsMouseOver(true)}
      ></div>
      {isMouseOver && <SelectCategory setIsMouseOver={setIsMouseOver} />}
    </div>
  );
};

export default CategoryButton;
