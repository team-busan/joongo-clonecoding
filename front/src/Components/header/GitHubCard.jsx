import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa6";

const GitHubCard = ({ name, link }) => {
  return (
    <Link to={link} className="flex flex-col justify-center items-center">
      <FaGithub />
      {name}
    </Link>
  );
};

export default GitHubCard;
