import DesktopHeader from "./header/Desktop/DesktopHeader";
import MobileHeader from "./header/Mobile/MobileHeader";

import { useState, useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

import { useRecoilState } from "recoil";
import { userState } from "../atoms";

const headerVariants = {
  top: {
    boxShadow: "0 0 0 0 rgb(0 0 0)",
  },
  scroll: {
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  },
};

const Header = () => {
  const [user, setUser] = useRecoilState(userState);
  const headerAnimation = useAnimation();
  const { scrollY } = useScroll();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        headerAnimation.start("scroll");
      } else {
        headerAnimation.start("top");
      }
    });
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      variants={headerVariants}
      animate={headerAnimation}
      initial="top"
      className="fixed z-10 top-0 flex justify-center w-full bg-white border-b-[1px] border-mediumGray"
    >
      {width > 1024 ? (
        <DesktopHeader user={user} />
      ) : (
        <MobileHeader user={user} setUser={setUser} />
      )}
    </motion.header>
  );
};

export default Header;
