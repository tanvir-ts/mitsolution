"use client";

import { useState } from "react";

const faqs = [
  { q: "What courses are suitable for me?", a: "We offer over 45 trending IT courses. You can select based on your interest and career goals." },
  { q: "Will you provide class videos?", a: "Yes, all classes are recorded and accessible for your revision anytime." },
  { q: "Where is your location?", a: "Harun Market 1st Floor, Noyarhat Bazar, Oxygen-Quiesh Road, Bayezid, Chattogram." },
  { q: "Can I take the course online?", a: "Absolutely! We offer both online and offline courses." },
  { q: "What is the duration of these courses?", a: "Duration varies from 1 month to 6 months depending on the course." },
  { q: "Will you provide career guidance along with the course?", a: "Yes, our mentors provide career guidance and freelancing tips." },
  { q: "Will I have access to the lab at any time to practice?", a: "Yes, lab access is provided for practical sessions." },
  { q: "Can I become self-employed after completing the courses?", a: "Yes, our courses are designed to help you start freelancing or your own business." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-200 py-12 px-5 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">FAQ</h1>
        <p className="text-xl md:text-2xl font-medium">Have any questions? Ask us anything.</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-2 rounded-xl shadow-xl p-6 cursor-pointer transition-all hover:shadow-2xl"
              onClick={() => toggleIndex(idx)}
            >
              <h2 className="font-bold text-lg">{faq.q}</h2>
              {openIndex === idx && (
                <p className="mt-4 text-gray-700 text-sm md:text-base">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
