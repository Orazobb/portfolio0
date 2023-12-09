import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Profil from "../assets/galaxy.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out-quart", delay: 0, duration: 750 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome To <span className="text-red-500">My Website</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          quas, ex amet provident corrupti id eius esse! Nesciunt eos, rerum,
          quasi necessitatibus saepe ullam vero minus asperiores exercitationem,
          animi velit.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="https://github.com/" className=" rounded-full glow p-2">
                <FaGithub className="text-[28px]" />
              </a>
              <a href="https://github.com/" className=" rounded-full glow p-2">
                <FaXTwitter className="text-[28px]" />
              </a>
              <a href="https://github.com/" className=" rounded-full glow p-2">
                <IoLogoYoutube className="text-[28px]" />
              </a>
              <a href="https://github.com/" className=" rounded-full glow p-2">
                <FaLinkedin className="text-[28px]" />
              </a>
              <a href="https://github.com/" className=" rounded-full glow p-2">
                <FaInstagram className="text-[28px]" />
              </a>
              <a href="https://github.com/" className=" rounded-full glow p-2">
                <FaMedium className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Profil}
        alt="pp"
        width={290}
        height={290}
        className="rounded-xl border-2 p-1 border-red-500 img_glow"
      />
    </div>
  );
};

export default Banner;
