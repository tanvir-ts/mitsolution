"use client";

import React from "react";

const courses = [
  {
    title: "Blender 3D – Beginner to Advanced",
    rating: 5,
    reviews: 1800,
    fee: 50000,
    badge: "Best Seller",
    image: "/image/web imsge.jpg",
  },
  {
    title: "Autodesk Maya – 3D Modeling & Animation",
    rating: 5,
    reviews: 1500,
    fee: 60000,
    badge: "Popular",
    image: "/image/web imsge.jpg",
  },
  {
    title: "3ds Max – Modeling & Rendering",
    rating: 5,
    reviews: 1200,
    fee: 55000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Cinema 4D – Motion Graphics & Animation",
    rating: 5,
    reviews: 1100,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "ZBrush – Digital Sculpting",
    rating: 5,
    reviews: 1000,
    fee: 60000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Unreal Engine – 3D Animation & Visualization",
    rating: 5,
    reviews: 900,
    fee: 65000,
    image: "/image/web imsge.jpg",
  },
];

export default function Animation() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        3D Animation
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Badge */}
            {course.badge && (
              <span className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
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

              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-200">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
