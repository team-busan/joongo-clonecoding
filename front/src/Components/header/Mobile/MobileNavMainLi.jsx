import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MobileNavSubLi from "./MobileNavSubLi.jsx";

import { FaAngleDown } from "react-icons/fa6";

import {
  clothSubCategories,
  electronicsSubCategories,
  furnitureSubCategories,
  livingSubCategories,
  hobbySubCategories,
} from "../../../Constants/Categories.js";

const MobileNavMainLi = ({ handleClickMenuClose, value, link }) => {
  const [open, setOpen] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (value === "의류") {
      setSubCategories(clothSubCategories);
    } else if (value === "전자기기") {
      setSubCategories(electronicsSubCategories);
    } else if (value === "가구/인테리어") {
      setSubCategories(furnitureSubCategories);
    } else if (value === "리빙/생활") {
      setSubCategories(livingSubCategories);
    } else if (value === "반려동물/취미") {
      setSubCategories(hobbySubCategories);
    }
  }, []);

  return (
    <li className="flex flex-col gap-2 ml-2 pl-4 py-2">
      <div className="grid grid-cols-[1fr_min-content]">
        <Link to={link} onClick={handleClickMenuClose}>
          {"- " + value}
        </Link>
        <motion.div
          onClick={() => setOpen((prev) => !prev)}
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: open ? 180 : 0 }}
        >
          <FaAngleDown className="text-lg cursor-pointer" />
        </motion.div>
      </div>
      <ul>
        {open &&
          subCategories.map((category, index) => {
            return (
              <MobileNavSubLi
                key={index}
                handleClickMenuClose={handleClickMenuClose}
                category={category}
                link={`/search?category=${category}`}
              />
            );
          })}
      </ul>
    </li>
  );
};

export default MobileNavMainLi;
