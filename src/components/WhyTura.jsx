import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Reliable Operations",
    desc: "Structured logistics execution designed for consistency and predictable delivery outcomes across every order.",
    stat: "98.3%",
    statLabel: "On-time rate",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "Built for SMEs",
    desc: "Designed specifically for small and growing businesses in Lagos that need dependable, affordable delivery infrastructure.",
    stat: "1,200+",
    statLabel: "SMEs served",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Scalable System",
    desc: "Whether it's 10 or 10,000 deliveries, Tura's infrastructure scales seamlessly with your business without operational overhead.",
    stat: "10×",
    statLabel: "Scale capacity",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
  {
    title: "Business Focused",
    desc: "Every feature in Tura is built around operational needs — fulfillment, visibility, and customer satisfaction, not just dispatching packages.",
    stat: "47 min",
    statLabel: "Avg. delivery",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
];

const SLIDE_DURATION = 5000;

const ArrowButton = ({ direction, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.94 }}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex-shrink-0"
  >
    {direction === "prev" ? (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-5 h-5"
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
        className="w-5 h-5"
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

const variants = {
  enter: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 48 : -48,
    filter: "blur(4px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -48 : 48,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
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
    <section className="w-full py-28 bg-white overflow-hidden">
      {/* Ambient top glow */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-32 w-[700px] h-[300px] rounded-full bg-indigo-50 blur-[100px] opacity-70" />

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
              Why Tura
            </span>
            <div className="h-px w-8 bg-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Why businesses choose Tura
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-lg leading-relaxed">
            Purpose-built logistics infrastructure for Lagos businesses that
            can't afford disruptions.
          </p>
        </motion.div>

        {/* Carousel row */}
        <div className="flex items-center gap-8 lg:gap-12">
          <ArrowButton direction="prev" onClick={prev} />

          {/* Content stage */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* LEFT — Text */}
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-green-600 flex items-center justify-center mb-8">
                    {feature.icon}
                  </div>

                  {/* Step counter */}
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
                        className="group relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
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

                {/* RIGHT — Stat + decorative */}
                <div className="relative flex flex-col items-center justify-center">
                  {/* Large decorative number */}
                  <div className="relative">
                    {/* Background glow circle */}
                    <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-indigo-50 blur-2xl opacity-80" />

                    <div className="relative z-10 flex flex-col items-center justify-center w-64 h-64">
                      {/* Outer ring */}
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
                        <p className="text-5xl font-bold text-slate-900 tracking-tight leading-none">
                          {feature.stat}
                        </p>
                        <p className="text-sm text-slate-400 mt-2 font-medium tracking-wide">
                          {feature.statLabel}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Small floating tags */}
                  <motion.div
                    key={`tags-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex gap-2 mt-10 flex-wrap justify-center"
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
