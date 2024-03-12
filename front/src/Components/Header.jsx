import { Link } from "react-router-dom";
import CategoryButton from "./header/CategoryButton";
import SearchBox from "./header/SearchBox";

const Header = () => {
  return (
    <header className="w-[1280px] h-[80px] flex items-center">
      <CategoryButton />
      <Link to="/" className="text-primary text-4xl">
        중고는 가격을 찢어
      </Link>
      <SearchBox />
    </header>
  );
};

export default Header;