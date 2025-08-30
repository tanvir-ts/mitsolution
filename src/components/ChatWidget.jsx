"use client";
import { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaPhoneAlt, FaComments, FaTimes } from "react-icons/fa";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat Options */}
      <div
        className={`flex flex-col items-end space-y-3 mb-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <a
          href="https://m.me/mitsolutioncomputertraininginstitut"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-blue-600 text-white hover:scale-110 transition"
        >
          <FaFacebookMessenger size={22} />
        </a>
        <a
          href="https://wa.me/8801814419521"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-green-500 text-white hover:scale-110 transition"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="tel:+8801814419521"
          className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-red-500 text-white hover:scale-110 transition"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {open ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>
    </div>
  );
}
