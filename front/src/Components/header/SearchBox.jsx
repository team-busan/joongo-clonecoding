import { useState, useRef } from "react";
import useDetectClose from "../../Hooks/useDetectClose";

import { MdSearch, MdClose } from "react-icons/md";

import SearchLogModal from "./SearchLogModal";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchBox = useRef(null);
  const [isSearchBoxClicked, setIsSearchBoxClicked] = useDetectClose(
    searchBox,
    false
  );

  const onCloseClick = () => {
    setSearchValue("");
  };

  return (
    <div className="relative">
      <MdSearch className="absolute text-2xl cursor-pointer top-1/2 -translate-y-1/2 left-4 " />
      <input
        ref={searchBox}
        type="text"
        placeholder="어떤 상품을 찾으시나요? 직거래, 택배상품 모두 검색"
        className="pl-14 pr-4 h-10 w-[500px] rounded bg-lightGray outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        onClick={() => setIsSearchBoxClicked((prev) => !prev)}
      />
      {searchValue && (
        <button
          onClick={onCloseClick}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-mediumGray rounded-full w-5 y-5 flex items-center justify-center"
        >
          <MdClose className="text-lg text-lightGray" />
        </button>
      )}
      {isSearchBoxClicked && <SearchLogModal />}
    </div>
  );
};

export default SearchBox;
