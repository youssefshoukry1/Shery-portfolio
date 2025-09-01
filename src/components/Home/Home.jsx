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
<div className="relative w-56 h-56 md:w-60 md:h-60">
  {/* صورة شيري */}
  <Motion.img
    src="/shery.webp"
    alt="Shery Adel"
    className="w-full h-full rounded-full object-cover shadow-[0_0_25px_rgba(16,185,129,0.5)]"
    style={{ objectPosition: "center top" }}
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />

  {/* موجة border حول الصورة مع حركة scale */}
  <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
    {[0, 1, 2].map((i) => (
      <Motion.circle
        key={i}
        cx="50%"
        cy="50%"
        r={`calc(50% - ${i * 2}px)`} 
        fill="none"
        stroke={`rgba(16,185,129,${0.6 - i * 0.15})`}
        strokeWidth={3 + i * 1.5}
        strokeLinecap="round"
        animate={{
          rotate: i % 2 === 0 ? 360 : -360,
          scale: [1, 1.08, 1], // تكبر وترجع للحجم الطبيعي
        }}
        transition={{
          repeat: Infinity,
          duration: 7 + i * 5,
          ease: "easeInOut",
        }}
      />
    ))}
  </svg>
</div>




        {/* الاسم */}
        <Motion.h1
          className="text-2xl md:text-4xl font-extrabold tracking-wide  p-5
          bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-300 bg-clip-text text-transparent "
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
{/* أزرار CTA محسّنة */}
<Motion.div
  className="flex gap-5"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
>
  {/* زرار أساسي */}
  <button 
    onClick={() => {
      const aboutSection = document.getElementById('About');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="px-6 py-3 rounded-lg text-base font-medium
      bg-emerald-600 text-white
      hover:bg-emerald-500
      transition-colors duration-200 shadow-sm"
  >
    About me
  </button>

  {/* زرار Outline */}
  <button 
    onClick={() => {
      const contactSection = document.getElementById('Contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
    className="px-6 py-3 rounded-lg text-base font-medium border border-emerald-600 text-emerald-600
      hover:bg-emerald-600 hover:text-white
      transition-colors duration-200 shadow-sm"
  >
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