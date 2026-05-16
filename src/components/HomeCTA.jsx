import React from "react";
import { motion } from "framer-motion";

/* ─── Inline SVG Gaussian noise filter ─────────────────────────────────────
   Rendered into a <defs> block and referenced as a CSS filter URI.
   baseFrequency controls grain density; numOctaves adds complexity.          */
const NoiseSVG = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <filter
        id="cta-noise"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.68"
          numOctaves="4"
          stitchTiles="stitch"
          result="noiseOut"
        />
        <feColorMatrix
          type="saturate"
          values="0"
          in="noiseOut"
          result="grayNoise"
        />
        <feBlend
          in="SourceGraphic"
          in2="grayNoise"
          mode="overlay"
          result="blended"
        />
        <feComposite in="blended" in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
);

/* ─── Animation variants ─────────────────────────────────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonHover = {
  scale: 1.04,
  transition: { type: "spring", stiffness: 340, damping: 18 },
};
const buttonTap = { scale: 0.97 };

/* ─── Component ─────────────────────────────────────────────────────────── */
const HomeCTA = () => {
  return (
    <section className="px-6 md:px-10 py-14" >
      {/* Hidden SVG noise filter definition */}
      <NoiseSVG />

      <motion.div
        className="relative w-full overflow-hidden rounded-3xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          /* Rich forest-green mesh gradient as the base */
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, #1a6b2f 0%, transparent 70%)," +
            "radial-gradient(ellipse 60% 80% at 80% 70%, #0d3d1a 0%, transparent 65%)," +
            "linear-gradient(145deg, #145220 0%, #0d3d1a 50%, #07240f 100%)",
          /* Apply the Gaussian noise as a CSS filter */
          filter: "url(#cta-noise)",
        }}
      >
        {/* ── Noise + gradient layer (opacity controls grain strength) ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.55,
            mixBlendMode: "soft-light",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        {/* ── Decorative light orbs ── */}
        <motion.div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(74,200,100,0.18) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(30,160,65,0.14) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* ── Thin top highlight line ── */}
        <div
          className="absolute top-0 left-12 right-12 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          }}
        />

        {/* ── Content ── */}
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-8 py-20 md:py-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          /* Remove the noise filter from text so it stays crisp */
          style={{ filter: "none" }}
        >
          

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-black leading-[1.06] tracking-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#f0faf2",
              fontFamily: "'DM Serif Display', Georgia, serif",
            }}
          >
            Ready to streamline{" "}
            <span style={{ fontStyle: "italic", color: "#6de88a" }}>
              your deliveries?
            </span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(200,235,205,0.8)" }}
          >
            Partner with Tura and build a more reliable logistics operation for
            your business structured, scalable, and built for Lagos.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary */}
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="relative overflow-hidden rounded-xl px-8 py-3.5 text-sm font-bold shadow-lg"
              style={{
                background: "#f0faf2",
                color: "#0d3d1a",
                letterSpacing: "0.02em",
              }}
            >
              <motion.span
                className="absolute inset-0 rounded-xl"
                style={{ background: "rgba(45,180,80,0.15)" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              <span className="relative">Get Started</span>
            </motion.button>

            {/* Secondary */}
            <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="relative overflow-hidden rounded-xl px-8 py-3.5 text-sm font-bold"
              style={{
                border: "1.5px solid rgba(255,255,255,0.28)",
                color: "#f0faf2",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(6px)",
                letterSpacing: "0.02em",
              }}
            >
              <motion.span
                className="absolute inset-0 rounded-xl"
                style={{ background: "rgba(255,255,255,0.08)" }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              <span className="relative">Contact Us</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Bottom fade edge ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(7,36,15,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default HomeCTA;
