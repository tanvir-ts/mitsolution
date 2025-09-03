"use client";

import React from "react";

const courses = [
  {
    title: "Font-end Development with React",
    rating: 5,
    reviews: 2200,
    fee: 40000,
    badge: "Best Seller",
    image: "/image/web imsge.jpg",
  },
  {
    title: "Backend Development with Node.js & Express",
    rating: 5,
    reviews: 1800,
    fee: 45000,
    badge: "Popular",
    image: "/image/web imsge.jpg",
  },
  {
    title: "Full Stack Development",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Wordpress Development",
    rating: 5,
    reviews: 1700,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "MERN Stack Development",
    rating: 5,
    reviews: 1500,
    fee: 55000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "App Development with Kotlin",
    rating: 5,
    reviews: 1700,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Python Django",
    rating: 5,
    reviews: 1700,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "MongoDB – Database for Web Apps",
    rating: 5,
    reviews: 1700,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Python Machine Learning",
    rating: 5,
    reviews: 1600,
    fee: 45000,
    image: "/image/web imsge.jpg",
  },
];

export default function WebDevelopment() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Web Development
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Badge */}
            {course.badge && (
              <span className="absolute top-4 right-4 bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
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
