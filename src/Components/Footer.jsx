import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
const Footer = () => {
  const handleHome = () => {
    window.open("/", "_self");
  };

  const handleAbout = () => {
    window.open("/about", "_self");
  };

  const handleWork = () => {
    window.open("/work", "_self");
  };

  const handleContact = () => {
    window.open("/contact", "_self");
  };

  return (
    <>
      <section className="bg-[#1b263b] pt-5 px-5 md:px-10">
        <section className="md:flex md:justify-between items-center md:py-5">
          <div className="text-white pt-5 md:pt-0">
            <p className="text-[1.7rem] font-semibold md:hidden">
              I'm Available for Freelance Projects
            </p>
            <p className="text-[1.7rem] font-semibold md:text-[2.3rem] hidden md:block">
              I'm Available for Freelance <br /> Projects
            </p>
            <p className="mt-8">
              ꜰᴇᴇʟ ꜰʀᴇᴇ ᴛᴏ ɪɴɪᴛɪᴀᴛᴇ ᴀ ᴘʀᴏᴊᴇᴄᴛ ᴀɴᴅ ʟᴇᴛ'ꜱ ᴇxᴘʟᴏʀᴇ ʜᴏᴡ ᴡᴇ ᴄᴀɴ
              ᴄᴏʟʟᴀʙᴏʀᴀᴛᴇ.
            </p>
          </div>

          <div className="text-white pt-5 md:pt-0">
            <p className="text-[1.1rem] hover:cursor-pointer text-blue-500 md:text-[1.2rem]">
              ahmadbilal71al@gmail.com
            </p>
            <p className="text-[1.1rem] hover:cursor-pointer ">+92 3261370697</p>
          </div>
        </section>

        <div className="border-t border-t-white mt-10"></div>

        <div className="text-white bg-[#1b263b] md:flex md:justify-between md:items-center py-5">
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

          <ul className="flex gap-5 mt-5">
            <a href="https://github.com/AhmadBilal-WebDev" target="_blank">
              <FaGithub className="text-[1.3rem] md:text-[1.4rem]" />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-bilal-76653535a/"
              target="_blank"
            >
              <FaLinkedinIn className="text-[1.3rem] md:text-[1.4rem]" />
            </a>

            <a
              href="https://web.facebook.com/profile.php?id=100091266896612"
              target="_blank"
            >
              <GrFacebookOption className="text-[1.4rem] md:text-[1.5rem]" />
            </a>
          </ul>
        </div>

        <div className="border-t border-t-white"></div>

        <p className="text-center text-white py-7">
          © 2025 Ahmad Bilal | Web Developer
        </p>
      </section>
    </>
  );
};

export default Footer;
