import React from "react";
import { motion as Motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope size={24} />,
      link: "mailto:sherryadel92@gmail.com",
    },
    {
      icon: <FaWhatsapp size={24} />,
      link: "https://wa.me/+201279154070",
    },
    {
      icon: <FaLinkedin size={24} />,
      link: "https://www.linkedin.com/in/sherry-adel-7447b9293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <section
    id="Contact"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #000000, #013220)",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
        Contact Me
      </h1>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        {/* Left side: Social Media */}
        <div className="flex gap-4 bg-gray-900/80 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-emerald-700">
          {contacts.map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Right side: Form */}
        <Motion.form
          action={`mailto:sherryadel92@gmail.com`}
          method="POST"
          encType="text/plain"
          className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-emerald-700 flex flex-col gap-4 flex-1"
        >
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-black/30 text-white placeholder-emerald-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-black/30 text-white placeholder-emerald-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-4 rounded-xl bg-black/30 text-white placeholder-emerald-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
          />
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-transform duration-300"
          >
              Send Message
          </button>
        </Motion.form>
      </div>
    </section>
  );
}