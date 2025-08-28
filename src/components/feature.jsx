"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-200 py-12 px-5">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-10 items-center">
        
        {/* ===== Left Side: Text + Cards ===== */}
        <div className="flex-1 flex flex-col space-y-8">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Practical Projects and Innovation are Our Teaching <br className="hidden md:block" />Specialty
          </h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex items-center space-x-4 border-4 border-pink-700 p-5 rounded-xl hover:shadow-lg transition">
              <img src="/image/bag.png" alt="Homework" className="w-12 h-12"/>
              <h2 className="text-lg font-semibold">
                Every Class Comes With <br />Homework Sheets
              </h2>
            </div>

            {/* Card 2 */}
            <div className="flex items-center space-x-4 border-4 border-purple-700 p-5 rounded-xl hover:shadow-lg transition">
              <img src="/image/meet.png" alt="Live Support" className="w-12 h-12"/>
              <h2 className="text-lg font-semibold">
                Daily Live <br />Support
              </h2>
            </div>

            {/* Card 3 */}
            <div className="flex items-center space-x-4 border-4 border-blue-700 p-5 rounded-xl hover:shadow-lg transition">
              <img src="/image/play.png" alt="Recorded Classes" className="w-12 h-12"/>
              <h2 className="text-lg font-semibold">
                Recorded Class <br />Videos
              </h2>
            </div>

            {/* Card 4 */}
            <div className="flex items-center space-x-4 border-4 border-green-700 p-5 rounded-xl hover:shadow-lg transition">
              <img src="/image/certificate01.png" alt="Certificate" className="w-12 h-12"/>
              <h2 className="text-lg font-semibold">
                At the End of the Course <br />Certificate
              </h2>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <Link
              href="/course"
              className="bg-blue-700 hover:bg-pink-600 text-white font-bold text-lg px-5 py-3 rounded-xl flex items-center justify-center transition"
            >
              View Courses <FontAwesomeIcon icon={faArrowRight} className="ml-2"/>
            </Link>
          </div>
        </div>

        {/* ===== Right Side: Image ===== */}
        <div className="flex-1 w-full md:w-auto mt-8 md:mt-0">
          <img
            src="/image/pngwing.com (4).png"
            alt="Feature Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}
