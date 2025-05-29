import React, { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { TfiThought } from "react-icons/tfi";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

import myImg from "../Images/AhmadBilal.jpg";

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
import CurrentBody from "./CurrentBody";
import Header from "./Header";
import { TbBusinessplan } from "react-icons/tb";

const skills = [
  {
    title: "HTML",
    description: "ᴍᴀʀᴋᴜᴘ ʟᴀɴɢᴜᴀɢᴇ ᴜꜱᴇᴅ ᴛᴏ ꜱᴛʀᴜᴄᴛᴜʀᴇ ᴄᴏɴᴛᴇɴᴛ ᴏɴ ᴛʜᴇ ᴡᴇʙ.",
    color: "bg-orange-200",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    title: "CSS",
    description:
      "ꜱᴛʏʟᴇ ꜱʜᴇᴇᴛ ʟᴀɴɢᴜᴀɢᴇ ᴜꜱᴇᴅ ꜰᴏʀ ᴅᴇꜱᴄʀɪʙɪɴɢ ᴛʜᴇ ᴘʀᴇꜱᴇɴᴛᴀᴛɪᴏɴ ᴏꜰ ᴡᴇʙ ᴘᴀɢᴇꜱ.",
    color: "bg-blue-200",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    title: "JavaScript",
    description: "ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ʟᴀɴɢᴜᴀɢᴇ ᴜꜱᴇᴅ ᴛᴏ ᴍᴀᴋᴇ ᴡᴇʙ ᴘᴀɢᴇꜱ ɪɴᴛᴇʀᴀᴄᴛɪᴠᴇ.",
    color: "bg-yellow-200",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    title: "React",
    description: "ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ʟɪʙʀᴀʀʏ ꜰᴏʀ ʙᴜɪʟᴅɪɴɢ ᴜꜱᴇʀ ɪɴᴛᴇʀꜰᴀᴄᴇꜱ.",
    color: "bg-cyan-200",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    title: "React Native",
    description:
      "ʙᴜɪʟᴅ ᴍᴏʙɪʟᴇ ᴀᴘᴘꜱ ꜰᴏʀ ᴀɴᴅʀᴏɪᴅ ᴀɴᴅ ɪᴏꜱ ᴜꜱɪɴɢ ᴛʜᴇ ꜱᴀᴍᴇ ᴄᴏᴅᴇʙᴀꜱᴇ.",
    color: "bg-indigo-200",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    title: "Firebase",
    description:
      "ʙᴀᴄᴋᴇɴᴅ ᴘʟᴀᴛꜰᴏʀᴍ ꜰᴏʀ ʙᴜɪʟᴅɪɴɢ ʀᴇᴀʟ-ᴛɪᴍᴇ ᴀᴘᴘꜱ ᴡɪᴛʜ ꜰɪʀᴇꜱᴛᴏʀᴇ, ᴀᴜᴛʜ, ʜᴏꜱᴛɪɴɢ, ᴀɴᴅ ꜱᴛᴏʀᴀɢᴇ.",
    color: "bg-yellow-100",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png",
  },
  {
    title: "Tailwind CSS",
    description:
      "ᴜᴛɪʟɪᴛʏ-ꜰɪʀꜱᴛ ᴄꜱꜱ ꜰʀᴀᴍᴇᴡᴏʀᴋ ꜰᴏʀ ʙᴜɪʟᴅɪɴɢ ᴄᴜꜱᴛᴏᴍ ᴜꜱᴇʀ ɪɴᴛᴇʀꜰᴀᴄᴇꜱ ʀᴀᴘɪᴅʟʏ.",
    color: "bg-teal-200",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    title: "C++",
    description:
      "ᴜꜱᴇᴅ ꜰᴏʀ ᴘʀᴏʙʟᴇᴍ-ꜱᴏʟᴠɪɴɢ ᴀɴᴅ ᴜɴᴅᴇʀꜱᴛᴀɴᴅɪɴɢ ᴄᴏʀᴇ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ᴄᴏɴᴄᴇᴘᴛꜱ.",
    color: "bg-purple-200",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
  },
  {
    title: "SPM",
    description:
      "ᴘʟᴀɴɴɪɴɢ, ᴛʀᴀᴄᴋɪɴɢ, ᴀɴᴅ ᴍᴀɴᴀɢɪɴɢ ꜱᴏꜰᴛᴡᴀʀᴇ ᴘʀᴏᴊᴇᴄᴛꜱ ᴜꜱɪɴɢ ᴡᴀᴛᴇʀꜰᴀʟʟ, ᴛʀᴇʟʟᴏ, ɢɪᴛʜᴜʙ.",
    color: "bg-green-200",
    logo: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },
  {
    title: "SRC & SE",
    description:
      "ʀᴇQᴜɪʀᴇᴍᴇɴᴛ ɢᴀᴛʜᴇʀɪɴɢ ᴀɴᴅ ꜰᴏʟʟᴏᴡɪɴɢ ʙᴇꜱᴛ ᴘʀᴀᴄᴛɪᴄᴇꜱ ɪɴ ꜱᴏꜰᴛᴡᴀʀᴇ ᴇɴɢɪɴᴇᴇʀɪɴɢ.",
    color: "bg-pink-200",
    logo: "https://cdn-icons-png.flaticon.com/512/2721/2721294.png",
  },
  {
    title: "Python (Basic)",
    description:
      "ʙᴀꜱɪᴄ ᴋɴᴏᴡʟᴇᴅɢᴇ ᴏꜰ ᴘʏᴛʜᴏɴ ꜰᴏʀ ꜱᴄʀɪᴘᴛɪɴɢ ᴀɴᴅ ɢᴇɴᴇʀᴀʟ ᴘʀᴏɢʀᴀᴍᴍɪɴɢ.",
    color: "bg-gray-200",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    title: "Kotlin (Basic)",
    description: "ʙᴀꜱɪᴄ ᴜɴᴅᴇʀꜱᴛᴀɴᴅɪɴɢ ᴏꜰ ᴋᴏᴛʟɪɴ ꜰᴏʀ ᴀɴᴅʀᴏɪᴅ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ.",
    color: "bg-red-200",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  },
];

const work = [
  [
    {
      img: pro5,
      link: "http://sales-dashboard-design-community.vercel.app",
      details: "ꜱᴀʟᴇ ᴅᴀꜱʜʙᴏᴀʀᴅ ᴅᴇꜱɪɢɴ ᴄᴏᴍᴍᴜɴɪᴛʏ.",
      tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
    },
  ],

  [
    {
      img: pro1,
      link: "https://auth-validation-livid.vercel.app/",
      details: "ᴜꜱᴇʀ ʟᴏɢɪɴ  & ꜱɪɢɴᴜᴘ ᴀᴜᴛʜᴇɴᴛɪᴄᴀᴛɪᴏɴ",
      tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
    },
  ],

  [
    {
      img: pro2,
      link: "https://qrcode-genrator-weld.vercel.app/",
      details: "ɢᴇɴʀᴀᴛᴇ Qʀ ᴄᴏᴅᴇ ᴀɴʏ ᴛᴇxᴛ ᴏʀ ɴᴜᴍʙᴇʀ",
      tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
    },
  ],

  [
    {
      img: pro3,
      link: "https://password-genrator-wheat.vercel.app/",
      details: "ɢᴇɴʀᴀᴛᴇ ᴛʜᴇ ꜱᴛʀᴏɴɢᴇꜱᴛ ᴘᴀꜱꜱᴡᴏʀᴅ.",
      tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
    },
  ],

  [
    {
      img: pro4,
      link: "https://project-internship-beige.vercel.app/",
      details: "ᴀʀᴛɪᴄᴀʟ ᴘᴀɢᴇ ᴜɪ ᴅᴇꜱɪɢɴ ᴛᴏ ɢᴇᴛ ɪɴ ᴛᴏᴜᴄʜ.",
      tecnologies: "ʜᴛᴍʟ,ᴄꜱꜱ,ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ",
    },
  ],

  [
    {
      img: pro6,
      link: "https://wix-cleanic-project.vercel.app/",
      details: "ʀᴇᴍᴀʀᴋᴀʟʟʏ ᴄʟᴇᴀɴᴇʀ ᴀᴍᴀᴢɪɴɢʟʏ ꜱɪᴘʟᴇʀ.",
      tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
    },
  ],

  [
    {
      img: pro7,
      link: "https://home-nexus-news.vercel.app/",
      details: "ᴇɴᴊᴏʏ ᴛʜᴇ ʙᴇꜱᴛ ʜᴏᴍᴇ-ɴᴇxᴜꜱ-ɴᴇᴡꜱ",
      tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
    },
  ],
  [
    {
      img: pro8,
      link: "https://find-perfect-plants.vercel.app/",
      details: "ꜰɪɴᴅꜱ ᴛʜᴇ ᴘᴇʀꜰᴇᴄᴛ ᴘʟᴀɴᴛꜱ ꜰᴏʀ ʏᴏᴜ ʜᴏᴍᴇ",
      tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
    },
  ],
  [
    {
      img: pro9,
      link: "https://mejiwoo-fashion-project.vercel.app/",
      details: "ᴍᴇᴊɪᴡᴏᴏ ꜰᴀɪꜱʜᴏɴ",
      tecnologies: "ʀᴇᴀᴄᴛ ᴊꜱ & ᴛᴀɪʟᴡɪɴᴅ ᴄꜱꜱ",
    },
  ],

  [
    {
      img: pro10,
      link: "https://github.com/AhmadBilal-WebDev/FYP-Mobile-App",
      details: "ꜰʏᴘ ᴘʀᴏᴊᴇᴄᴛ ꜰᴏʀ ᴊᴏʙᴘᴏʀᴛᴀʟ.",
      tecnologies: "ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ & ꜰɪʀᴇʙᴀꜱᴇ",
    },
  ],
];

const MainBody = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const previousPro = () => {
    setOpenIndex((pre) => (pre - 1 + work.length) % work.length);
  };

  const nextPro = () => {
    setOpenIndex((next) => (next + 1) % work.length);
  };

  const handleContact = () => {
    window.open("/contact", "_self");
  };
  return (
    <>
      <Header />

      <section className="md:h-[calc(100vh-5.2rem)] flex flex-col justify-center items-center bg-[#e0e1dd] px-5 md:flex md:flex-row md:justify-between md:items-center py-10 md:py-20 md:px-12">
        <div className="flex flex-col gap-1 sm:gap-3 md:w-[50vw]">
          <p className="flex gap-2 items-center text-[1.4rem] md:text-[1.5rem]">
            <MdWavingHand className="text-yellow-500" />
            <span>ʜᴇʟʟᴏ! ɪ ᴀᴍ ᴀʜᴍᴀᴅ ʙɪʟᴀʟ</span>
          </p>
          <p className="mt-3 text-[2.1rem] font-semibold leading-tight md:text-[2.8rem]">
            Transforming Ideas into Functional Software
          </p>
          <p className="mt-3 leading-tight">
            ᴀ ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ꜱᴏꜰᴛᴡᴀʀᴇ ᴇɴɢɪɴᴇᴇʀ ᴛᴜʀɴɪɴɢ ɪᴅᴇᴀꜱ ɪɴᴛᴏ ꜰᴀꜱᴛ, ʀᴇʟɪᴀʙʟᴇ,
            ᴀɴᴅ ᴜꜱᴇʀ-ꜰʀɪᴇɴᴅʟʏ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ.
          </p>
          <button className="mt-5">
            <p
              className="flex items-center justify-center gap-3 bg-black text-white rounded-full w-[8.5rem] py-2 hover:cursor-pointer"
              onClick={handleContact}
            >
              <TfiThought className="text-white" />
              <span>Lets Talks</span>
            </p>
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={myImg}
            className="w-[18rem] object-cover rounded-full border p-3"
          />
        </div>
      </section>

      <section className="bg-[#1b263b] md:px-5 py-5 md:py-10">
        <p className="text-center font-semibold text-white text-[1.4rem] md:text-[2rem]">
          Skills
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-3 md:mt-5">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`${skill.color} p-4 rounded-2xl shadow-md`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={skill.logo}
                  alt={`${skill.title} logo`}
                  className="w-16 h-16 object-contain "
                />
                <h2 className="text-xl font-bold mb-2">{skill.title}</h2>
                <p className="text-sm text-gray-700">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#e0e1dd] py-10 flex flex-col justify-center items-center">
        <div>
          <p className="text-center font-semibold text-[1.4rem] md:text-[2rem]">
            Frontend Project
          </p>
        </div>

        <div className="grid grid-cols-1 py-10 shadpw-2xl">
          {work[openIndex].map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center md:flex-row md:justify-around md:w-[90vw]"
            >
              <p className="text-center mb-5 text-[1.3rem] md:hidden">
                {items.tecnologies}
              </p>
              <div className="flex items-center gap-2 md:order-2 md:gap-5">
                <button className="hover:cursor-pointer">
                  <GrFormPrevious
                    className="text-[2.1rem] bg-white text-black rounded-full p-2 md:text-[2.5rem] md:p-2"
                    onClick={previousPro}
                  />
                </button>

                <a href={items.link}>
                  <img
                    src={items.img}
                    alt=""
                    className="w-[16rem] h-[27rem] bg-[#1b263b] object-cover rounded-3xl border p-3 shadow-2xl hover:cursor-pointer hover:scale-105 transition-transform duration-500 md:w-[17rem] md:h-[30rem]"
                  />
                </a>

                <button className="hover:cursor-pointer">
                  <MdOutlineNavigateNext
                    className="text-[2.1rem] bg-white text-black rounded-full p-2 md:text-[2.5rem] md:p-2"
                    onClick={nextPro}
                  />
                </button>
              </div>

              <div className="px-5 mt-5 md:order-1 md:w-1/2">
                <p className="text-center mb-5 text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] hidden md:block">
                  {items.tecnologies}
                </p>
                <p className="text-center mt-3 text-[1.3rem] md:text-[1.3rem] lg:text-[1.6rem]">
                  {items.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CurrentBody />
    </>
  );
};

export default MainBody;
