import CategoryButton from "./header/CategoryButton";
import Logo from "./header/Logo";
import SearchBox from "./header/SearchBox";
import ChatButton from "./header/ChatButton";
import SellButton from "./header/SellButton";
import MyPageButton from "./header/MyPageButton";
import LoginOrSignUpButton from "./header/LoginOrSignUpButton";

import { useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

const headerVariants = {
  top: {
    boxShadow: "none",
  },
  scroll: {
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  },
};

const Header = () => {
  const headerAnimation = useAnimation();
  const { scrollY } = useScroll();
  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        headerAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
      }
    });
  }, []);

  const isLoggedIn = true;

  return (
    <motion.header
      variants={headerVariants}
      animate={headerAnimation}
      initial="top"
      className="fixed top-0 flex justify-center w-full bg-white border-b-[1px] border-mediumGray"
    >
      <div className="w-[1280px] h-[80px] relative flex items-center justify-between ">
        <CategoryButton />
        <Logo />
        <SearchBox />
        <ChatButton />
        <SellButton />
        {isLoggedIn ? <MyPageButton /> : <LoginOrSignUpButton />}
      </div>
    </motion.header>
  );
};

export default Header;
