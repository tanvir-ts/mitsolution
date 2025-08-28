"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Community() {
  return (
    <section className="bg-gray-100 py-12 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* ===== Left: Image ===== */}
        <div className="flex-1 w-full">
          <img
            src="/image/img14.png"
            alt="Community"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* ===== Right: Text + Buttons ===== */}
        <div className="flex-1 px-5 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            You can also be one of our <br />Community Member!!
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-800">
            Ready to improve your skills? Join our courses and become a part of our community where you can learn and help each other. Don't miss the opportunity, start your journey today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://wa.me/+8801814419521"
              className="bg-green-700 hover:bg-green-600 text-white font-bold text-lg px-5 py-3 rounded-xl flex items-center justify-center transition"
            >
              Send Message <FontAwesomeIcon icon={faWhatsapp} className="ml-2"/>
            </Link>

            <Link
              href="https://www.facebook.com/mitsolutioncomputertraininginstitut"
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg px-5 py-3 rounded-xl flex items-center justify-center transition"
            >
              Join Now <FontAwesomeIcon icon={faFacebook} className="ml-2"/>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
