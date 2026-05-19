import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "framer-motion";
import { Warehouse } from "../assets";

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeSlideUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: -18 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const floatY = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
  },
};

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500&display=swap');

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        .hero-headline em {
          font-style: italic;
          color: #059669;
        }
        .gradient-text {
          background: linear-gradient(135deg, #059669 0%, #0d9488 50%, #047857 100%);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-bg-dot {
          background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>

      <section
        className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Dot-grid background */}
        <div className="hero-bg-dot absolute inset-0 opacity-40 pointer-events-none" />

        {/* Top-left emerald blob */}
        <div
          className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-right blob */}
        <div
          className="absolute -bottom-24 -right-24 w-100 h-100 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-350 mx-auto px-6 lg:px-10 w-full py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-64px)]">
            {/* ── LEFT: Copy ─────────────────────────────────────────────── */}
            <div className="flex flex-col justify-center">
              {/* Eyebrow pill */}
              <motion.div
                className="inline-flex items-center gap-2 self-start mb-7 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50"
                variants={fadeSlideUp}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                custom={0}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span
                  className="text-[11px] font-semibold tracking-widest uppercase text-emerald-700"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Managed Logistics Infrastructure
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="hero-headline text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08] font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  letterSpacing: "-0.02em",
                }}
                variants={fadeSlideUp}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                custom={0.08}
              >
                Last-mile logistics
                <br />
                with <em>operational intelligence</em>,
                <br />
                not just speed.
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                className="text-[16.5px] text-gray-500 leading-[1.7] max-w-120 mb-8"
                variants={fadeSlideUp}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                custom={0.18}
              >
                Tura runs your dispatch operations end-to-end from manifest
                planning to proof of delivery so your team can focus on
                growth, not coordination chaos.
              </motion.p>

              {/* CTA row */}
              <motion.div
                className="flex flex-wrap items-center gap-3 mb-10"
                variants={fadeSlideUp}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                custom={0.28}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 text-[14px] font-medium rounded-xl transition-all duration-150"
                >
                  Explore services
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-[14px] font-semibold rounded-xl transition-all duration-150 shadow-lg shadow-emerald-700/25"
                >
                  <FiPhoneCall className="text-[16px]" />
                  Contact
                </Link>
              </motion.div>

              {/* Divider */}
              <motion.div
                className="w-full h-px bg-gray-100 mb-8"
                variants={fadeIn}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                custom={0.38}
              />
            </div>

            {/* ── RIGHT: Visual panel ─────────────────────────────────────── */}
            <motion.div
              className="relative flex items-center justify-center lg:justify-end"
              variants={fadeIn}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              custom={0.3}
            >
              {/* Decorative rings */}
              <div
                className="absolute w-105 h105 rounded-full border-2 border-dashed border-emerald-100"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute w-[320px] h-80 rounded-full border border-emerald-50"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Main card — floats gently */}
              <motion.div
                className="relative w-full max-w-110 rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/15 border border-gray-100 bg-white"
                animate={floatY.animate}
              >
                {/* Card header bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span
                    className="ml-3 text-[10.5px] text-gray-400"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    tura — live dispatch
                  </span>
                  <span className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span
                      className="text-[10px] text-emerald-600 font-medium"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      LIVE
                    </span>
                  </span>
                </div>

                {/* Logistics image */}
                <div className="relative bg-gray-900 aspect-4/3 overflow-hidden">
                  <img
                    src={Warehouse}
                    alt="Logistics warehouse operations"
                    className="w-full h-full object-cover opacity-85"
                    loading="eager"
                  />

                  {/* Emerald overlay tint */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(5,150,105,0.18) 0%, transparent 60%, rgba(0,0,0,0.45) 100%)",
                    }}
                  />

                  {/* Floating metric badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/50">
                    <p
                      className="text-[9px] font-semibold tracking-widest uppercase text-gray-400"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Active runs
                    </p>
                    <p
                      className="text-[22px] font-bold text-gray-900 leading-tight"
                      style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                      }}
                    >
                      24
                    </p>
                  </div>

                  {/* Bottom-left zone tag */}
                  <div className="absolute bottom-4 left-4 bg-emerald-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p
                      className="text-[11px] font-semibold text-white"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Third party logistics
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating SLA badge */}
              <motion.div
                className="absolute -left-4 top-16 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                variants={fadeSlideRight}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                custom={0.7}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-lg shrink-0">
                  ⚡
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-900">
                    Same-day SLA
                  </p>
                  <p className="text-[10.5px] text-gray-400">
                    Express tier active
                  </p>
                </div>
              </motion.div>

              {/* Floating proof badge */}
              <motion.div
                className="absolute -left-4 bottom-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                variants={fadeSlideRight}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                custom={0.82}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-lg shrink-0">
                  📋
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-gray-900">
                    Proof of delivery
                  </p>
                  <p className="text-[10.5px] text-gray-400">
                    Signed · timestamped
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
