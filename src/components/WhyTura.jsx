import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdVerifiedUser } from "react-icons/md";
import { RiStoreLine } from "react-icons/ri";
import { TbChartBar } from "react-icons/tb";
import { BsBriefcase } from "react-icons/bs";

const features = [
  {
    title: "Reliable Operations",
    desc: "Structured logistics execution designed for consistency and predictable delivery outcomes across every order.",
    stat: "96.7%",
    statLabel: "On-time rate",
    icon: <MdVerifiedUser className="w-8 h-8" />,
  },
  {
    title: "Built for SMEs",
    desc: "Designed specifically for small and growing businesses in Lagos that need dependable, affordable delivery infrastructure.",
    stat: "80+",
    icon: <RiStoreLine className="w-8 h-8" />,
  },
  {
    title: "Scalable System",
    desc: "Whether it's 10 or 10,000 deliveries, Tuuraa's infrastructure scales seamlessly with your business without operational overhead.",
    stat: "10×",
    statLabel: "Scale capacity",
    icon: <TbChartBar className="w-8 h-8" />,
  }
  
];



const SLIDE_DURATION = 5000;

const ArrowButton = ({ direction, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.94 }}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    // Fixed: removed from flex row, no layout-disrupting width on small screens
    className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all duration-200"
  >
    {direction === "prev" ? (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    )}
  </motion.button>
);

// Fixed: removed x translation — use opacity + blur only to avoid overflow issues
const variants = {
  enter: {
    opacity: 0,
    filter: "blur(6px)",
  },
  center: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhyTura = () => {
  const [[index, dir], setSlide] = useState([0, 1]);

  const go = useCallback(
    (next) => {
      const d = next > index ? 1 : -1;
      setSlide([(next + features.length) % features.length, d]);
    },
    [index],
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const t = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(t);
  }, [index, next]);

  const feature = features[index];

  return (
    // Fixed: overflow-hidden on section itself clips the ambient glow but prevents x-scroll
    <section className="w-full py-28 bg-white overflow-hidden relative">
      {/* Ambient top glow — kept inside relative section so absolute positioning works */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-32 w-175 h-75 rounded-full bg-indigo-50 blur-[100px] opacity-70" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-px w-8 bg-green-600" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-green-700 uppercase">
              Why Tuuraa
            </span>
            <div className="h-px w-8 bg-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Why businesses choose Tuuraa
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-lg leading-relaxed">
            Purpose-built logistics infrastructure for Lagos businesses that
            can't afford disruptions.
          </p>
        </motion.div>

        {/* Carousel row — Fixed: gap-4, items-center removed to prevent flex blowout */}
        <div className="flex items-center gap-3 sm:gap-5">
          <ArrowButton direction="prev" onClick={prev} />

          {/* Content stage — Fixed: min-w-0 ensures flex child can shrink */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                // Fixed: w-full so it never exceeds parent; min-w-0 on the grid children
                className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center w-full"
              >
                {/* LEFT — Text */}
                <div className="min-w-0">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-green-600 flex items-center justify-center mb-8">
                    {feature.icon}
                  </div>

                  <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-400 uppercase mb-3">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(features.length).padStart(2, "0")}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-5 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-slate-500 text-lg leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Dots */}
                  <div className="flex gap-2 mt-10">
                    {features.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => go(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className="relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
                        style={{
                          width: i === index ? 32 : 16,
                          background: i === index ? "transparent" : "#e2e8f0",
                        }}
                      >
                        {i === index && (
                          <span className="absolute inset-0 rounded-full bg-green-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Stat + decorative. Fixed: w-full + max-w so circle never overflows */}
                <div className="min-w-0 flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-55 aspect-square mx-auto">
                    {/* Background glow — Fixed: inset-0 relative to this container, no fixed px size */}
                    <div className="absolute inset-0 rounded-full bg-indigo-50 blur-2xl opacity-80" />

                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                      {/* Outer dashed ring */}
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90 opacity-10"
                        viewBox="0 0 200 200"
                      >
                        <circle
                          cx="100"
                          cy="100"
                          r="96"
                          fill="none"
                          stroke="#169146"
                          strokeWidth="1.5"
                          strokeDasharray="6 6"
                        />
                      </svg>

                      {/* Progress arc */}
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        viewBox="0 0 200 200"
                      >
                        <circle
                          cx="100"
                          cy="100"
                          r="88"
                          fill="none"
                          stroke="#e0e7ff"
                          strokeWidth="1"
                        />
                        <motion.circle
                          key={index}
                          cx="100"
                          cy="100"
                          r="88"
                          fill="none"
                          stroke="#169146"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 88}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                          animate={{
                            strokeDashoffset:
                              2 *
                              Math.PI *
                              88 *
                              (1 - (index + 1) / features.length),
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </svg>

                      {/* Center stat */}
                      <motion.div
                        key={`stat-${index}`}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.15,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-center"
                      >
                        <p className="text-4xl font-bold text-slate-900 tracking-tight leading-none">
                          {feature.stat}
                        </p>
                        <p className="text-sm text-slate-400 mt-2 font-medium tracking-wide">
                          {feature.statLabel}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Tags */}
                  <motion.div
                    key={`tags-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex gap-2 mt-8 flex-wrap justify-center"
                  >
                    {["Lagos Focused", "SME Ready", "Realtime"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <ArrowButton direction="next" onClick={next} />
        </div>
      </div>
    </section>
  );
};

export default WhyTura;
