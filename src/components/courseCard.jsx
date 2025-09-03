"use client"
import { useState } from "react";
import {
  FaFileWord,
  FaPaintBrush,
  FaLaptopCode,
  FaBullhorn,
  FaMicrochip,
  FaCube,
  FaLanguage,
  FaVideo,
  FaDraftingCompass,
  FaTools,
} from "react-icons/fa";

import OfficeCourse from "@components/officecourse";
import GraphicDesign from "@components/graphicdesign";
import WebDevelopment from "@components/webdevelopment";
import DigitalMarketing from "@components/digitalmarketing";
import ComputerHardware from "@components/computerhardware";
import Animation from "@components/Animation";
import SpokeEnglish from "@components/SpokenEnglish";
import VideoEditing from "@components/VideoEditing";
import AutoCAD from "@components/AutoCAD";
import ComputerSellsService from "@components/ComputerSellsService";

const courses = [
  { name: "Office Course", icon: <FaFileWord className="text-blue-500 text-4xl" />, component: <OfficeCourse /> },
  { name: "Graphic Design", icon: <FaPaintBrush className="text-red-500 text-4xl" />, component: <GraphicDesign /> },
  { name: "Web Development", icon: <FaLaptopCode className="text-blue-600 text-4xl" />, component: <WebDevelopment /> },
  { name: "Digital Marketing", icon: <FaBullhorn className="text-green-500 text-4xl" />, component: <DigitalMarketing /> },
  { name: "Computer Hardware", icon: <FaMicrochip className="text-gray-600 text-4xl" />, component: <ComputerHardware /> },
  { name: "3D Animation", icon: <FaCube className="text-purple-500 text-4xl" />, component: <Animation /> },
  { name: "Spoken English", icon: <FaLanguage className="text-indigo-500 text-4xl" />, component: <SpokeEnglish /> },
  { name: "Video Editing", icon: <FaVideo className="text-yellow-500 text-4xl" />, component: <VideoEditing /> },
  { name: "AutoCAD", icon: <FaDraftingCompass className="text-pink-500 text-4xl" />, component: <AutoCAD /> },
  { name: "Computer Sales & Service", icon: <FaTools className="text-green-700 text-4xl" />, component: <ComputerSellsService /> },
];

export default function CourseCard() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Courses Grid */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Courses</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded p-4 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-400 hover:to-pink-400"
            onClick={() => setSelectedCourse(course.component)}
          >
            <div className="mb-2 flex justify-center">
              <span className="inline-block transition-transform duration-500 hover:scale-125 hover:rotate-12 hover:animate-bounce hover:drop-shadow-lg">
                {course.icon}
              </span>
            </div>
            <h3 className="text-gray-700 font-semibold">{course.name}</h3>
          </div>
        ))}
      </div>

      {/* Selected Course Section */}
      <div>
        {selectedCourse ? (
          <div className="transition-all duration-500">{selectedCourse}</div>
        ) : (
          <p className="text-center text-gray-500">Please select a course to view details.</p>
        )}
      </div>
    </div>
  );
}
