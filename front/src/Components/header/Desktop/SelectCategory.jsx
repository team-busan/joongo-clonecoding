import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

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
      className="absolute left-0 top-[62px] w-64 shadow bg-white"
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="relative">
        <ul>
          {mainCategories.map((category, index) => {
            return (
              <li
                key={index}
                onMouseEnter={() => setSubcategoryName(category)}
                className="hover:bg-mediumGray first:mt-6 last:mb-6"
              >
                <Link
                  className="block pl-4 py-2 w-full"
                  to={`/search?category=${category}`}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="absolute top-[-25px] right-[-256px] w-64 shadow bg-lightGray">
          <ul>
            {subCategoryList.map((category, index) => {
              return (
                <li
                  key={index}
                  className="hover:bg-mediumGray first:mt-6 last:mb-6"
                >
                  <Link
                    className="block pl-4 py-2 font-medium"
                    to={`/search?category=${category}`}
                  >
                    {category}
                  </Link>
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
