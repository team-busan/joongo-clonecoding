import { Link } from "react-router-dom";

const MobileNavSubLi = ({ handleClickMenuClose, category, link }) => {
  return (
    <li className="ml-2 pl-4 py-2 w-full">
      <Link to={link} className="block w-full" onClick={handleClickMenuClose}>
        {"- " + category}
      </Link>
    </li>
  );
};

export default MobileNavSubLi;
