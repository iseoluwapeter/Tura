import React from "react";
import {
  FaShoppingBag,
  FaStore,
  FaCapsules,
  FaTshirt,
  FaBoxOpen,
} from "react-icons/fa";

const Industries = () => {
  const industries = [
    {
      title: "FMCG",
      desc: "Fast-moving consumer goods distribution and retail delivery operations.",
      Icon: FaBoxOpen,
    },
    {
      title: "E-Commerce",
      desc: "Reliable last-mile delivery support for online businesses and marketplaces.",
      Icon: FaShoppingBag,
    },
    {
      title: "Retail",
      desc: "Structured logistics coordination for stores and growing retail brands.",
      Icon: FaStore,
    },
    {
      title: "Fashion",
      desc: "Fast customer deliveries for fashion brands, boutiques, and apparel businesses.",
      Icon: FaTshirt,
    },
    {
      title: "Pharma",
      desc: "Coordinated dispatch support for pharmacies and healthcare-related deliveries.",
      Icon: FaCapsules,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* glow blobs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />

        {/* noise */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay">
          <svg width="100%" height="100%">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>

            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-green-400 font-semibold uppercase tracking-wide mb-4">
            Industries We Serve
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Logistics built for modern businesses
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Tura supports businesses across multiple industries with structured
            delivery coordination, scalable dispatch operations, and reliable
            last-mile logistics.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => {
            const Icon = industry.Icon;

            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 group hover:border-green-400/30 transition-all duration-300"
              >
                {/* Underlay Icon */}
                <Icon className="absolute -right-6 -bottom-6 text-[120px] text-white/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Top Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-400/20 flex items-center justify-center mb-6">
                    <Icon className="text-green-400 text-2xl" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {industry.desc}
                  </p>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-green-500/10 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
