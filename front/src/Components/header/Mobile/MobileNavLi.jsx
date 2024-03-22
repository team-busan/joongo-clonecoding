import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

import MobileNavMainLi from "./MobileNavMainLi.jsx";

import { mainCategories } from "../../../Constants/Categories.js";

const MobileNavLi = ({ handleClickMenuClose, value, link, isExtendable }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="px-4 py-2">
      <div className="grid grid-cols-[1fr_min-content]">
        <Link to={link} onClick={handleClickMenuClose}>
          {value}
        </Link>
        {isExtendable && (
          <motion.div
            onClick={() => setOpen((prev) => !prev)}
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: open ? 180 : 0 }}
          >
            <FaAngleDown className="text-lg cursor-pointer" />
          </motion.div>
        )}
      </div>
      <ul className="py-4">
        {open && (
          <>
            {mainCategories.map((category, index) => {
              return (
                <MobileNavMainLi
                  handleClickMenuClose={handleClickMenuClose}
                  key={index}
                  value={category}
                  link={`/search?category=${category}`}
                />
              );
            })}
          </>
        )}
      </ul>
    </li>
  );
};

export default MobileNavLi;
