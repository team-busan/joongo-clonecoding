import React, { useEffect, useState } from "react";

const mainCategorys = [
  "의류",
  "전자기기",
  "가구/인테리어",
  "리빙/생활",
  "반려동물/취미",
];

const clothSubCategorys = [
  "여성의류",
  "남성의류",
  "유아동",
  "패션잡화",
  "액세서리",
];
const electronicsSubCategorys = [
  "가전제품",
  "모바일/태블릿",
  "노트북/PC",
  "카메라/캠코더",
  "부품",
];
const furnitureSubCategorys = [
  "침실가구",
  "거실가구",
  "주방가구",
  "인테리어소품",
  "기타가구",
];
const livingSubCategorys = [
  "주방용품",
  "욕실용품",
  "청소/세탁용품",
  "기타생활용품",
  "차량용품",
];
const hobbySubCategorys = [
  "반려동물용품",
  "음악",
  "게임",
  "스포츠",
  "도서/음반/문구",
];

const SelectCategory = ({ setIsMouseOver }) => {
  const [subCategoryName, setSubcategoryName] = useState(null);
  const [subCategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    if (subCategoryName === "의류") {
      setSubCategoryList(clothSubCategorys);
    } else if (subCategoryName === "전자기기") {
      setSubCategoryList(electronicsSubCategorys);
    } else if (subCategoryName === "가구/인테리어") {
      setSubCategoryList(furnitureSubCategorys);
    } else if (subCategoryName === "리빙/생활") {
      setSubCategoryList(livingSubCategorys);
    } else if (subCategoryName === "반려동물/취미") {
      setSubCategoryList(hobbySubCategorys);
    }
  }, [subCategoryName]);

  return (
    <div
      className="absolute left-0 top-[64px] w-64 shadow bg-white"
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="relative">
        <ul>
          {mainCategorys.map((category, index) => {
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
