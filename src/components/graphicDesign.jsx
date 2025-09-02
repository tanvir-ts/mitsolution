import React from 'react';

const courses = [
  {
    title: "Professional Graphic Design",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    badge: "Best Seller",
    image: "/image/web imsge.jpg",
  },
  {
    title: "Motion Graphics",
    rating: 5,
    reviews: 2500,
    fee: 50000,
    badge: "New",
    image: "/image/web imsge.jpg",
  },
  {
    title: "UX/UI Design",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Digital Image Editing",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Adobe Illustrator",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Adobe Photoshop",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Digital Product Design",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
  {
    title: "Diploma in Graphic & Motion Design",
    rating: 5,
    reviews: 2000,
    fee: 50000,
    image: "/image/web imsge.jpg",
  },
];

export default function GraphicDesign() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Graphic & Multimedia</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Badge */}
            {course.badge && (
              <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded z-10">
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>

              <div className="flex items-center text-yellow-500 mb-1">
                {"★".repeat(course.rating)}
                <span className="ml-2 text-sm text-gray-600">({course.rating})</span>
              </div>

              <p className="text-sm text-gray-500 mb-2">{course.reviews.toLocaleString()} Reviews</p>

              <p className="text-lg font-semibold text-blue-600 mb-4">
                Fee: {course.fee.toLocaleString()} BDT
              </p>

              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
