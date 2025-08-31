import React from "react";
import { motion as Motion } from "framer-motion";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <>
    <section
    id="Home"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url(/marina.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay أسود + لمسة Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-emerald-950/90"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center px-6">

        {/* صورة شيري */}
        <Motion.img
  src="/shery.webp"
  alt="Shery Adel"
  className="w-56 h-56 md:w-60 md:h-60 rounded-full object-cover border-4 border-emerald-600/40 shadow-[0_0_25px_rgba(16,185,129,0.5)] mb-6"
  style={{ objectPosition: "center top" }}
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
/>

        {/* الاسم */}
        <Motion.h1
          className="text-2xl md:text-4xl font-extrabold tracking-wide mb-3 
          bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hey, I'm Sherry
        </Motion.h1>

        {/* الوظيفة */}
        <Motion.p
          className="text-sm md:text-base text-gray-300/90 max-w-md mb-8 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Accounting & Finance Specialist with a passion for innovation.
        </Motion.p>

        {/* أزرار CTA */}
        <Motion.div
          className="flex gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* زرار أساسي */}
          <button className="px-6 py-3 rounded-xl text-base font-semibold 
            bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 
            text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] 
            hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] 
            transition-all duration-300">
            View Work
          </button>

          {/* زرار Outline */}
          <button className="px-6 py-3 rounded-xl text-base font-semibold border border-emerald-500 text-emerald-400 
            hover:bg-gradient-to-r hover:from-emerald-700 hover:to-emerald-900 hover:text-white 
            transition-all duration-300">
            Contact
          </button>
        </Motion.div>

      </div>
    </section>
    
    <About/>
    <Contact/>
    </>
  );
}