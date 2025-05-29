import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import img1 from "../Images/AhmadBilal2.png";
import Footer from "./Footer";
import { TbBusinessplan } from "react-icons/tb";
import pro11 from "../Images/AhmadBilal4.png";

const myQuestionCards = [
  {
    question: "ᴄᴀɴ ʏᴏᴜ ʙʀɪᴇꜰʟʏ ɪɴᴛʀᴏᴅᴜᴄᴇ ʏᴏᴜʀꜱᴇʟꜰ?",
    answer:
      "ɪ'ᴍ ᴀʜᴍᴀᴅ ʙɪʟᴀʟ, ᴀ ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ꜰʀᴏɴᴛᴇɴᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜰᴏᴄᴜꜱᴇᴅ ᴏɴ ᴄʀᴀꜰᴛɪɴɢ ꜱᴇᴀᴍʟᴇꜱꜱ ᴡᴇʙ ᴀɴᴅ ᴍᴏʙɪʟᴇ ᴇxᴘᴇʀɪᴇɴᴄᴇꜱ.",
  },
  {
    question: "ᴡʜᴇʀᴇ ᴀʀᴇ ʏᴏᴜ ʙᴀꜱᴇᴅ?",
    answer:
      "ɪ'ᴍ ᴘʀᴏᴜᴅʟʏ ꜰʀᴏᴍ 71ᴀʟ, ᴛᴇʜꜱɪʟ ʀᴇɴᴀʟᴀᴋᴜʀᴅ, ᴅɪꜱᴛʀɪᴄᴛ ᴏᴋᴀʀᴀ — ᴀ ᴘʟᴀᴄᴇ ᴛʜᴀᴛ ꜱʜᴀᴘᴇᴅ ᴍʏ ᴡᴏʀᴋ ᴇᴛʜɪᴄ ᴀɴᴅ ᴄʀᴇᴀᴛɪᴠɪᴛʏ.",
  },
  {
    question: "ᴡʜᴀᴛ ɪꜱ ʏᴏᴜʀ ᴄᴜʀʀᴇɴᴛ ᴇᴅᴜᴄᴀᴛɪᴏɴᴀʟ ʙᴀᴄᴋɢʀᴏᴜɴᴅ?",
    answer:
      "ɪ'ᴍ ᴘᴜʀꜱᴜɪɴɢ ᴀ ʙᴀᴄʜᴇʟᴏʀ'ꜱ ᴅᴇɢʀᴇᴇ ɪɴ ꜱᴏꜰᴛᴡᴀʀᴇ ᴇɴɢɪɴᴇᴇʀɪɴɢ ᴀᴛ ᴜᴍᴛ ʟᴀʜᴏʀᴇ, ꜱʜᴀʀᴘᴇɴɪɴɢ ʙᴏᴛʜ ᴛᴇᴄʜɴɪᴄᴀʟ ᴀɴᴅ ꜱᴏꜰᴛ ꜱᴋɪʟʟꜱ.",
  },
  {
    question: "ᴡʜᴇʀᴇ ᴅɪᴅ ʏᴏᴜ ꜱᴛᴜᴅʏ ʙᴇꜰᴏʀᴇ ᴜɴɪᴠᴇʀꜱɪᴛʏ?",
    answer:
      "ɪ ᴄᴏᴍᴘʟᴇᴛᴇᴅ ᴍʏ ɪɴᴛᴇʀᴍᴇᴅɪᴀᴛᴇ ᴀᴛ ᴀꜱᴘɪʀᴇ ᴄᴏʟʟᴇɢᴇ ᴀɴᴅ ᴍᴀᴛʀɪᴄᴜʟᴀᴛɪᴏɴ ᴀᴛ ɢᴏᴠᴛ.ʙᴏʏꜱ ʜɪɢʜ ꜱᴄʜᴏᴏʟ 7/1.ᴀ.ʟ.",
  },
  {
    question: "ᴡʜᴀᴛ ɪꜱ ʏᴏᴜʀ ᴘʀɪᴍᴀʀʏ ᴀʀᴇᴀ ᴏꜰ ᴇxᴘᴇʀᴛɪꜱᴇ?",
    answer:
      "ɪ ꜱᴘᴇᴄɪᴀʟɪᴢᴇ ɪɴ ꜰʀᴏɴᴛᴇɴᴅ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ ᴀɴᴅ ᴄʀᴏꜱꜱ-ᴘʟᴀᴛꜰᴏʀᴍ ᴍᴏʙɪʟᴇ ᴀᴘᴘꜱ ᴜꜱɪɴɢ ʀᴇᴀᴄᴛ.ᴊꜱ ᴀɴᴅ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ.",
  },
  {
    question: "ᴡʜᴀᴛ ᴋɪɴᴅ ᴏꜰ ᴘʀᴏᴊᴇᴄᴛꜱ ʜᴀᴠᴇ ʏᴏᴜ ᴡᴏʀᴋᴇᴅ ᴏɴ?",
    answer:
      "ꜰʀᴏᴍ ᴊᴏʙ ᴘᴏʀᴛᴀʟ ᴀᴘᴘꜱ ᴛᴏ ᴄᴜꜱᴛᴏᴍ Qʀ ᴄᴏᴅᴇ ɢᴇɴᴇʀᴀᴛᴏʀꜱ ᴀɴᴅ ᴍᴏᴅᴇʀɴ ᴅᴀꜱʜʙᴏᴀʀᴅꜱ, ɪ ꜰᴏᴄᴜꜱ ᴏɴ ᴄʟᴇᴀɴ ᴜɪ ᴀɴᴅ ᴘʀᴀᴄᴛɪᴄᴀʟ ꜰᴜɴᴄᴛɪᴏɴᴀʟɪᴛʏ.",
  },
  {
    question: "ᴡʜᴀᴛ ᴍᴏᴛɪᴠᴀᴛᴇꜱ ʏᴏᴜʀ ᴡᴏʀᴋ?",
    answer:
      "ɪ’ᴍ ᴅʀɪᴠᴇɴ ʙʏ ᴘʀᴏʙʟᴇᴍ-ꜱᴏʟᴠɪɴɢ, ɪɴɴᴏᴠᴀᴛɪᴏɴ, ᴀɴᴅ ᴛʜᴇ ᴅᴇꜱɪʀᴇ ᴛᴏ ᴍᴀᴋᴇ ᴅɪɢɪᴛᴀʟ ᴇxᴘᴇʀɪᴇɴᴄᴇꜱ ꜱɪᴍᴘʟᴇ ʏᴇᴛ ɪᴍᴘᴀᴄᴛꜰᴜʟ.",
  },
  {
    question: "ᴡʜᴀᴛ ᴀʀᴇ ʏᴏᴜʀ ʟᴏɴɢ-ᴛᴇʀᴍ ɢᴏᴀʟꜱ?",
    answer:
      "ɪ ᴀɪᴍ ᴛᴏ ʙᴇᴄᴏᴍᴇ ᴀ ꜰᴜʟʟ-ꜱᴛᴀᴄᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴀɴᴅ ʙᴜɪʟᴅ ꜱᴄᴀʟᴀʙʟᴇ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴꜱ ᴛʜᴀᴛ ꜱᴏʟᴠᴇ ʀᴇᴀʟ-ᴡᴏʀʟᴅ ᴘʀᴏʙʟᴇᴍꜱ.",
  },
  {
    question: "​ʜᴏᴡ ᴅᴏ ʏᴏᴜ ꜱᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ ɪɴ ᴛᴇᴄʜ?",
    answer:
      "ɪ ᴀᴄᴛɪᴠᴇʟʏ ꜰᴏʟʟᴏᴡ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴄᴏᴍᴍᴜɴɪᴛɪᴇꜱ, ᴇxᴘʟᴏʀᴇ ɴᴇᴡ ᴛᴏᴏʟꜱ, ᴀɴᴅ ᴄᴏɴᴛɪɴᴜᴏᴜꜱʟʏ ʙᴜɪʟᴅ ᴘᴇʀꜱᴏɴᴀʟ ᴘʀᴏᴊᴇᴄᴛꜱ ᴛᴏ ꜱᴛᴀʏ ᴀʜᴇᴀᴅ.",
  },
];

