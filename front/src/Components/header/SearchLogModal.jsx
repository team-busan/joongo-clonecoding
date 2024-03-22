import { useState } from "react";

import { MdClose } from "react-icons/md";

const onDeleteAllClick = (e) => {
  e.stopPropagation();
};

const SearchLogMap = ({ isProduct, array }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between mb-4">
        <h4>{isProduct ? "최근 검색어" : "최근 가게 검색어"}</h4>
        <button
          onClick={(e) => onDeleteAllClick(e)}
          className="text-mediumGray underline"
        >
          전체삭제
        </button>
      </div>
      {array.length === 0 ? (
        <span className="text-mediumGray">
          {isProduct
            ? "최근 검색어 내역이 없습니다."
            : "최근 가게 검색어 내역이 없습니다."}
        </span>
      ) : (
        <div className="flex gap-2 overflow-x-scroll scrollbar-none">
          {array.map((item, index) => {
            return (
              <div
                key={index}
                className="py-2 px-3 flex items-center gap-1 border-[1px] border-mediumGray rounded-md"
              >
                <span className="max-w-24 truncate cursor-pointer">{item}</span>
                <MdClose className="cursor-pointer" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const SearchLogModal = () => {
  const [productSearchLog, setProductSearchLog] = useState([
    "컴퓨터",
    "노트북",
    "마우스",
    "키보드",
  ]);
  const [sellerSearchLog, setSellerSearchLog] = useState([
    "김밥천국",
    "맥도날드",
    "롯데리아",
    "버거킹",
    "긴텍스트긴텍스트긴텍스트긴텍스트긴텍스트",
  ]);

  return (
    <div className="absolute top-10 left-[-47px] lg:left-0 px-5 pt-14 w-screen lg:w-[400px] xl:w-[500px] h-[472px] bg-white shadow">
      <SearchLogMap isProduct={true} array={productSearchLog} />
      <SearchLogMap isProduct={false} array={sellerSearchLog} />
    </div>
  );
};

export default SearchLogModal;
