"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function FreeSeminar() {
  return (
    <section className="bg-gray-200 py-12 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* ===== Left Side: Text Content ===== */}
        <div className="flex-1 space-y-6 px-5 py-5">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Join Our Free <br /> Seminars
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-800">
            Need guidelines to choose a suitable course? Join our free seminars to consult with our experts, they will guide you to pick the course that matches your interest and discuss the career prospects.
          </p>

          {/* Button */}
          <Link
            href="/course"
            className="bg-pink-700 hover:bg-pink-800 text-white font-bold text-lg px-5 py-3 rounded-xl flex items-center justify-center transition"
          >
            <FontAwesomeIcon icon={faBookOpen} className="mr-2"/> Free Seminar Schedule
          </Link>
        </div>

        {/* ===== Right Side: Image ===== */}
        <div className="flex-1 w-full md:w-auto">
          <img
            src="/image/pngwing.com (3).png"
            alt="Free Seminar"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
