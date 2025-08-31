"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hello() {
  const courses = [
    "Computer Office Application",
    "Computer Office Management",
    "Graphic Design",
    "Web Design & Development",
    "Digital Marketing",
    "Computer Hardware",
    "Video Editing",
    "Freelancing Marketplace",
  ];

  const gradients = [
    "from-red-500 via-pink-500 to-yellow-500",
    "from-blue-500 via-purple-500 to-pink-500",
    "from-green-500 via-teal-500 to-cyan-500",
    "from-purple-500 via-indigo-500 to-blue-500",
    "from-orange-500 via-yellow-500 to-red-500",
    "from-pink-500 via-purple-500 to-indigo-500",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-teal-400 via-green-500 to-blue-500",
  ];

  const [currentCourse, setCurrentCourse] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  const typingSpeed = 100;
  const pauseBetween = 1800;

  // Typewriter effect
  useEffect(() => {
    if (typingIndex < courses[currentCourse].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + courses[currentCourse][typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentCourse((prev) => (prev + 1) % courses.length);
        setDisplayText("");
        setTypingIndex(0);
      }, pauseBetween);
      return () => clearTimeout(pause);
    }
  }, [typingIndex, currentCourse, courses]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 min-h-[90vh] overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-xl space-y-6 z-10"
      >
        <h1 className="text-xl md:text-2xl font-extrabold leading-snug text-gray-900 drop-shadow-lg">
          We are MIT Solution
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Grow Your <br /> Career Skill with <br />
          <span className="text-blue-600">MIT Solution</span> Computer Training Institute
        </h1>

        {/* Typewriter */}
        <div className="mt-6 h-24 flex items-center">
          <h2
            className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent transition-all duration-700 bg-gradient-to-r ${gradients[currentCourse]}`}
          >
            {displayText}
            <span className="border-r-4 border-gray-900 animate-pulse ml-1"></span>
          </h2>
        </div>
      </motion.div>

      {/* Right Image with Glassmorphism Rounded Background */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-0 relative z-10 flex items-end justify-center"
      >
        {/* Rounded Background with Glow */}
        <div className="absolute bottom-0 w-[120%] h-[70%] rounded-t-full bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 opacity-90 backdrop-blur-2xl shadow-2xl border border-white/30 z-0 overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent blur-2xl animate-glow" />
        </div>

        {/* Image */}
        <img
          src="image/pngwing.com.png"
          alt="banner"
          className="w-96 md:w-[28rem] animate-bounce-slow drop-shadow-2xl relative z-10"
        />
      </motion.div>

      {/* Floating Bubbles */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 blur-2xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -left-10 w-60 h-60 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-50 blur-xl"
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-40 blur-xl"
        animate={{ y: [0, 60, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
