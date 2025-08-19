import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = [
    { name: "Home", id: "Home-section" },
    { name: "About", id: "About-section" },
    { name: "Projects", id: "Projects-section" },
    { name: "Contact", id: "Contact-section" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-transparent shadow-none">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
        {/* Desktop Menu */}
        <Motion.ul
          className="hidden md:flex gap-10 uppercase tracking-wide"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItem.map(({ name, id }) => (
            <Motion.li
              key={id}
              variants={itemVariants}
              className="relative group text-white text-lg font-semibold cursor-pointer 
                         hover:text-green-400 transition-colors duration-300"
              onClick={() => handleScroll(id)}
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Motion.li>
          ))}
        </Motion.ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white absolute right-6  top-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Motion.ul
          className="md:hidden flex flex-col px-6 py-6 gap-6 backdrop-blur-lg shadow-none absolute left-0 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItem.map(({ name, id }) => (
            <Motion.li
              key={id}
              variants={itemVariants}
              className="text-white text-lg font-semibold cursor-pointer hover:text-green-400 transition-colors duration-300"
              onClick={() => handleScroll(id)}
            >
              {name}
            </Motion.li>
          ))}
        </Motion.ul>
      )}
    </nav>
  );
}