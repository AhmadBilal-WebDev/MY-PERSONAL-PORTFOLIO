import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState("");
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContact = () => {
    window.open("/contact", "_self");
  };

  const handleAbout = () => {
    window.open("/about", "_self");
  };

  const handleHome = () => {
    window.open("/", "_self");
  };

  const handleWork = () => {
    window.open("/work", "_self");
  };

  return (
    <>
      <section className="bg-[#e0e1dd]">
        <div className="h-[5.2rem] flex justify-between items-center px-5 md:hidden">
          <p className="text-[1.5rem]">ᴀʜᴍᴀᴅ ʙɪʟᴀʟ</p>
          <button className="border rounded-xs p-[0.400rem] hover:cursor-pointer">
            {!isOpen ? (
              <IoMdMenu className="text-[1.5rem]" onClick={handleMenu} />
            ) : (
              <IoCloseSharp className="text-[1.5rem]" onClick={handleMenu} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col justify-center items-center gap-5 bg-white py-3 rounded-b-lg z-50">
              <p
                className="hover:cursor-pointer text-[1.1rem] font-light"
                onClick={handleHome}
              >
                Home
              </p>
              <p
                className="hover:cursor-pointer text-[1.1rem] font-light"
                onClick={handleAbout}
              >
                About
              </p>
              <p
                className="hover:cursor-pointer text-[1.1rem] font-light"
                onClick={handleWork}
              >
                Work
              </p>
              <p
                className="hover:cursor-pointer text-[1.1rem] font-light"
                onClick={handleContact}
              >
                Contact
              </p>
            </ul>
          </div>
        )}

        <div className="h-[5.2rem] justify-between items-center px-5 hidden md:flex">
          <p className="text-[1.5rem]">ᴀʜᴍᴀᴅ ʙɪʟᴀʟ</p>

          <ul className="flex gap-10">
            <p
              className="hover:cursor-pointer text-[1.1rem] font-semibold"
              onClick={handleHome}
            >
              Home
            </p>
            <p
              className="hover:cursor-pointer text-[1.1rem] font-semibold"
              onClick={handleAbout}
            >
              About
            </p>
            <p
              className="hover:cursor-pointer text-[1.1rem] font-semibold"
              onClick={handleWork}
            >
              Work
            </p>
            <p
              className="hover:cursor-pointer text-[1.1rem] font-semibold"
              onClick={handleContact}
            >
              Contact
            </p>
          </ul>

          <ul className="flex items-center gap-5">
            <a href="https://github.com/AhmadBilal-WebDev" target="_blank">
              <FaGithub className="text-[1.4rem]" />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-bilal-76653535a/"
              target="_blank"
            >
              <FaLinkedinIn className="text-[1.4rem]" />
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=100091266896612"
              target="_blank"
            >
              <GrFacebookOption className="text-[1.5rem]" />
            </a>
          </ul>
        </div>

        <div className="border-t border-t-white"></div>
      </section>
    </>
  );
};

export default Header;
