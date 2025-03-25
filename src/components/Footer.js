import { SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import { GITHUB_URL, LINKEDIN_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div className=" flex flex-wrap shadow-lg gap-2 justify-center items-center bg-[#00008b] dark:bg-[#171721] p-2 text-center">
      <p className="text-white font-serif text-sm sm:text-md">
        Created by &copy; Hariharen | 2025{" "}
      </p>
      <div className="flex gap-2">
        <Link to={GITHUB_URL} target="_blank">
          <SiGithub className="text-white cursor-pointer" />
        </Link>
        <Link to={LINKEDIN_URL} target="_blank">
          <SiLinkedin className="text-cyan-400 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
