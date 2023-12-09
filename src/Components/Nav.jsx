import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
        <ul className="text-center text-xl p-20">
          <Link>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Services
            </li>
          </Link>
          <Link to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Projects
            </li>
          </Link>
          <Link to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1 ">
          <span className="text-3xl font-bold ">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10 items-center">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="Home" spy={true} smooth={true}>
                <li className="hover:text-red-600 transition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="About" spy={true} smooth={true}>
                <li className="hover:text-red-600 transition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link to="Services" spy={true} smooth={true}>
                <li className="hover:text-red-600 transition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer">
                  Services
                </li>
              </Link>
              <Link to="Projects" spy={true} smooth={true}>
                <li className="hover:text-red-600 transition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link to="Contact" spy={true} smooth={true}>
                <li className="hover:text-red-600 transition border-b-2 border-slate-900 hover:border-red-600 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
