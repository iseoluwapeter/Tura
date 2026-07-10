import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="relative  bg-slate-950 overflow-hidden flex items-center">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
        alt="Warehouse"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-green-950/90 to-green-900/50" />

      <div className="relative z-10 mx-auto px-6 md:px-20 grid lg:grid-cols-1 gap-16 items-center py-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-emerald-400 uppercase tracking-[0.2em] text-sm font-semibold mb-6"
          >
            Logistics Infrastructure for Businesses
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 w-full"
          >
            Reliable logistics built for modern commerce.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
          >
            Tura helps businesses coordinate deliveries, manage dispatch
            operations, and move products efficiently across Lagos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 text-white px-7 py-4 rounded-xl font-semibold flex items-center gap-3">
              <Link to="/consultation">Request a Consultation</Link>
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
