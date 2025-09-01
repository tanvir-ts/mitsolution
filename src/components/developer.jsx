"use client";

import Image from "next/image";

const developer = {
  name: "Mohammad Hossain Tanvir",
  role: "Fullstack Developer",
  img: "/image/tanvir.jpg",
  github: "#",
  linkedin: "#",
  description: "Responsive Design, React, Next.js & Node.js Expert",
};

export default function Developer() {
  return (
    <section className="w-full h-screen mb-5 bg-gradient-to-r from-gray-100 via-white to-gray-200 flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">Meet Our Developer</h2>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden text-center p-12 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-blue-500/50">
        {/* Developer Image */}
        <div className="relative w-64 h-64 mb-6">
          <Image
            src={developer.img}
            alt={developer.name}
            fill
            className="rounded-full object-cover border-4 border-blue-300"
          />
        </div>

        {/* Developer Info */}
        <h3 className="text-3xl font-bold mb-2">{developer.name}</h3>
        <p className="text-gray-600 mb-2">{developer.role}</p>
        <p className="text-gray-500 mb-6">{developer.description}</p>

        {/* Links */}
        <div className="flex justify-center gap-6">
          <a
            href={developer.github}
            target="_blank"
            className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            GitHub
          </a>
          <a
            href={developer.linkedin}
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-pink-700 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
