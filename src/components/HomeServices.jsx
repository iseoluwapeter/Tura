import React from "react";
import {
  FaTruck,
  FaBoxes,
  FaHeadset,
  FaMapMarkedAlt,
  FaChartBar,
  FaRoute,
} from "react-icons/fa";

const HomeServices = () => {
  const services = [
    {
      title: "Last-Mile Delivery",
      desc: "Fast and reliable delivery from business to customer.",
      Icon: FaTruck,
    },
    {
      title: "Bulk Dispatch",
      desc: "High-volume delivery coordination for growing businesses.",
      Icon: FaBoxes,
    },
    {
      title: "Dedicated Coordination",
      desc: "Operational support and dispatch management.",
      Icon: FaHeadset,
    },
    {
      title: "Delivery Tracking",
      desc: "Real-time visibility of ongoing deliveries.",
      Icon: FaMapMarkedAlt,
    },
    {
      title: "Weekly Reports",
      desc: "Clear insights into delivery performance.",
      Icon: FaChartBar,
    },
    {
      title: "Route Optimization",
      desc: "Efficient delivery planning across Lagos.",
      Icon: FaRoute,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-green-950 text-white">
      {/* 🌈 Silhouette Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-green-950 via-green-900 to-slate-950" />

        {/* soft glowing blobs */}
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-gray-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Tuuraa Offers
          </h2>
          <p className="text-slate-300 text-lg">
            Built for businesses that need reliable, structured delivery
            operations across Lagos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.Icon;

            return (
              <div
                key={i}
                className="relative group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-green-400/40 transition-all duration-300"
              >
                {/* 🔳 ICON UNDERLAY */}
                <Icon className="absolute -right-6 -bottom-6 text-white/10 text-[120px] pointer-events-none" />

                {/* CONTENT */}
                <div className="relative z-10">
                  <Icon className="text-white text-2xl mb-4" />

                  <h3 className="font-semibold text-lg mb-2 text-white">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-tr from-green-500/10 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
