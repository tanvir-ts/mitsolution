"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBook, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const students = [
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
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 3,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 4,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 5,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 6,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 7,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 8,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 9,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 10,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 11,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
  {
    id: 12,
    name: "Mohammad Hossain Tanvir",
    title: "Fullstack Developer",
    phone: "01815-127980",
    course: "Web Development",
    email: "mohammadhossaintanvir74@gmail.com",
    image: "/image/tanvir.jpg",
  },
];

export default function Student() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openModal = (student) => setSelectedStudent(student);
  const closeModal = () => setSelectedStudent(null);

  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
        Our Students
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {students.map((student) => (
          <div
            key={student.id}
            className="relative w-full max-w-xs bg-white rounded-lg shadow-md p-4 text-center group overflow-hidden transition duration-300"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto object-cover"
            />
            <h2 className="text-lg sm:text-xl font-bold mt-2">{student.name}</h2>
            <p className="text-sm font-lg font-bold sm:text-base text-gray-600">{student.title}</p>

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-400/80 cursor-pointer"
              onClick={() => openModal(student)}
            >
              <span className="text-white font-semibold text-lg sm:text-xl">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-6 lg:px-8 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-full sm:w-3/4 lg:w-1/2 max-w-2xl text-center shadow-lg animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedStudent.image}
              alt={selectedStudent.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {selectedStudent.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {selectedStudent.title}
            </p>
            <p className="mb-1"><FontAwesomeIcon icon={faPhone} className="mr-2"/> {selectedStudent.phone}</p>
            <p className="mb-1"><FontAwesomeIcon icon={faBook} className="mr-2"/> {selectedStudent.course}</p>
            <p className="mb-1"><FontAwesomeIcon icon={faEnvelope} className="mr-2"/> {selectedStudent.email}</p>
          </div>
        </div>
      )}
    </section>
  );
}
