import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ─── SVG Noise Filter (shared, reusable) ─── */
export const NoiseSVG = () => (
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
        />
        <feColorMatrix type="saturate" values="0" />
        <feBlend in="SourceGraphic" mode="overlay" />
        <feComposite in2="SourceGraphic" operator="in" />
      </filter>
    </defs>
  </svg>
);

/* ─── Animations ─── */
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

/* ─── Reusable CTA Component ─── */
const HomeCTA = ({
  badge,
  title,
  highlight,
  description,
  primaryCta,
  primaryLabel,
  secondaryLabel,
  secondaryCta,
}) => {
  return (
    <section className="px-6 md:px-10 py-14">
      <NoiseSVG />

      <motion.div
        className="relative w-full overflow-hidden rounded-3xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, #1a6b2f 0%, transparent 70%)," +
            "radial-gradient(ellipse 60% 80% at 80% 70%, #0d3d1a 0%, transparent 65%)," +
            "linear-gradient(145deg, #145220 0%, #0d3d1a 50%, #07240f 100%)",
          filter: "url(#cta-noise)",
        }}
      >
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-8 py-20 md:py-24"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          {badge && (
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-semibold tracking-widest uppercase text-emerald-300 mb-4 inline-block"
            >
              {badge}
            </motion.span>
          )}

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
            {title}{" "}
            {highlight && (
              <span style={{ fontStyle: "italic", color: "#6de88a" }}>
                {highlight}
              </span>
            )}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(200,235,205,0.8)" }}
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCta && (
              <Link to={primaryLabel}>
                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="px-8 py-3.5 rounded-xl text-sm font-bold"
                  style={{
                    background: "#f0faf2",
                    color: "#0d3d1a",
                  }}
                >
                  {primaryCta}
                </motion.button>
              </Link>
            )}

            {secondaryCta && (
              <Link to={secondaryLabel}>
                <motion.button
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="px-8 py-3.5 rounded-xl text-sm font-bold"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.28)",
                    color: "#f0faf2",
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {secondaryCta}
                </motion.button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
