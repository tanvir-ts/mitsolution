"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  return (
    <section className="bg-gray-200 py-12 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* ===== Left Side: Text Content ===== */}
        <div className="flex-1 space-y-6">
          <h2 className="text-red-500 text-xl md:text-2xl font-bold">15 Years of Excellence</h2>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Shaping World-Class IT <br />Experts
          </h1>
          <p className="text-base md:text-lg font-medium text-gray-800">
            MIT Solution has been working with a vision to create IT experts for the past 15 years. In a fast pacing world, where every sector relies on technology, you need to develop IT skills to secure a better future. With the utmost dedication, we have been able to make more than 2500 IT experts who are currently working in different sectors.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/course"
              className="bg-pink-700 hover:bg-pink-800 text-white font-bold text-lg px-5 py-3 rounded-xl flex items-center justify-center transition"
            >
              <FontAwesomeIcon icon={faBookOpen} className="mr-2"/> Browse Course
            </Link>
            <button className="bg-pink-700 hover:bg-pink-800 text-white font-bold text-lg px-5 py-3 rounded-xl flex items-center justify-center transition">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2"/> Learn More
            </button>
          </div>
        </div>

        {/* ===== Right Side: Image ===== */}
        <div className="flex-1 w-full md:w-auto">
          <img
            src="/image/pngwing.com.png"
            alt="About Image"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
