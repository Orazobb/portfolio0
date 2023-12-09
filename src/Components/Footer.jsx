import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <footer id="Footer" className="bg-slate-800 text-white lg:px-48 py-20 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl text-red-500 py-2 font-semibold">Logo</span>
          <p className="text-[16px] my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            nobis dolore magnam assumenda quod aliquam dolorem eligendi odit
            laudantium.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] text-red-500 py-2 font-semibold">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web Desing</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">SEO</li>
            <li className="my-2">E-commerce</li>
            <li className="my-2">Embedded Systems</li>
            <li className="my-2">PCB Design</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] text-red-500 py-2 font-semibold">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: mymail@example.com</p>
          <p className="text-[16px] my-4">Phone: +90</p>
        </div>
        <div>
          <h2 className="text-[22px] text-red-500 py-2 font-semibold">
            Follow Me
          </h2>
          {/* <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">*/}
          <div className="flex space-x-2">
            <a href="https://github.com/" className=" rounded-full glow p-2">
              <FaGithub className="" />
            </a>
            <a href="https://github.com/" className=" rounded-full glow p-2">
              <FaXTwitter className="" />
            </a>
            <a href="https://github.com/" className=" rounded-full glow p-2">
              <IoLogoYoutube className="" />
            </a>
            <a href="https://github.com/" className=" rounded-full glow p-2">
              <FaLinkedin className="" />
            </a>
            <a href="https://github.com/" className=" rounded-full glow p-2">
              <FaInstagram className="" />
            </a>
            <a href="https://github.com/" className=" rounded-full glow p-2">
              <FaMedium className="" />
            </a>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </footer>
  );
};

export default Footer;
