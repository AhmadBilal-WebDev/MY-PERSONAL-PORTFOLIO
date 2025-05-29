import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import img1 from "../Images/AhmadBilal.jpg";
import { DiCodeigniter } from "react-icons/di";
import { SiProtonmail } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

// import { FiLightbulb, FiPenTool, FiCheckSquare } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode className="text-[1.4rem] md:text-[1.8rem] text-cyan-400" />,
    title: "Web Development",
    desc: "ᴄʀᴀꜰᴛɪɴɢ ʀᴇꜱᴘᴏɴꜱɪᴠᴇ ᴀɴᴅ ᴍᴏᴅᴇʀɴ ᴡᴇʙꜱɪᴛᴇꜱ ᴡɪᴛʜ ʀᴇᴀᴄᴛ, ʜᴛᴍʟ, ᴄꜱꜱ, ᴀɴᴅ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ.",
  },
  {
    icon: (
      <FaMobileAlt className="text-[1.4rem] md:text-[1.8rem] text-emerald-400" />
    ),
    title: "Mobile Apps",
    desc: "ʙᴜɪʟᴅɪɴɢ ꜱᴍᴏᴏᴛʜ, ᴄʀᴏꜱꜱ-ᴘʟᴀᴛꜰᴏʀᴍ ᴀᴘᴘꜱ ᴜꜱɪɴɢ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴀɴᴅ ꜰɪʀᴇʙᴀꜱᴇ.",
  },
  {
    icon: <FaRocket className="text-[1.4rem] md:text-[1.8rem] text-pink-400" />,
    title: "Creative Projects",
    desc: "ꜰʀᴏᴍ ᴅᴀꜱʜʙᴏᴀʀᴅꜱ ᴛᴏ Qʀ ɢᴇɴᴇʀᴀᴛᴏʀꜱ, ɪ ᴛᴜʀɴ ɪᴅᴇᴀꜱ ɪɴᴛᴏ ᴘᴏʟɪꜱʜᴇᴅ ᴜꜱᴇʀ ᴇxᴘᴇʀɪᴇɴᴄᴇꜱ.",
  },
];

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-[#e0e1dd] py-10 md:py-[5rem] px-5 md:px-12">
        <div className="flex flex-col items-center">
          <p className="text-center text-[1.7rem] font-serif md:text-[2rem]">
            The Frontend Storyteller
          </p>
          <img
            src={img1}
            alt="Ahmad Bilal"
            className="rounded-full border w-[12rem] mt-7 md:mt-12"
          />
        </div>

        <div className="mt-7 md:mt-12">
          <p className="text-justify px-[1rem] sm:px-[4rem] md:px-[6rem] lg:px-[8rem]">
            ʜᴇʟʟᴏ! ɪ'ᴍ ᴀʜᴍᴀᴅ ʙɪʟᴀʟ, ᴀ ꜰʀᴏɴᴛᴇɴᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜰʀᴏᴍ 71ᴀʟ, ʀᴇɴᴀʟᴀ
            ᴋʜᴜʀᴅ, ᴏᴋᴀʀᴀ, ᴡɪᴛʜ ᴀ ᴘᴀꜱꜱɪᴏɴ ꜰᴏʀ ᴄʀᴇᴀᴛɪɴɢ ꜱᴍᴏᴏᴛʜ ᴡᴇʙ ᴀɴᴅ ᴍᴏʙɪʟᴇ
            ᴇxᴘᴇʀɪᴇɴᴄᴇꜱ. ɪ'ᴍ ᴄᴜʀʀᴇɴᴛʟʏ ꜱᴛᴜᴅʏɪɴɢ ꜱᴏꜰᴛᴡᴀʀᴇ ᴇɴɢɪɴᴇᴇʀɪɴɢ ᴀᴛ ᴜᴍᴛ
            ʟᴀʜᴏʀᴇ, ᴀꜰᴛᴇʀ ᴄᴏᴍᴘʟᴇᴛɪɴɢ ᴍʏ ᴇᴀʀʟɪᴇʀ ꜱᴛᴜᴅɪᴇꜱ ᴀᴛ ᴀꜱᴘɪʀᴇ ᴄᴏʟʟᴇɢᴇ ᴀɴᴅ
            ɢᴏᴠᴛ. ʙᴏʏꜱ ʜɪɢʜ ꜱᴄʜᴏᴏʟ 7/1.ᴀ.ʟ. ɪ ꜱᴘᴇᴄɪᴀʟɪᴢᴇ ɪɴ ʀᴇᴀᴄᴛ.ᴊꜱ ᴀɴᴅ ʀᴇᴀᴄᴛ
            ɴᴀᴛɪᴠᴇ, ʙᴜɪʟᴅɪɴɢ ᴄʟᴇᴀɴ, ꜰᴜɴᴄᴛɪᴏɴᴀʟ ᴜɪꜱ—ꜰʀᴏᴍ ᴊᴏʙ ᴘᴏʀᴛᴀʟꜱ ᴛᴏ Qʀ ᴄᴏᴅᴇ
            ᴀᴘᴘꜱ ᴀɴᴅ ᴍᴏᴅᴇʀɴ ᴅᴀꜱʜʙᴏᴀʀᴅꜱ. ɪ'ᴍ ᴅʀɪᴠᴇɴ ʙʏ ᴘʀᴏʙʟᴇᴍ-ꜱᴏʟᴠɪɴɢ,
            ɪɴɴᴏᴠᴀᴛɪᴏɴ, ᴀɴᴅ ᴀ ɢᴏᴀʟ ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴀ ꜰᴜʟʟ-ꜱᴛᴀᴄᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴡʜᴏ ʙᴜɪʟᴅꜱ
            ɪᴍᴘᴀᴄᴛꜰᴜʟ, ʀᴇᴀʟ-ᴡᴏʀʟᴅ ꜱᴏʟᴜᴛɪᴏɴꜱ. ɪ ꜱᴛᴀʏ ᴜᴘ ᴛᴏ ᴅᴀᴛᴇ ʙʏ ᴇxᴘʟᴏʀɪɴɢ ɴᴇᴡ
            ᴛᴏᴏʟꜱ, ᴇɴɢᴀɢɪɴɢ ᴡɪᴛʜ ᴅᴇᴠ ᴄᴏᴍᴍᴜɴɪᴛɪᴇꜱ, ᴀɴᴅ ʙᴜɪʟᴅɪɴɢ ᴘᴇʀꜱᴏɴᴀʟ
            ᴘʀᴏᴊᴇᴄᴛꜱ. ɪ ᴅᴏɴ’ᴛ ᴊᴜꜱᴛ ᴄᴏᴅᴇ—ɪ ꜱᴏʟᴠᴇ, ʟᴇᴀʀɴ, ᴀɴᴅ ᴅᴇʟɪᴠᴇʀ.
          </p>
        </div>
      </section>

      <section className="bg-[#1b263b] text-white py-16 px-5 md:px-12">
        <h2 className="text-2xl font-bold text-center md:text-[2rem]">
          What I Can Do
        </h2>

        <div className="text-center">
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Design Illustration"
            className="mx-auto w-[20rem] opacity-90 drop-shadow-[0_8px_20px_rgba(255,255,255,0.1)]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#24344e] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[rgb(224,225,221)] pb-16 pt-5 px-5 md:px-12">
        <div className="flex justify-center lg:order-2">
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Creative Process Illustration"
            className="w-[20rem] drop-shadow-[0_8px_20px_rgba(255,255,255,0.1)]"
          />
        </div>

        <div className="lg:order-1">
          <h2 className="text-2xl text-center font-bold lg:text-[2rem]">
            My Creative Process
          </h2>
        </div>

        <div className="mt-5 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8 lg:mt-16">
          <div className="flex flex-col items-start mt-7 lg:items-center lg:mt-0">
            <div className="flex justify-center items-center gap-3 lg:flex-col">
              <DiCodeigniter className="text-[1.4rem] lg:text-[1.8rem] text-red-600" />
              <h3 className="font-semibold text-[1.1rem] lg:text-[1.2rem]">
                Inspiration & Research
              </h3>
            </div>

            <div>
              <p className="mt-3 lg:text-center">
                ɪ ꜱᴛᴀʀᴛ ʙʏ ᴜɴᴅᴇʀꜱᴛᴀɴᴅɪɴɢ ᴛʜᴇ ᴄʟɪᴇɴᴛ’ꜱ ɢᴏᴀʟꜱ ᴀɴᴅ ᴛᴀʀɢᴇᴛ ᴜꜱᴇʀꜱ. ɪ
                ʀᴇꜱᴇᴀʀᴄʜ ꜱɪᴍɪʟᴀʀ ᴀᴘᴘꜱ ᴏʀ ᴡᴇʙꜱɪᴛᴇꜱ, ᴀɴᴀʟʏᴢᴇ ᴜɪ/ᴜx ᴘᴀᴛᴛᴇʀɴꜱ, ᴀɴᴅ
                ᴄᴏʟʟᴇᴄᴛ ɪᴅᴇᴀꜱ ᴛʜᴀᴛ ᴀʟɪɢɴ ᴡɪᴛʜ ᴛʜᴇ ᴘʀᴏᴊᴇᴄᴛ'ꜱ ᴘᴜʀᴘᴏꜱᴇ.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start mt-7 lg:items-center lg:mt-0">
            <div className="flex justify-center items-center gap-3 lg:flex-col">
              <SiProtonmail className="text-[1.4rem] lg:text-[1.8rem] text-green-700" />
              <h3 className="font-semibold text-[1.1rem] lg:text-[1.2rem]">
                Design & Prototyping
              </h3>
            </div>

            <div>
              <p className="mt-3 lg:text-center">
                ɪ ᴄʀᴇᴀᴛᴇ ᴡɪʀᴇꜰʀᴀᴍᴇꜱ ᴀɴᴅ ᴘʀᴏᴛᴏᴛʏᴘᴇꜱ ᴛᴏ ᴍᴀᴘ ᴏᴜᴛ ᴛʜᴇ ᴜꜱᴇʀ
                ᴇxᴘᴇʀɪᴇɴᴄᴇ. ɪ ꜰᴏᴄᴜꜱ ᴏɴ ᴄʟᴀʀɪᴛʏ, ʀᴇꜱᴘᴏɴꜱɪᴠᴇɴᴇꜱꜱ, ᴀɴᴅ ᴍᴏᴅᴇʀɴ ᴜɪ
                ᴛʀᴇɴᴅꜱ ᴜꜱɪɴɢ ᴛᴏᴏʟꜱ ʟɪᴋᴇ ꜰɪɢᴍᴀ ʙᴇꜰᴏʀᴇ ᴍᴏᴠɪɴɢ ᴛᴏ ᴄᴏᴅᴇ.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start mt-7 lg:items-center lg:mt-0">
            <div className="flex justify-center items-center gap-3 lg:flex-col">
              <MdDeveloperMode className="text-[1.4rem] lg:text-[1.8rem] text-cyan-400" />
              <h3 className="font-semibold text-[1.1rem] lg:text-[1.2rem]">
                Development & Testing
              </h3>
            </div>

            <div>
              <p className="mt-3 lg:text-center">
                ɪ ʙʀɪɴɢ ᴛʜᴇ ɪᴅᴇᴀꜱ ᴛᴏ ʟɪꜰᴇ ᴜꜱɪɴɢ ʜᴛᴍʟ, ᴄꜱꜱ, ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ, ʀᴇᴀᴄᴛ ᴏʀ
                ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ, ᴀɴᴅ ꜰɪʀᴇʙᴀꜱᴇ. ɪ ᴛᴇꜱᴛ ᴛʜᴏʀᴏᴜɢʜʟʏ ᴀᴄʀᴏꜱꜱ ᴅᴇᴠɪᴄᴇꜱ ᴀɴᴅ
                ᴏᴘᴛɪᴍɪᴢᴇ ꜰᴏʀ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ ᴀɴᴅ ᴜꜱᴀʙɪʟɪᴛʏ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
