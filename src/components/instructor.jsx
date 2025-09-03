"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const instructors = [
  {
    id: 1,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 2,
    name: "Minhazul Karim",
    title: "Greaphic Designer",
    phone: "01711-878760",
    course: "Animation",
    email: "example@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 3,
    name: "Another Instructor",
    title: "Frontend Developer",
    phone: "01711-000000",
    course: "React & Next.js",
    email: "example@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 4,
    name: "Another Instructor",
    title: "Frontend Developer",
    phone: "01711-000000",
    course: "React & Next.js",
    email: "example@gmail.com",
    image: "/image/tanvir.jpg",
  },
  // চাইলে আরো instructor add করতে পারো
];

export default function Instructor() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const openModal = (instructor) => setSelectedInstructor(instructor);
  const closeModal = () => setSelectedInstructor(null);

  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Our Instructors
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="relative w-full max-w-xs bg-white rounded-lg shadow-md p-4 text-center group overflow-hidden transition duration-300"
          >
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto object-cover"
            />
            <h2 className="text-lg sm:text-xl font-bold mt-2">{instructor.name}</h2>
            <p className="text-sm sm:text-base text-gray-600 font-semibold">
              {instructor.title}
            </p>

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-400/80 cursor-pointer"
              onClick={() => openModal(instructor)}
            >
              <span className="text-white font-semibold text-lg sm:text-xl">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedInstructor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-6 lg:px-8 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-full sm:w-3/4 lg:w-1/2 max-w-2xl text-center shadow-lg animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedInstructor.image}
              alt={selectedInstructor.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {selectedInstructor.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {selectedInstructor.title}
            </p>
            <p className="mb-2 flex items-center justify-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} /> {selectedInstructor.phone}
            </p>
            <p className="mb-2 flex items-center justify-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faBook} /> {selectedInstructor.course}
            </p>
            <p className="mb-2 flex items-center justify-center gap-2 text-gray-700 break-all">
              <FontAwesomeIcon icon={faEnvelope} /> {selectedInstructor.email}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
