import React from "react";
import { motion } from "framer-motion";
import { FaBoxOpen, FaWarehouse, FaStore, FaUsers } from "react-icons/fa";
import { Management, meeting } from "../assets";

const services = [
  {
    icon: <FaStore />,
    title: "Business Deliveries",
    text: "Reliable last-mile delivery coordination for retailers and SMEs.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <FaWarehouse />,
    title: "Bulk Distribution",
    text: "Efficient dispatch support for wholesalers and distributors.",
    image: meeting,
  },
  {
    icon: <FaBoxOpen />,
    title: "Ecommerce Fulfilment",
    text: "Order pickup, package handling, and delivery execution.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: <FaUsers />,
    title: "Dedicated Partnerships",
    text: "Structured logistics support for growing businesses.",
    image:
     Management,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-emerald-600 uppercase tracking-[0.2em] text-sm font-semibold">
            What We Offer
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-5 mb-6 leading-tight">
            Logistics services designed for business growth.
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed">
            Tura provides structured logistics coordination for modern
            businesses operating across Lagos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
