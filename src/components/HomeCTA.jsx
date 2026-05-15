import React from "react";

const HomeCTA = () => {
  return (
    <section className="px-10 py-10 bg-slate-50">
      <div className="hero-bg-dot absolute inset-0 opacity-40 pointer-events-none" />

      <section className="w-full py-24 bg-green-700 text-white rounded-2xl">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to streamline your deliveries?
          </h2>

          <p className="text-lg mb-8 text-orange-100">
            Partner with Tura and build a more reliable logistics operation for
            your business.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeCTA;
