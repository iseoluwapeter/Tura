import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    "Business submits orders",
    "Tura coordinates dispatch",
    "Riders complete deliveries",
    "Business receives real-time updates",
  ];

  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 text-lg">
            A simple and structured workflow designed to help businesses move
            products efficiently across Lagos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT - IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
              alt="Logistics operations"
              className="w-full h-130 object-cover"
            />
          </div>

          {/* RIGHT - STEPS */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Simple 4-Step Process
              </h3>

              <ul className="space-y-5">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                    <span className="text-slate-700 text-lg">
                      <span className="font-semibold text-slate-900 mr-2">
                        Step {i + 1}:
                      </span>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional CTA inside section */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h4 className="text-slate-900 font-semibold mb-2">
                Built for speed and reliability
              </h4>
              <p className="text-slate-600 text-sm">
                Designed to reduce delays, improve coordination, and give
                businesses full visibility of their deliveries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