const CurrentBody = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="min-h-screen bg-[url('https://websitedemos.net/illustrator-portfolio-04/wp-content/uploads/sites/1528/2025/03/about-bg.jpg')] bg-cover bg-no-repeat px-4 py-10">
        <div className="flex flex-col items-center mb-5">
          <img
            src={img1}
            alt="Ahmad Bilal"
            className="rounded-full border p-1 w-[6rem] shadow-xl"
          />
          <h2 className="text-white text-3xl font-semibold mt-5">About Me</h2>
        </div>

        <div className="max-w-4xl mx-auto text-white bg-opacity-80 shadow-2xl rounded-lg p-5 space-y-4">
          {myQuestionCards.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-2 transition-all duration-300"
            >
              <div className="flex justify-between gap-2 items-center">
                <p className="text-[1.2rem] font-medium">{item.question}</p>
                <button
                  onClick={() => toggleIndex(index)}
                  className="text-white focus:outline-none transition-transform duration-300 hover:cursor-pointer"
                >
                  <FaChevronDown
                    className={`w-5 h-5 transform ${
                      activeIndex === index
                        ? "rotate-180 transition-transform duration-500"
                        : "rotate-0 transition-transform duration-500"
                    }`}
                  />
                </button>
              </div>
              {activeIndex === index && (
                <p className="py-4 text-white text-[1.1rem] md:text-lg">
                  {item.answer}
                </p>
              )}
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
              className="rounded-full w-[8rem] object-cover border p-2 md:w-[14rem]"
            />
          </div>

          <div>
            <h2 className="font-bold text-gray-800 flex justify-center items-center gap-2">
              <span>
                <TbBusinessplan className="text-2xl md:text-[2.1rem] text-red-800" />
              </span>
              <span className="text-2xl md:text-[2.1rem]">Future Work</span>
            </h2>

            <p className="text-gray-700 text-[1rem] leading-relaxed text-justify mt-5 px-[1rem]">
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

export default CurrentBody;
