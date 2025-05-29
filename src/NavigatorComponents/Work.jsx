import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { TbBusinessplan } from "react-icons/tb";

import img1 from "../Images/AhmadBilal3.jpg";
import pro1 from "../Images/auth-validate.png";
import pro2 from "../Images/qr-code.png";
import pro3 from "../Images/password.png";
import pro4 from "../Images/artical.png";
import pro5 from "../Images/sale-community.png";
import pro6 from "../Images/cleanic-app.png";
import pro7 from "../Images/news.png";
import pro8 from "../Images/plants.png";
import pro9 from "../Images/Faishon.png";
import pro10 from "../Images/mobileapp.png";
import pro11 from "../Images/AhmadBilal2.png";

const work = [
  {
    img: pro5,
    link: "http://sales-dashboard-design-community.vercel.app",
    details: "ꜱᴀʟᴇ ᴅᴀꜱʜʙᴏᴀʀᴅ ᴅᴇꜱɪɢɴ ᴄᴏᴍᴍᴜɴɪᴛʏ.",
    tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
  },

  {
    img: pro1,
    link: "https://auth-validation-livid.vercel.app/",
    details: "ᴜꜱᴇʀ ʟᴏɢɪɴ  & ꜱɪɢɴᴜᴘ ᴀᴜᴛʜᴇɴᴛɪᴄᴀᴛɪᴏɴ",
    tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
  },

  {
    img: pro2,
    link: "https://qrcode-genrator-weld.vercel.app/",
    details: "ɢᴇɴʀᴀᴛᴇ Qʀ ᴄᴏᴅᴇ ᴀɴʏ ᴛᴇxᴛ ᴏʀ ɴᴜᴍʙᴇʀ",
    tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
  },

  {
    img: pro3,
    link: "https://password-genrator-wheat.vercel.app/",
    details: "ɢᴇɴʀᴀᴛᴇ ᴛʜᴇ ꜱᴛʀᴏɴɢᴇꜱᴛ ᴘᴀꜱꜱᴡᴏʀᴅ.",
    tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
  },

  {
    img: pro4,
    link: "https://project-internship-beige.vercel.app/",
    details: "ᴀʀᴛɪᴄᴀʟ ᴘᴀɢᴇ ᴜɪ ᴅᴇꜱɪɢɴ ᴛᴏ ɢᴇᴛ ɪɴ ᴛᴏᴜᴄʜ.",
    tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
  },

  {
    img: pro6,
    link: "https://wix-cleanic-project.vercel.app/",
    details: "ʀᴇᴍᴀʀᴋᴀʟʟʏ ᴄʟᴇᴀɴᴇʀ ᴀᴍᴀᴢɪɴɢʟʏ ꜱɪᴘʟᴇʀ.",
    tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
  },
  {
    img: pro7,
    link: "https://home-nexus-news.vercel.app/",
    details: "ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴇꜱᴛ ʜᴏᴍᴇ-ɴᴇxᴜꜱ-ɴᴇᴡꜱ",
    tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
  },
  {
    img: pro8,
    link: "https://find-perfect-plants.vercel.app/",
    details: "ꜰɪɴᴅꜱ ᴛʜᴇ ᴘᴇʀꜰᴇᴄᴛ ᴘʟᴀɴᴛꜱ ꜰᴏʀ ʏᴏᴜ ʜᴏᴍᴇ",
    tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
  },
  {
    img: pro9,
    link: "https://mejiwoo-fashion-project.vercel.app/",
    details: "ᴍᴇᴊɪᴡᴏᴏ ꜰᴀɪꜱʜᴏɴ",
    tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
  },
  {
    img: pro10,
    link: "https://github.com/AhmadBilal-WebDev/FYP-Mobile-App",
    details: "ꜰʏᴘ ᴘʀᴏᴊᴇᴄᴛ ꜰᴏʀ ᴊᴏʙᴘᴏʀᴛᴀʟ.",
    tecnologies: "ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ & ꜰɪʀᴇʙᴀꜱᴇ",
  },
];

