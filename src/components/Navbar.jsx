import { logo, star } from "@/assets";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";
import CustomButton from "./generals/CustomButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 pb-2 text-black pt-11  w-full z-[99999] fixed">
      <div className="container relative sm:max-w-[80%] w-full  mx-auto px-4 flex justify-between items-center">


        <div className="lg:hidden lg:static absolute  right-2 z-50">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex justify-start items-center w-full ">
          <div className="max-w-[200px]">
            <Link to="home" spy={true} smooth={true} className="cursor-pointer">
              <Image
                src={logo}
                alt="logo"
                width={500}
                height={500}
                className="max-w-[150px] w-full"
              />
            </Link>
          </div>

          <ul
            className={`lg:flex lg:flex-row flex-col lg:h-full h-[100vh] lg:pt-0 pt-16 px-4 items-start ${isMenuOpen ? "flex" : "hidden"
              } font-medium lg:max-w-[500px] max-w-[300px] text-center pt-20 w-full lg:space-x-4 lg:space-y-0 space-y-4 lg:justify-end items-center xl:justify-start lg:items-center lg:static fixed top-0 right-0 text-black md:text-black bg-white/90 lg:bg-transparent `}
          >
            <li className="max-w-[300px] w-full">
              <Link
                to="home"
                spy={true}
                smooth={true}
                activeClass="text-[#FF5555]"
                className={`cursor-pointer opacity-100 hover:text-webRed-0 ${activeLink === "home" ? "font-extrabold" : ""
                  }`}
                onSetActive={() => setActiveLink("home")}
              >
                Home
              </Link>

            </li>

            <li className="max-w-[300px] w-full">
              <Link
                to="features"
                spy={true}
                smooth={true}
                activeClass="text-[#FF5555]"
                className={`cursor-pointer opacity-100 hover:text-webRed-0 ${activeLink === "features" ? "font-extrabold" : ""
                  }`}
                onSetActive={() => setActiveLink("features")}
              >
                Features
              </Link>

            </li>
            <li className="max-w-[300px] w-full relative group">
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                activeClass="text-[#FF5555]"
                className={`cursor-pointer opacity-100 hover:text-webRed-0 ${activeLink === "aboutUs" ? "font-extrabold" : ""
                  }`}
                onSetActive={() => setActiveLink("pricing")}
              >
                <div className="flex gap-2 items-center justify-center">
                  <span> About us </span>
                </div>
              </Link>

            </li>
            <li className="max-w-[300px] w-full">
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                activeClass="text-[#FF5555]"
                className={`cursor-pointer opacity-100 hover:text-webRed-0 ${
                  activeLink === "pricing" ? "" : ""
                }`}
                onSetActive={() => setActiveLink("pricing")}
              >
                Pricing
              </Link>
              {activeLink === "pricing" && (
                <hr className="border-primaryColor-0 w-[30%] mx-auto  " />
              )}
            <div className="block lg:hidden py-20 cursor-pointer ">
              <CustomButton text="Download" to={"/"} />
            </div>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block mb-3 cursor-pointer ">
          <CustomButton text="Download" to={"/"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
