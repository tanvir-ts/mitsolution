"use client";
import { useState } from "react";

export default function Infrastructure() {
  const baseImages = [
    "/image/class 5.jpg",
    "/image/class 2.jpg",
    "/image/class 3.jpg",
    "/image/class 4.jpg",
    "/image/class 1.jpg",
    "/image/class 6.jpg",
    "/image/class 7.jpg",
    "/image/class 8.jpg",
    "/image/class 9.jpg",
    "/image/class 10.jpg",
    "/image/class 11.jpg",
    "/image/class 12.jpg",
    "/image/class 13.jpg",
    "/image/class 14.jpg",
    "/image/class 15.jpg",
  ];

  // Duplicate array for infinite scroll illusion
  const images = [...baseImages, ...baseImages];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-10 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Our Infrastructure
      </h1>

      {/* Big Preview */}
      <div className="w-full max-w-6xl mx-auto mb-8 px-2 sm:px-4">
        <img
          src={baseImages[selectedIndex]}
          alt="Selected Infrastructure"
          className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Infinite Scrolling Row */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-20 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 cursor-pointer overflow-hidden rounded-lg shadow-md border-2 ${
                selectedIndex === idx % baseImages.length
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(idx % baseImages.length)}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 40s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
