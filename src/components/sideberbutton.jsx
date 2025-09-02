"use client";

export default function SidebarButton() {
  return (
    <>
      {/* Left Vertical Button */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button className="bg-red-600 text-white h-36 w-12 rounded-r-3xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-b hover:from-pink-500 hover:to-red-600 flex items-center justify-center overflow-hidden relative">
          <span
            className="whitespace-nowrap font-bold text-sm"
            style={{ transform: "rotate(-90deg)" }}
          >
            BROWSE COURSES
          </span>
        </button>
      </div>

      {/* Right Vertical Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button className="bg-green-600 text-white h-36 w-12 rounded-l-3xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-b hover:from-green-400 hover:to-green-700 flex items-center justify-center overflow-hidden relative">
          <span
            className="whitespace-nowrap font-bold text-sm"
            style={{ transform: "rotate(-90deg)" }}
          >
            Join Free Seminar
          </span>
        </button>
      </div>
    </>
  );
}
