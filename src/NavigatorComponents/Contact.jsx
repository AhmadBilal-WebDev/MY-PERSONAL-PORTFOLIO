import React, { useState } from "react";
import Header from "../Components/Header";
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import Footer from "../Components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch("https://getform.io/f/bllzgrrb", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to submit. Please try again.");
      }
    } catch {
      alert("❌ Error sending message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />

      <section className="bg-[#e0e1dd] py-10 md:py-[5rem] px-5 md:flex md:justify-between md:items-center md:gap-10 md:px-12">
        <div className="md:w-1/2">
          <p className="text-[1.5rem] font-serif md:text-[2rem]">
            Let's Connect And Talk About Opportunities!
          </p>

          <p className="mt-10 md:mt-8 font-serif text-[1.1rem]">Follow Me</p>

          <p className="mt-8 flex gap-5 items-center">
            <span>
              <FaGithub className="text-[1.5rem]" />
            </span>
            <span className="text-[1rem]">GitHub</span>
          </p>

          <p className="border-b mt-5"></p>

          <p className="mt-5 flex gap-5 items-center">
            <span>
              <FaFacebook className="text-[1.5rem]" />
            </span>
            <span className="text-[1rem]">Facebook</span>
          </p>

          <p className="border-b mt-5"></p>

          <p className="mt-5 flex gap-5 items-center">
            <span>
              <BiLogoLinkedin className="text-[1.5rem]" />
            </span>
            <span className="text-[1rem] ">Linkedin</span>
          </p>
        </div>

        <div className="mt-16 md:mt-0 md:w-1/2">
          {submitted && (
            <div className="text-center mb-6 text-green-600 font-semibold">
              ✅ Submitted Successfully!
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-4 flex flex-col gap-4 bg-white shadow-lg rounded-2xl py-10"
          >
            <div className="flex flex-col">
              <label className="py-2 px-1">Enter Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="py-2 px-1">Your Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="py-2 px-1">Your Message *</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg h-[10rem]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white rounded-full w-[7rem] py-2 hover:cursor-pointer disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
