import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MissionImage } from "../assets";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Submit Manifests",
    description:
      "Businesses log delivery requests through the Tuuraa dashboard specifying pickup, destination, and priority.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tuuraa Coordinates",
    description:
      "Our platform matches the order to the nearest available rider using intelligent proximity and load balancing.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Riders Dispatch",
    description:
      "Verified Tuuraa riders pick up and execute deliveries efficiently, following optimized routes across Lagos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Live Updates",
    description:
      "Businesses receive real-time status notifications at every stage — pickup, in transit, and delivered.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const StepCard = ({ step, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative flex gap-6 items-start"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="absolute left-6.75 top-14 w-px h-[calc(100%+2rem)] bg-linear-to-b from-slate-200 to-transparent" />
      )}

      {/* Step number bubble */}
      <div className="relative z-10 shrink-0">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-slate-400 group-hover:text-green-500 group-hover:border-green-100 group-hover:shadow-[0_4px_20px_rgba(99,102,241,0.12)] transition-all duration-300"
        >
          {step.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex items-center gap-3 mb-1.5">
          <span className="text-[11px] font-semibold tracking-[0.15em] text-green-700 uppercase">
            {step.number}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-700 transition-colors duration-200">
          {step.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 bg-white overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-150 h-150 rounded-full bg-indigo-50 blur-[100px] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-20"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-px w-8 bg-indigo-400" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-green-500 uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
            Deliveries made{" "}
            <span className="relative inline-block">
              <span className="relative z-10">effortless</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-100 origin-left z-0"
              />
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
            A structured four-step workflow designed to move products across
            Lagos with speed, visibility, and zero guesswork.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT — Steps */}
          <div>
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}

            {/* Bottom CTA card */}
            <motion.div
              variants={fadeUp}
              custom={steps.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-2 flex items-center gap-4 bg-green-950 rounded-2xl px-6 py-5"
            >
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-0.5">
                  Ready to streamline your deliveries?
                </p>
                <p className="text-slate-400 text-xs">
                  Join hundreds of Lagos businesses on Tuuraa.
                </p>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="shrink-0 bg-white hover:bg-green-400 text-green-900 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
                >
                  Book a consultation →
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Image with floating stats */}
          <div ref={imageRef} className="relative lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: imageY }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img
                src={MissionImage}
                alt="Logistics operations in Lagos"
                className="w-full h-130 object-cover"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={imageInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -left-5 top-10 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-5 py-4 flex items-center gap-3 border border-slate-50"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="w-5 h-5 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 leading-none mb-1">
                  Delivery success
                </p>
                <p className="text-slate-900 font-bold text-lg leading-none">
                  98.3%
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={imageInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.55,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -right-5 bottom-16 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-5 py-4 flex items-center gap-3 border border-slate-50"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="w-5 h-5 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 leading-none mb-1">
                  Always on time
                </p>
                {/* <p className="text-slate-900 font-bold text-lg leading-none">
                  47 min
                </p> */}
              </div>
            </motion.div>

            {/* Active orders pill */}
            {/* <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.7,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-slate-950/80 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2.5 border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-white text-xs font-medium">
                240+ active orders right now
              </span>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
