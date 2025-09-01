import { motion as Motion } from "framer-motion";
import { FaGraduationCap, FaClipboardList, FaUsers, FaBriefcase, FaStar } from "react-icons/fa";

export default function About() {
  const cards = [
    { icon: <FaGraduationCap size={28} />, title: "Education", content: "Faculty of Commerce, English Section, Accounting Department." },
    { icon: <FaClipboardList size={28} />, title: "Projects", content: "Worked on several projects, the most notable was in the Marketing department." },
    { icon: <FaBriefcase size={28} />, title: "Training & Courses", content: "Completed a Soft Skills course. Currently taking English & Accounting courses." },
    { icon: <FaStar size={28} />, title: "Work Ethic", content: "Able to handle high work pressure, diligent and hardworking." },
    { icon: <FaUsers size={28} />, title: "Personal Skills", content: "Sociable and loves teamwork." },
  ];




  // حركة خلفية بسيطة
  const backgroundAnimation = {
    backgroundPositionX: ["0%", "50%", "100%", "50%", "0%"],
    backgroundPositionY: ["0%", "20%", "0%"],
    transition: { duration: 90, repeat: Infinity, ease: "linear" },
  };

  return (
    <section
      id="About"
      className="py-20 min-h-screen relative overflow-hidden font-sans"
      style={{
        fontFamily: "'Inter', 'Poppins', 'Roboto', sans-serif",
      }}
    >
      {/* الخلفية المتحركة */}
      <Motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-emerald-950"
        animate={backgroundAnimation}
        style={{ zIndex: -1 }}
      />

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white drop-shadow-md relative z-10">
        About <span className=" text-green-400">Me</span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 relative z-10">
        {cards.map(({ icon, title, content }, index) => (
<Motion.div
  key={title}
  animate={{
    y: [0, -10 - index * 1, 5 + index * 1, 0], // حركة أصغر
    x: [0, 3 + index, -3 - index, 0],          // حركة أفقية أقل
    rotate: [0, 1, -1, 0],                     // دوران أقل
  }}
  transition={{
    duration: 15 + index * 3, // أخف وأبطأ
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
  className="relative flex flex-col items-center bg-black/30 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-emerald-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
>
  <Motion.div
    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 animate-gradient"
    whileHover={{ scale: 1.15 }}
  >
    {icon}
  </Motion.div>
  <h2 className="text-xl font-semibold text-emerald-400 mb-2 text-center">{title}</h2>
  <p className="text-gray-200 text-center text-sm leading-relaxed">{content}</p>
</Motion.div>

        ))}
      </div>
    </section>
  );
}
