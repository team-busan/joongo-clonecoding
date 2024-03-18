import { useState } from "react";
import Logo from "../Logo";
import MobileNav from "./MobileNav";

import { MdMenu, MdSearch } from "react-icons/md";
import SearchBox from "../SearchBox";

import { AnimatePresence } from "framer-motion";

const MobileHeader = ({ user, setUser }) => {
  const [isSearchBoxOpened, setIsSearchBoxOpen] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <div className="relative w-full mx-4 h-[80px] flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <MdMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsMenuOpened(true)}
          />
          <Logo />
        </div>
        <MdSearch
          className="text-4xl cursor-pointer"
          onClick={() => setIsSearchBoxOpen(true)}
        />
        {isSearchBoxOpened && (
          <SearchBox setIsSearchBoxOpen={setIsSearchBoxOpen} />
        )}
      </div>
      <AnimatePresence>
        {isMenuOpened && (
          <MobileNav
            user={user}
            setUser={setUser}
            setIsMenuOpened={setIsMenuOpened}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
