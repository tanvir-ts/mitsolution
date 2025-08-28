"use client";

import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const stats = [
    { label: "Successful Students", value: 2500 },
    { label: "Expert Freelancers", value: 5 },
    { label: "Skilled Job Holders", value: 250 },
    { label: "Industry Experts", value: 50 },
    { label: "Success Ratio", value: 87 },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 20);

            const counterInterval = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counterInterval);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(start);
                return newCounters;
              });
            }, 20);
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // 30% of section visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="space-y-12 mb-28 px-5">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Students, Mentors & Success Rate
      </h1>

      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-evenly gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="shadow-2xl border-4 border-pink-700 space-y-4 text-center p-8 rounded-xl hover:scale-105 transition-transform"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pink-700">
              {counters[idx]}{stat.label === "Success Ratio" ? "%" : ""}
            </h2>
            <p className="text-lg font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
