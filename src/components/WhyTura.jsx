import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
  FaLayerGroup,
  FaBriefcase,
} from "react-icons/fa";

const WhyTura = () => {
  const features = [
    {
      title: "Reliable Operations",
      desc: "Structured logistics operations designed to reduce delays and improve delivery consistency.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Built for SMEs",
      desc: "Designed specifically for small and growing businesses that need dependable delivery support.",
      icon: <FaUsers />,
    },
    {
      title: "Scalable System",
      desc: "Whether it's 10 or 10,000 deliveries, Tura is built to scale with your business growth.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Business Focused",
      desc: "We focus on helping businesses improve fulfillment, customer satisfaction, and delivery efficiency.",
      icon: <FaBriefcase />,
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % features.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Why Businesses Choose Tura
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white border shadow-lg rounded-3xl p-10 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-green-200-600 text-2xl">
                  {features[index].icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {features[index].title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-lg leading-relaxed">
                {features[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prev}
              className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-100 transition"
            >
              ← Prev
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === index ? "bg-green-500" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-100 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTura;


// import React from "react";
// import Slider from "react-slick";
// import { FaTruck, FaUsers, FaChartLine, FaBriefcase } from "react-icons/fa";

// const WhyTura = () => {
//   const items = [
//     {
//       title: "Reliable Operations",
//       desc: "Structured logistics execution designed for consistency and predictable delivery outcomes.",
//       icon: FaTruck,
//     },
//     {
//       title: "Built for SMEs",
//       desc: "Designed specifically for small and growing businesses that need dependable delivery support.",
//       icon: FaUsers,
//     },
//     {
//       title: "Scalable System",
//       desc: "Easily supports increasing delivery volume as your business grows across Lagos.",
//       icon: FaChartLine,
//     },
//     {
//       title: "Business Focused",
//       desc: "Logistics built around operational needs, not just dispatching packages.",
//       icon: FaBriefcase,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//   };

//   return (
//     <section className="w-full py-24 bg-slate-50">
//       <div className="max-w-3xl mx-auto px-6 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//           Why Businesses Choose Tura
//         </h2>

//         <p className="text-slate-600 mb-12">
//           Built for reliability, scalability, and structured logistics
//           operations.
//         </p>

//         <Slider {...settings}>
//           {items.map((item, i) => {
//             const Icon = item.icon;

//             return (
//               <div key={i} className="px-4">
//                 <div className="flex flex-col items-center text-center py-12">
//                   {/* ICON (now safe) */}
//                   <Icon className="text-orange-500 text-5xl mb-6" />

//                   <h3 className="text-2xl font-semibold text-slate-900 mb-4">
//                     {item.title}
//                   </h3>

//                   <p className="text-slate-600 max-w-md">{item.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default WhyTura;

