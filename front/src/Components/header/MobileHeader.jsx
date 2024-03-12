import { useState } from "react";
import Logo from "./Logo";
import { MdMenu, MdSearch } from "react-icons/md";
import SearchBox from "./SearchBox";

const MobileHeader = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  return (
    <div className="relative w-full mx-4 h-[80px] flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <MdMenu className="text-3xl cursor-pointer" />
        <Logo />
      </div>
      <MdSearch
        className="text-4xl cursor-pointer"
        onClick={() => setIsSearchClicked(true)}
      />
      {isSearchClicked && <SearchBox />}
    </div>
  );
};

export default MobileHeader;
