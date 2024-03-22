import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export default function SearchFilter({setSelectedCategory, selectedCategory}) {
  const [categoryBtn, setCategoryBtn] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategoryBtn = () => {
    setCategoryBtn(!categoryBtn);
    setExpandedCategory(null);
  };

  const toggleSubcategories = (category) => {
    setExpandedCategory(category === expandedCategory ? null : category);
    setSelectedCategory({ main: category, sub: "" });
  };

  const selectSubcategory = (subcategory) => {
    setSelectedCategory({ ...selectedCategory, sub: subcategory });
  };

  const onType = (type) => {
    if(type === 0){
      setSelectedCategory({...selectedCategory, type : 0})
    }else{
      setSelectedCategory({...selectedCategory, type : 1})
    }
  }

  const onCancel = () => {
    setSelectedCategory({main : "", sub : "", type : ""})
  }

  const categories = [
    { id: 1, name: '의류', subcategories: ['여성의류', '남성의류', '유아동', '패션잡화', '악세서리'] },
    { id: 2, name: '전자기기', subcategories: ['가전제품', '모바일/태블릿', '노트북/PC', '카메라/캠코더', '부품'] },
    { id: 3, name: '가구/인테리어', subcategories: ['침실가구', '거실가구', '주방가구', '인테리어소품', '기타가구'] },
    { id: 4, name: '리빙/생활', subcategories: ['주방용품', '욕실용품', '청소/세탁용품', '기타생활용품', '차량용품'] },
    { id: 5, name: '반려동물/취미', subcategories: ['반려동물용품', '음악', '게임', '스포츠', '도서/음반/문구'] },
  ];

  return (
    <table className="border-2 border-collapse w-full">
      <tbody>
        <tr>
          <th className="flex items-center bg-gray-200 p-2 font-normal">
            카테고리
            <button onClick={toggleCategoryBtn}>
              {categoryBtn ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
            </button>
          </th>
          <td className="border-b border-gray-200 p-2">
            전체 {selectedCategory.main && `> ${selectedCategory.main}`} {selectedCategory.sub && `> ${selectedCategory.sub}`}
          </td>
        </tr>
        {categoryBtn && categories.map(category => (
          <tr key={category.id}>
            <th className="bg-gray-200"></th>
            <td colSpan="2" className="p-2 border-b border-gray-200">
              <ul className="flex">
                {expandedCategory === category.name ? (
                  category.subcategories.map(subcategory => (
                    <button
                      key={subcategory}
                      className={`mr-10 text-gray-500 ${selectedCategory.main === category.name && selectedCategory.sub === subcategory ? 'font-bold' : ''}`}
                      onClick={() => selectSubcategory(subcategory)}>
                      {subcategory}
                    </button>
                  ))
                ) : (
                  <button onClick={() => toggleSubcategories(category.name)} className={`mr-10 text-gray-500 ${selectedCategory.main === category.name ? 'font-bold' : ''}`}>{category.name}</button>
                )}
              </ul>
            </td>
          </tr>
        ))}
        <tr>
          <th className="flex items-center bg-gray-200 p-2 font-normal h-16 border-b border-white">가격</th>
          <td className="border-b border-gray-200 p-2 h-16">
            <input type="text" className="border border-gray-200 rounded-md px-2 py-1 mr-2" placeholder="최소가격" />
            <span>~</span>
            <input type="text" className="border border-gray-200 rounded-md px-2 py-1 ml-2" placeholder="최대가격" />
            <button className="bg-primary text-white rounded-md px-4 py-1 ml-2">적용</button>
          </td>
        </tr>
        <tr>
          <th className="flex items-center bg-gray-200 p-2 font-normal">옵션</th>
          <td className="border-b border-gray-200 p-2">
            <label className="inline-flex items-center mr-4">
              <input 
                type="radio"
                name="productState"
                className="form-radio text-gray-400"
                onChange = {() => onType(0)}
              />
              <span className="ml-2">중고상품</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio"
                name="productState"
                className="form-radio text-gray-400"
                onChange ={() => onType(1)}
              />
              <span className="ml-2">새상품</span>
            </label>
          </td>
        </tr>
        <tr>
          <th className="flex items-center bg-gray-200 p-2 font-normal">선택한 필터</th>
          <td className="flex-row border-b border-gray-400 p-2 items-center">
            {selectedCategory.sub ? `${selectedCategory.main}/${selectedCategory.sub}` : selectedCategory.main ? `${selectedCategory.main}` : ''}
            {selectedCategory.type === 0 ? ` 중고상품` : selectedCategory.type === 1 ? ` 새상품` : ''}
            <button onClick = {() => onCancel()} className = "">
              <IoIosClose className="text-xl text-center"/>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