const Work = () => {
  return (
    <>
      <Header />

      <section className="bg-[#e0e1dd] px-5 py-10 md:py-20 md:px-12 md:flex md:justify-between md:items-center md:gap-3">
        <p className="text-2xl text-center md:hidden">
          Explore My Software Enginreering Universe
        </p>

        <div className="flex justify-center mt-5 md:justify-start md:w-[40vw]">
          <img
            src={img1}
            alt=""
            className="rounded-full w-[11rem] h-[17rem] border p-2 object-cover md:w-[18rem] md:h-[30rem]"
          />
        </div>

        <div className="md:flex md:flex-col md:items-center md:w-[60vw]">
          <p className="text-2xl text-center md:text-[2.2rem] hidden md:block">
            Explore My Software Enginreering Universe
          </p>
          <div className="mt-5">
            <p className="text-center">
              ɪ’ᴍ ᴀ ꜱᴏꜰᴛᴡᴀʀᴇ ᴇɴɢɪɴᴇᴇʀ ᴡʜᴏ ʙᴜɪʟᴅꜱ ᴄʟᴇᴀɴ, ꜱᴄᴀʟᴀʙʟᴇ ᴡᴇʙ
              ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ ᴀɴᴅ ᴛᴜʀɴꜱ ɪᴅᴇᴀꜱ ɪɴᴛᴏ ꜰᴜɴᴄᴛɪᴏɴᴀʟ, ᴜꜱᴇʀ-ꜰʀɪᴇɴᴅʟʏ
              ꜱᴏʟᴜᴛɪᴏɴꜱ.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#1b263b] px-5 md:px-12 text-white pt-16 pb-10 flex flex-col justify-center items-center">
        <div>
          <p className="text-center font-semibold text-2xl md:text-[2.1rem]">
            Frontend Projects
          </p>
        </div>

        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-5 py-10 shadpw-2xl">
          {work.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="border rounded-2xl px-3 py-5 bg-[#e0e1dd] flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:scale-105 transition-transform duration-500 md:gap-5">
                <a href={items.link} target="_blank">
                  <img
                    src={items.img}
                    alt=""
                    className="w-[16rem] h-[27rem] object-cover"
                  />
                </a>

                <p className="text-center w-[10rem] text-[1rem]">
                  {items.tecnologies}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#e0e1dd] py-10 px-5 md:px-12 md:py-[8rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
          <div className="flex justify-center lg:w-1/2">
            <img
              src={pro11}
              alt="Future Plans Illustration"
              className="rounded-full w-[8rem] object-cover md:w-[14rem]"
            />
          </div>

          <div>
            <h2 className="font-bold text-gray-800 flex justify-center items-center gap-2">
              <span>
                <TbBusinessplan className="text-2xl md:text-[2.1rem] text-red-800" />
              </span>
              <span className="text-2xl md:text-[2.1rem]">Future Plan</span>
            </h2>

            <p className="text-gray-700 px-[1rem] text-[1rem] leading-relaxed text-justify mt-5">
              ɪɴ ᴛʜᴇ ꜰᴜᴛᴜʀᴇ, ᴍʏ ᴍᴀɪɴ ꜰᴏᴄᴜꜱ ɪꜱ ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴀ ꜱᴋɪʟʟᴇᴅ ꜰᴜʟʟ-ꜱᴛᴀᴄᴋ
              ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴡɪᴛʜ ꜱᴛʀᴏɴɢ ᴇxᴘᴇʀᴛɪꜱᴇ ɪɴ ᴛᴇᴄʜɴᴏʟᴏɢɪᴇꜱ ʟɪᴋᴇ ᴍᴏɴɢᴏᴅʙ,
              ɴᴏᴅᴇ.ᴊꜱ, ᴀɴᴅ ᴍᴏᴅᴇʀɴ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ꜰʀᴀᴍᴇᴡᴏʀᴋꜱ. ɪ ᴀʟꜱᴏ ᴘʟᴀɴ ᴛᴏ ᴇxᴘʟᴏʀᴇ
              ᴍᴏʙɪʟᴇ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ᴛᴏ ʙᴜɪʟᴅ ᴄʀᴏꜱꜱ-ᴘʟᴀᴛꜰᴏʀᴍ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ ᴛʜᴀᴛ
              ᴘʀᴏᴠɪᴅᴇ ꜱᴇᴀᴍʟᴇꜱꜱ ᴜꜱᴇʀ ᴇxᴘᴇʀɪᴇɴᴄᴇꜱ. ʙʏ ᴄᴏᴍʙɪɴɪɴɢ ʙᴏᴛʜ ʙᴀᴄᴋᴇɴᴅ ᴀɴᴅ
              ᴍᴏʙɪʟᴇ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ꜱᴋɪʟʟꜱ, ɪ ᴀɪᴍ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴄᴏᴍᴘʟᴇᴛᴇ, ꜱᴄᴀʟᴀʙʟᴇ
              ꜱᴏʟᴜᴛɪᴏɴꜱ ᴀɴᴅ ꜱᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ ᴡɪᴛʜ ᴛʜᴇ ʟᴀᴛᴇꜱᴛ ɪɴᴅᴜꜱᴛʀʏ ᴘʀᴀᴄᴛɪᴄᴇꜱ.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Work;
