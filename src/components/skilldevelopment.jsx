"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SkillDevelopment() {
  return (
    <section className="bg-gray-200 py-12 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* ===== Left Side: Text Content ===== */}
        <div className="flex-1 space-y-6 px-5">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl font-bold">Start your journey to</h1>
            <h1 className="text-3xl md:text-5xl font-bold text-pink-700">skill development</h1>
            <h1 className="text-3xl md:text-5xl font-bold">with us</h1>
          </div>
          <p className="text-lg md:text-2xl font-medium text-gray-800">
            Start your journey to skill development with us, with our experienced mentors!
          </p>

          {/* Button */}
          <Link
            href="/course"
            className="bg-pink-700 hover:bg-pink-800 text-white font-bold text-lg md:text-xl px-5 py-3 rounded-xl flex items-center justify-center transition"
          >
            Enroll Our Course <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
          </Link>
        </div>

        {/* ===== Right Side: Image ===== */}
        <div className="flex-1 w-full md:w-auto">
          <img
            src="/image/pngwing.com (4).png"
            alt="Skill Development"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
