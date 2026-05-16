import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MissionImage, TuraTruck } from "../assets";

const industries = [
  { label: "Ecommerce Brands", emoji: "🛍️" },
  { label: "Retail Stores", emoji: "🏪" },
  { label: "Food Businesses", emoji: "🍱" },
  { label: "Distributors", emoji: "📦" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
});

const Mission = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const leftRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Animation variants
  // const fadeUp = {
  //   hidden: { opacity: 0, y: 40 },
  //   visible: (i = 0) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  //   }),
  // };

  const slideLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 bg-white overflow-hidden"
    >
      {/* Faint background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Top-left ambient glow */}
      <div className="pointer-events-none absolute -top-24 -left-32 w-[500px] h-[400px] rounded-full bg-emerald-50 blur-[120px] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section Header ── */}
        <div ref={leftRef} className="mb-20">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-emerald-600 uppercase">
              Built for Growing Businesses
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
              className="text-4xl md:text-[3.25rem] font-bold text-slate-900 leading-[1.12] tracking-tight"
            >
              Reliable logistics for businesses that need to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">move fast</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={leftInView ? { scaleX: 1 } : {}}
                  transition={{
                    delay: 0.55,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-100 origin-left z-0"
                />
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
              className="text-lg text-slate-500 leading-relaxed md:pt-4"
            >
              From ecommerce brands and retailers to distributors and SMEs, Tura
              coordinates deliveries efficiently across Lagos with structured
              dispatch operations and dependable fulfilment support.
            </motion.p>
          </div>
          {/* end grid */}
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Industry tiles */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.3 },
                },
              }}
            >
              {industries.map(({ label, emoji }) => (
                <motion.div
                  key={label}
                  variants={fadeUp(0)}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-5 hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-sm transition-all duration-300 cursor-default"
                >
                  <span className="text-xl">{emoji}</span>
                  <span className="font-semibold text-slate-800 text-[15px] group-hover:text-emerald-800 transition-colors duration-200">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission statement card */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
              className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white"
            >
              {/* Decorative circle blob */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-600/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-emerald-500/10 blur-xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-emerald-400 uppercase">
                    Our Mission
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-snug">
                  Why Tura Exists
                </h3>

                <p className="text-slate-400 leading-relaxed text-[15px]">
                  Too many businesses lose customers because deliveries are
                  delayed, uncoordinated, or unreliable. Tura is building a more
                  dependable logistics experience designed for the realities of
                  modern commerce in Lagos.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-end justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideLeft}
          >
            {/* Green silhouette blob backdrop */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[40%_60%_55%_45%/50%_40%_60%_50%]"
              style={{
                width: "88%",
                height: "72%",
                background: "linear-gradient(160deg, #2d7a3a 0%, #1a4a20 100%)",
                zIndex: 0,
              }}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
              }}
            />

            {/* Faint ring accent */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-green-400/20"
              style={{ width: "92%", height: "76%", zIndex: 1 }}
            />

            {/* Truck image — transparent, no wrapper background */}
            <motion.img
              src={TuraTruck}
              alt="Tura Delivery Truck"
              className="relative z-10 w-full object-contain drop-shadow-2xl"
              style={{ maxHeight: "420px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.25,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            />

            {/* Floating "Active dispatches" pill */}
            <motion.div
              className="absolute top-6 right-4 z-20 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-lg"
              style={{
                background: "rgba(255,255,255,0.92)",
                color: "#1a4a20",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(45,122,58,0.2)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Live dispatches active
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;


// import React, { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { MissionImage, TuraTruck } from "../assets";

// const industries = [
//   { label: "Ecommerce Brands", emoji: "🛍️" },
//   { label: "Retail Stores", emoji: "🏪" },
//   { label: "Food Businesses", emoji: "🍱" },
//   { label: "Distributors", emoji: "📦" },
// ];

// const fadeUp = (delay = 0) => ({
//   hidden: { opacity: 0, y: 28 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
//   },
// });

// const Mission = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const leftRef = useRef(null);

//   const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
//   const imageInView = useInView(imageRef, { once: true, margin: "-80px" });

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });
//   const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);

//   return (
//     <section ref={sectionRef} className="relative w-full py-28 bg-white overflow-hidden">
//       {/* Faint background grid */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.022]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
//           backgroundSize: "52px 52px",
//         }}
//       />

//       {/* Top-left ambient glow */}
//       <div className="pointer-events-none absolute -top-24 -left-32 w-[500px] h-[400px] rounded-full bg-emerald-50 blur-[120px] opacity-80" />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
//         {/* ── Section Header ── */}
//         <div ref={leftRef} className="mb-20">
//           <motion.div
//             variants={fadeUp(0)}
//             initial="hidden"
//             animate={leftInView ? "visible" : "hidden"}
//             className="flex items-center gap-2.5 mb-8"
//           >
//             <div className="h-px w-8 bg-emerald-500" />
//             <span className="text-[11px] font-semibold tracking-[0.2em] text-emerald-600 uppercase">
//               Built for Growing Businesses
//             </span>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-10 items-start">
//             <motion.h2
//               variants={fadeUp(0.1)}
//               initial="hidden"
//               animate={leftInView ? "visible" : "hidden"}
//               className="text-4xl md:text-[3.25rem] font-bold text-slate-900 leading-[1.12] tracking-tight"
//             >
//               Reliable logistics for businesses that need to{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10">move fast</span>
//                 <motion.span
//                   initial={{ scaleX: 0 }}
//                   animate={leftInView ? { scaleX: 1 } : {}}
//                   transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//                   className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-100 origin-left z-0"
//                 />
//               </span>
//             </motion.h2>

//           <motion.p
//             variants={fadeUp(0.2)}
//             initial="hidden"
//             animate={leftInView ? "visible" : "hidden"}
//             className="text-lg text-slate-500 leading-relaxed md:pt-4"
//           >
//             From ecommerce brands and retailers to distributors and SMEs, Tura
//             coordinates deliveries efficiently across Lagos with structured
//             dispatch operations and dependable fulfilment support.
//           </motion.p>
//           </div>{/* end grid */}
//         </div>{/* end header */}

//         {/* ── Two-column grid ── */}
//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

//           {/* LEFT */}
//           <div className="space-y-6">
//             {/* Industry tiles */}
//             <motion.div
//               className="grid grid-cols-2 gap-3"
//               initial="hidden"
//               animate={leftInView ? "visible" : "hidden"}
//               variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
//             >
//               {industries.map(({ label, emoji }) => (
//                 <motion.div
//                   key={label}
//                   variants={fadeUp(0)}
//                   whileHover={{ y: -3, transition: { duration: 0.2 } }}
//                   className="group flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-5 hover:border-emerald-200 hover:bg-emerald-50/40 hover:shadow-sm transition-all duration-300 cursor-default"
//                 >
//                   <span className="text-xl">{emoji}</span>
//                   <span className="font-semibold text-slate-800 text-[15px] group-hover:text-emerald-800 transition-colors duration-200">
//                     {label}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Mission statement card */}
//             <motion.div
//               variants={fadeUp(0.5)}
//               initial="hidden"
//               animate={leftInView ? "visible" : "hidden"}
//               className="relative overflow-hidden rounded-3xl bg-slate-950 p-8 text-white"
//             >
//               {/* Decorative circle blob */}
//               <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-600/20 blur-2xl" />
//               <div className="pointer-events-none absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-emerald-500/10 blur-xl" />

//               <div className="relative z-10">
//                 <div className="flex items-center gap-2 mb-5">
//                   <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
//                   </span>
//                   <span className="text-[11px] font-semibold tracking-[0.18em] text-emerald-400 uppercase">
//                     Our Mission
//                   </span>
//                 </div>

//                 <h3 className="text-2xl font-bold mb-4 leading-snug">
//                   Why Tura Exists
//                 </h3>

//                 <p className="text-slate-400 leading-relaxed text-[15px]">
//                   Too many businesses lose customers because deliveries are
//                   delayed, uncoordinated, or unreliable. Tura is building a more
//                   dependable logistics experience designed for the realities of
//                   modern commerce in Lagos.
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT — Image with green silhouette */}
//           <div ref={imageRef} className="relative flex items-end justify-center">

//             {/* Green silhouette block — sits behind the truck */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={imageInView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute bottom-0 left-4 right-4 h-[78%] rounded-3xl bg-emerald-700"
//             />

//             {/* Truck image — floats above the green block */}
//             <motion.div
//               style={{ y: imageY }}
//               initial={{ opacity: 0, y: 24 }}
//               animate={imageInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
//               className="relative z-10 w-full"
//             >
//               <img
//                 src={TuraTruck}
//                 alt="Tura Delivery Truck"
//                 className="w-full h-[420px] object-contain object-bottom drop-shadow-2xl"
//               />
//             </motion.div>

//             {/* Floating stat pill — top right */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={imageInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute top-6 -right-4 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-5 py-4 flex items-center gap-3 border border-slate-50 z-20"
//             >
//               <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4.5 h-4.5 text-emerald-600">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-[10px] text-slate-400 leading-none mb-1 font-medium">Coverage</p>
//                 <p className="text-slate-900 font-bold text-base leading-none">All of Lagos</p>
//               </div>
//             </motion.div>

//             {/* Floating stat pill — bottom left */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={imageInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.65, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute bottom-6 -left-4 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-5 py-4 flex items-center gap-3 border border-slate-50 z-20"
//             >
//               <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4.5 h-4.5 text-indigo-500">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-[10px] text-slate-400 leading-none mb-1 font-medium">Daily dispatches</p>
//                 <p className="text-slate-900 font-bold text-base leading-none">500+ orders</p>
//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;
