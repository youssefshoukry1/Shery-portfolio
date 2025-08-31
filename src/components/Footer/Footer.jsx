import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="w-full py-6 flex flex-col md:flex-row items-center justify-between px-6"
      style={{
        background: "linear-gradient(135deg, #000000, #013220)",
        borderTop: "1px solid #065f46",
      }}
    >
      <p className="text-gray-300 text-sm md:text-base">
        Developed by <span className="text-emerald-400 font-semibold">Youssef Shoukry</span>
      </p>

      <a
        href="https://wa.me/201204470794"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 md:mt-0 flex items-center gap-2 text-emerald-400 font-semibold hover:text-white transition-colors duration-300"
      >
        <FaWhatsapp /> 01204470794
      </a>
    </footer>
  );
}