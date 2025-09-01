import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
 const [active, setActive] = useState("Home");
  const navItem = [
    { name: "Home", id: "Home" },
    { name: "About", id: "About" },
    { name: "Contact", id: "Contact" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // 🔥 السكروول لحد السيكشن
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

 

  useEffect(() => {
    const handleScroll = () => {
      navItem.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <>
    <Motion.nav
  className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 backdrop-blur-md bg-black/30 `}
>
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
    <Motion.ul
      className="flex gap-8 md:gap-12 tracking-wide"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItem.map(({ name, id }) => (
        <Motion.li
          key={id}
          variants={itemVariants}
          className={`relative group text-gray-100 text-sm md:text-lg font-medium cursor-pointer 
            hover:text-green-400 transition-colors duration-300 ${
              active === id ? "text-green-400" : "hover:text-green-300"
            }`}
          onClick={() => handleScroll(id)}
        >
          <button>{name}</button>
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
        </Motion.li>
      ))}
    </Motion.ul>
  </div>
</Motion.nav>

    </>
  );
}
