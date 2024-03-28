import { FaArrowUp, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F7F9FA] w-full p-10 flex flex-col gap-4 relative tablet:flex-row tablet:p-20">
      <div className="flex flex-col min-w-[290px] items-center tablet:items-start">
        <h1 className="font-[36px] font-bold text-primary">
          중고는 가격을 찢어
        </h1>
        <p className="mt-12">(주)중고는 가격을 찢어</p>
        <p>대표 : 팀-부산</p>
        <p>호스팅 제공자 : AWS</p>
      </div>
      <div className="flex flex-col gap-4 w-full justify-around tablet:flex-row">
        <div className="flex flex-col items-center gap-4 [&>a]:flex [&>a]:flex-row [&>a]:items-center ">
          <h1 className="font-bold mb-5 font-[24px] tablet:font-[24px]">
            GitHub
          </h1>
          <Link to="https://github.com/gugonggu" target="_blank">
            <FaGithub className="mr-3" />
            정홍천
          </Link>
          <Link to="https://github.com/mosum201" target="_blank">
            <FaGithub className="mr-3" />
            강민재
          </Link>
          <Link to="https://github.com/jaehyeong21" target="_blank">
            <FaGithub className="mr-3" />
            이재형
          </Link>
          <Link to="https://github.com/cheolmin99" target="_blank">
            <FaGithub className="mr-3" />
            이철민
          </Link>
          <Link to="https://github.com/Eunoos" target="_blank">
            <FaGithub className="mr-3" />
            송은우
          </Link>
        </div>
        <div className=" flex flex-col items-center gap-4 ">
          <h1 className="font-bold mb-5">Blog</h1>
          <Link to="https://gugonggu.tistory.com/" target="_blank">
            정홍천
          </Link>
          <Link to="" target="_blank">
            강민재
          </Link>
          <Link
            to="https://geode-alligator-3d5.notion.site/front-end-2cc2e21cd596424ba57206cc607b5eed"
            target="_blank"
          >
            이재형
          </Link>
          <Link to="" target="_blank">
            이철민
          </Link>
          <Link to="https://noos.tistory.com/" target="_blank">
            송은우
          </Link>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <h1 className="font-bold mb-5">Email</h1>
          <p>jhc5317@gmail.com</p>
          <p>mosum201@gmail.com</p>
          <p>ftko6252@naver.com</p>
          <p>cjfals8570@naver.com</p>
          <p>dmsdn18@gmail.com</p>
        </div>
      </div>

      <button
        className="w-[200px] h-[50px] flex-row items-center justify-center absolute bottom-0 right-0 hidden tablet:flex"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <p className="font-[24px]">Scroll to Top</p>
        <FaArrowUp className="ml-5" />
      </button>
    </div>
  );
};

export default Footer;