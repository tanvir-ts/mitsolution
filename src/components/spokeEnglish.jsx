import React from "react";

const courses = [
  {
    title: "Basic Spoken English",
    rating: 5,
    reviews: 2200,
    fee: 20000,
    badge: "Best Seller",
    image: "/image/web imsge.jpg",
  },
  {
    title: "Intermediate Spoken English",
    rating: 5,
    reviews: 1800,
    fee: 25000,
    badge: "Popular",
    image: "/image/web imsge.jpg",
  },
  {
    title: "Advanced Spoken English",
    rating: 5,
    reviews: 1500,
    fee: 30000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Business English Communication",
    rating: 5,
    reviews: 1200,
    fee: 35000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "English for Interviews",
    rating: 5,
    reviews: 1000,
    fee: 25000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Accent & Pronunciation Training",
    rating: 5,
    reviews: 900,
    fee: 30000,
    image: "/image/web imsge.jpg",
  },
];

export default function SpokenEnglish() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Spoken English
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Badge */}
            {course.badge && (
              <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                {course.badge}
              </span>
            )}

            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {course.title}
              </h3>

              <div className="flex items-center text-yellow-500 mb-1">
                {"★".repeat(course.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  ({course.rating})
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-2">
                {course.reviews.toLocaleString()} Reviews
              </p>

              <p className="text-lg font-semibold text-blue-600 mb-4">
                Fee: {course.fee.toLocaleString()} BDT
              </p>

              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
