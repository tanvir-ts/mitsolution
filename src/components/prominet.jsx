"use client";

export default function Prominent() {
  const initiatives = [
    { count: "2700+", label: "Students received career counseling" },
    { count: "500+", label: "Women got IT training on full free scholarship" },
    { count: "250+", label: "Students get online internship facility" },
    { count: "450+", label: "Physically challenged people received IT training" },
    { count: "150+", label: "Financially deprived got IT scholarship" },
    { count: "50+", label: "Polytechnics are attached for training" },
    { count: "200+", label: "Senior citizens got scholarships in IT" },
    { count: "45+", label: "Trendy courses for professional training" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Prominent Initiatives
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border-4 border-pink-700 shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pink-700 mb-2">
              {item.count}
            </h2>
            <p className="text-gray-900 text-sm font-semibold sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
