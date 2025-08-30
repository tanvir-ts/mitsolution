"use client";
import { useState, useEffect } from "react";

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

  const gradientColors = [
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
  const pauseBetweenCourses = 1800;

  // Typewriter effect
  useEffect(() => {
    if (typingIndex < courses[currentCourse].length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + courses[currentCourse][typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentCourse((prev) => (prev + 1) % courses.length);
        setDisplayText("");
        setTypingIndex(0);
      }, pauseBetweenCourses);
      return () => clearTimeout(pause);
    }
  }, [displayText, typingIndex, currentCourse]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 min-h-[90vh] bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Left Side */}
      <div className="max-w-xl space-y-6 z-10">
        <h1 className="text-xl md:text-xl font-extrabold leading-snug text-gray-900 drop-shadow-lg">
          We are MIT Solution
        </h1>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
          Grow Your <br /> Career Skill with <br />
          <span className="text-blue-600">MIT Solution</span> Computer Training Institute
        </h1>

        {/* Animated Typewriter */}
        <div className="mt-6 h-24 flex items-center">
          <h2
            className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent transition-all duration-700 bg-gradient-to-r ${gradientColors[currentCourse]}`}
          >
            {displayText}
            <span className="border-r-4 border-gray-900 animate-pulse ml-1"></span>
          </h2>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="mt-12 md:mt-0 relative z-10">
        <img
          src="image/pngwing.com.png"
          alt="banner"
          className="w-96 md:w-[28rem] animate-bounce-slow drop-shadow-xl"
        />
      </div>

      {/* Optional Floating Background Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse-slow"></div>
    </div>
  );
}
