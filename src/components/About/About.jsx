import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGraduationCap, FaClipboardList, FaUsers, FaBriefcase, FaStar } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaGraduationCap size={28} className="text-emerald-400 mb-3" />,
      title: "Education",
      content: "Faculty of Commerce, English Section, Accounting Department.",
    },
    {
      icon: <FaClipboardList size={28} className="text-emerald-400 mb-3" />,
      title: "Projects",
      content: "Worked on several projects, the most notable was in the Marketing department.",
    },
    {
      icon: <FaBriefcase size={28} className="text-emerald-400 mb-3" />,
      title: "Training & Courses",
      content: "Completed a Soft Skills course. Currently taking English & Accounting courses.",
    },
    {
      icon: <FaStar size={28} className="text-emerald-400 mb-3" />,
      title: "Work Ethic",
      content: "Able to handle high work pressure, diligent and hardworking.",
    },
    {
      icon: <FaUsers size={28} className="text-emerald-400 mb-3" />,
      title: "Personal Skills",
      content: "Sociable and loves teamwork.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
    id="About"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #000000, #013220)",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
        About Me
      </h1>

      <Motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {cards.map(({ icon, title, content }) => (
          <Motion.div
            key={title}
            variants={itemVariants}
            className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-emerald-700"
          >
            {icon}
            <h2 className="text-xl font-semibold mb-2 text-emerald-400">{title}</h2>
            <p className="text-gray-300 leading-relaxed">{content}</p>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}