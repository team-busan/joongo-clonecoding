import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-primary text-4xl">
      <h2 className="font-semibold max-[320px]:text-xl max-xl:text-2xl">
        중고는 가격을 찢어
      </h2>
    </Link>
  );
};

export default Logo;
