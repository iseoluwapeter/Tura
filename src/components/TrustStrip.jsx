import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaClock, FaChartLine, FaHeadset } from "react-icons/fa";

const stats = [
  {
    icon: <FaTruck />,
    title: "Structured Dispatch",
    text: "Reliable operational coordination for businesses.",
  },
  {
    icon: <FaClock />,
    title: "Same-Day Delivery",
    text: "Fast delivery execution across Lagos.",
  },
  {
    icon: <FaChartLine />,
    title: "Weekly Reporting",
    text: "Operational summaries and fulfilment tracking.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    text: "Business relationship management support.",
  },
];

const TrustStrip = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-7 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {item.title}
            </h3>

            <p className="text-slate-500 leading-relaxed text-sm">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
