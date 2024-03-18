import { motion } from "framer-motion";
import Logo from "../Logo.jsx";
import MobileNavLi from "./MobileNavLi.jsx";

import { useNavigate } from "react-router-dom";

import { MdClose } from "react-icons/md";
import GitHubCard from "./GitHubCard.jsx";

const navVariants = {
  initial: { left: -384 },
  open: { left: 0 },
  close: { left: -384 },
};

const blurVariants = {
  initial: { opacity: 0.5 },
  close: { opacity: 0 },
};

const MobileNav = ({ user, setUser, setIsMenuOpened }) => {
  const navigate = useNavigate();
  const handleClickMenuClose = () => setIsMenuOpened(false);
  const handleKeyDownMenuClose = (e) => {
    if (e.key === "Esc") {
      setIsMenuOpened(false);
    }
  };
  const handleLogOut = () => {
    setUser({ user_id: null });
    setIsMenuOpened(false);
    navigate("/");
  };

  return (
    <>
      <motion.div
        variants={blurVariants}
        initial="initial"
        exit="close"
        role="presentation"
        className="absolute left-0 top-0 h-screen w-screen bg-black"
        onClick={handleClickMenuClose}
        onKeyDown={(e) => handleKeyDownMenuClose(e)}
      ></motion.div>
      <motion.nav
        variants={navVariants}
        initial="initial"
        animate="open"
        exit="close"
        className="absolute left-0 w-full sm:w-96 h-screen bg-white grid grid-cols-1 grid-rows-[min-content_1fr_min-content]"
      >
        <div className="flex items-center justify-between p-[22px] border-b-[1px] border-lightGray">
          <Logo />
          <MdClose
            className="text-3xl cursor-pointer"
            onClick={handleClickMenuClose}
          />
        </div>
        <ul className="py-4">
          <MobileNavLi
            handleClickMenuClose={handleClickMenuClose}
            value="카테고리"
            link="/search"
            isExtendable={true}
          />
          {user.user_id ? (
            <>
              <MobileNavLi
                handleClickMenuClose={handleClickMenuClose}
                value="채팅하기"
                link="/"
                isExtendable={false}
              />
              <MobileNavLi
                handleClickMenuClose={handleClickMenuClose}
                value="판매하기"
                link="/product/register"
                isExtendable={false}
              />
              <MobileNavLi
                handleClickMenuClose={handleClickMenuClose}
                value="마이 페이지"
                link={`/user/${user.user_id}`}
                isExtendable={false}
              />
              <li className="px-4 py-2">
                <button onClick={handleLogOut}>로그아웃</button>
              </li>
            </>
          ) : (
            <MobileNavLi
              handleClickMenuClose={handleClickMenuClose}
              value="로그인"
              link="/sign?form=in"
              isExtendable={false}
            />
          )}
        </ul>
        <div className="flex items-center justify-between p-[22px] border-t-[1px] border-lightGray">
          <GitHubCard name="강민재" link="https://github.com/mosum201" />
          <GitHubCard name="송은우" link="https://github.com/Eunoos" />
          <GitHubCard name="이재형" link="https://github.com/jaehyeong21" />
          <GitHubCard name="이철민" link="https://github.com/cheolmin99" />
          <GitHubCard name="정홍천" link="https://github.com/gugonggu" />
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNav;
