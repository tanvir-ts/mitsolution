"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const developers = [
  {
    id: 1,
    name: "Mohammad Hossain Tanvir",
    role: "Fullstack Developer",
    img: "/image/tanvir.jpg",
    portfolio: "https://example.com",
    facebook: "https://facebook.com/tanvir.vaia.14",
    linkedin: "https://www.linkedin.com/in/mohammadhossaintanvir/",
    whatsapp: "https://wa.me/+8801815127980",
    github: "https://github.com/tanvir-ts",
    description:
      "Expert in Responsive Design, React, Next.js & Node.js. Passionate about building modern, scalable, and beautiful web applications.",
  },
];

export default function Developer() {
  const [selectedDev, setSelectedDev] = useState(null);
  const openModal = (dev) => setSelectedDev(dev);
  const closeModal = () => setSelectedDev(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-100 via-white to-gray-200 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 text-center text-gray-800">
        Meet Our Developer
      </h1>

      {/* Developer Card */}
      <div className="flex flex-wrap justify-center gap-12 w-full max-w-6xl">
        {developers.map((dev) => (
          <div
            key={dev.id}
            className="relative w-full max-w-md group cursor-pointer transition-transform duration-500 hover:scale-105"
            onClick={() => openModal(dev)}
          >
            {/* Card background with glass effect */}
            <div className="bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col items-center relative overflow-hidden border border-white/30">
              {/* Glowing Circle Image */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 relative mb-6 rounded-full shadow-xl border-4 border-blue-400">
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="w-full h-full object-cover rounded-full animate-pulse-slow"
                />
                <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping-slow"></div>
              </div>

              {/* Name & Role */}
              <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900">{dev.name}</h2>
              <p className="text-gray-900 text-lg sm:text-xl text-center font-semibold mt-4">{dev.role}</p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl">
                <span className="text-white font-bold text-xl sm:text-2xl animate-bounce">
                  View Details
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDev && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 sm:px-6 lg:px-8 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl p-8 sm:p-12 w-full sm:w-3/4 lg:w-1/2 max-w-3xl text-center shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 relative rounded-full shadow-lg border-4 border-blue-400">
              <img
                src={selectedDev.img}
                alt={selectedDev.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{selectedDev.name}</h2>
            <p className="text-gray-600 text-base sm:text-lg mb-3">{selectedDev.role}</p>
            <p className="text-gray-500 mb-6">{selectedDev.description}</p>

            <p className="mb-4">
              <a
                href={selectedDev.portfolio}
                target="_blank"
                className="text-blue-600 hover:underline text-lg"
              >
                Portfolio
              </a>
            </p>

            <div className="flex justify-center gap-8 mt-4 text-2xl">
              <a
                href={selectedDev.facebook}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href={selectedDev.linkedin}
                target="_blank"
                className="text-blue-800 hover:text-blue-900 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={selectedDev.whatsapp}
                target="_blank"
                className="text-green-700 hover:text-green-900 transition"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href={selectedDev.github}
                target="_blank"
                className="text-gray-800 hover:text-black transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-ping-slow {
          animation: ping 2.5s infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
}
