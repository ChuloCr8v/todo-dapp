import { FaLinkedin, FaSpider } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="opacity-60 left-0 flex items-center justify-center gap-2 w-full p-2">
      <p className="">
        Copyright{" "}
        <a
          href="https://www.cleverdeveloper360.vercel.app"
          className="text-teal-500 hover:text-white duration-150"
        >
          @Clever Developer
        </a>{" "}
        {new Date().getFullYear()}
      </p>
      <span className="">|</span>
      <div className="flex items-center gap-2">
        <a
          href="https://www.linkedin.com/"
          className="hover:text-teal-500 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wwww.twitter.com/"
          className="hover:text-teal-500 cursor-pointer"
        >
          <FaX />
        </a>
        <a
          href="https://www.twitter.com/"
          className="hover:text-teal-500 cursor-pointer"
        >
          <FaSpider />
        </a>
      </div>
    </div>
  );
};

export default Footer;
