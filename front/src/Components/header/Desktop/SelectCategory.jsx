import React, { useEffect, useState } from "react";

import {
  mainCategories,
  clothSubCategories,
  electronicsSubCategories,
  furnitureSubCategories,
  livingSubCategories,
  hobbySubCategories,
} from "../../../Constants/Categories";

const SelectCategory = ({ setIsMouseOver }) => {
  const [subCategoryName, setSubcategoryName] = useState(null);
  const [subCategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    if (subCategoryName === "의류") {
      setSubCategoryList(clothSubCategories);
    } else if (subCategoryName === "전자기기") {
      setSubCategoryList(electronicsSubCategories);
    } else if (subCategoryName === "가구/인테리어") {
      setSubCategoryList(furnitureSubCategories);
    } else if (subCategoryName === "리빙/생활") {
      setSubCategoryList(livingSubCategories);
    } else if (subCategoryName === "반려동물/취미") {
      setSubCategoryList(hobbySubCategories);
    }
  }, [subCategoryName]);

  return (
    <div
      className="absolute left-0 top-[64px] w-64 shadow bg-white"
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="relative">
        <ul>
          {mainCategories.map((category, index) => {
            return (
              <li
                key={index}
                onMouseEnter={() => setSubcategoryName(category)}
                className="px-4 py-2 cursor-pointer hover:bg-mediumGray first:mt-6 last:mb-6"
              >
                {category}
              </li>
            );
          })}
        </ul>
        <div className="absolute top-[-25px] right-[-257px] w-64 shadow bg-lightGray">
          <ul>
            {subCategoryList.map((category, index) => {
              return (
                <li
                  key={index}
                  className="px-4 py-2 font-medium cursor-pointer hover:bg-mediumGray first:mt-6 last:mb-6"
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
