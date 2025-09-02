"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const directors = [
  {
    id: 1,
    name: "Sayed Md. Jakir Hossain",
    title: "C.E.O & Founder of MIT Solution & Managing Director of Electrogreen Energy",
    phone: "01814-419521",
    department: "Administration",
    email: "mitsolution21@gmail.com",
    image: "/image/jakirsir.jpg",
  },
  {
    id: 2,
    name: "Umar Ul Fath",
    title: "Managing Director of MIT Solution & C.E.O & Founder of Ul Fath Ads Agency",
    phone: "01754-582287",
    department: "Operations",
    email: "mitsolution21@gmail.com",
    image: "/image/umar sir.png",
  },
];

export default function Director() {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const openModal = (director) => setSelectedDirector(director);
  const closeModal = () => setSelectedDirector(null);

  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl font-bold fpno-xl mb-8 text-center">
        Our Directors
      </h1>

      {/* Centered Cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {directors.map((director) => (
          <div
            key={director.id}
            className="relative w-full max-w-xs bg-white rounded-lg shadow-md p-4 text-center group overflow-hidden transition duration-300"
          >
            <img
              src={director.image}
              alt={director.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto object-cover"
            />
            <h2 className="text-lg sm:text-xl font-bold mt-2">{director.name}</h2>
            <p className="text-sm sm:text-base text-gray-600 font-semibold">
              {director.title}
            </p>

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-indigo-500/80 cursor-pointer"
              onClick={() => openModal(director)}
            >
              <span className="text-white font-semibold text-lg sm:text-xl">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDirector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-6 lg:px-8 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-full sm:w-3/4 lg:w-1/2 max-w-2xl text-center shadow-lg animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedDirector.image}
              alt={selectedDirector.name}
              className="w-35 h-35 sm:w-32 sm:h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {selectedDirector.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {selectedDirector.title}
            </p>
            <p className="mb-2 flex items-center justify-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} /> {selectedDirector.phone}
            </p>
            <p className="mb-2 flex items-center justify-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faBook} /> {selectedDirector.department}
            </p>
            <p className="mb-2 flex items-center justify-center gap-2 text-gray-700 break-all">
              <FontAwesomeIcon icon={faEnvelope} /> {selectedDirector.email}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
