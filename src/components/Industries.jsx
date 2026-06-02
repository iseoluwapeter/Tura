import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaShoppingBag,
  FaStore,
  FaCapsules,
  FaTshirt,
  FaBoxOpen,
} from "react-icons/fa";

const industries = [
  {
    title: "FMCG",
    desc: "Fast-moving consumer goods distribution and retail delivery operations across Lagos.",
    Icon: FaBoxOpen,
    accent: "from-white/10 to-transparent",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    borderHover: "hover:border-white/30",
  },
  {
    title: "E-Commerce",
    desc: "Reliable last-mile delivery support for online businesses and marketplaces.",
    Icon: FaShoppingBag,
    accent: "from-white/10 to-transparent",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    borderHover: "hover:border-white/30",
  },
  {
    title: "Retail",
    desc: "Structured logistics coordination for stores and growing retail brands.",
    Icon: FaStore,
    accent: "from-white/10 to-transparent",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    borderHover: "hover:border-white/30",
  },
  {
    title: "Fashion",
    desc: "Fast deliveries for fashion brands, boutiques, and apparel businesses.",
    Icon: FaTshirt,
    accent: "from-white/10 to-transparent",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    borderHover: "hover:border-white/30",
  },
  {
    title: "Pharma",
    desc: "Coordinated dispatch support for pharmacies and healthcare-related deliveries.",
    Icon: FaCapsules,
    accent: "from-white/10 to-transparent",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    borderHover: "hover:border-white/30",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const IndustryCard = ({ industry, index }) => {
  const { title, desc, Icon, accent, iconBg, iconColor, borderHover } =
    industry;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      className={`group relative overflow-hidden border-b border-white/20 ${borderHover} transition-all duration-500 p-8 cursor-default`}
    >
      {/* Backdrop blur layer — only on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-white/3" />

      {/* Hover gradient sweep */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr ${accent}`}
      />

      {/* Ghost icon watermark */}
      <Icon className="absolute -right-4 -bottom-4 text-[96px] text-white/4 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:text-white/[0.07]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon bubble */}
        <div
          className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-1`}
        >
          <Icon className={`${iconColor} text-lg`} />
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-green-100/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
          {desc}
        </p>

        {/* Subtle bottom arrow hint on hover */}
        <div className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span
            className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${iconColor}`}
          >
            Learn more
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className={`w-3 h-3 ${iconColor}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Industries = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full py-28 overflow-hidden bg-green-950 text-white">
      {/* Depth gradient — darkens toward edges, stays on-brand */}
      <div className="absolute inset-0 bg-linear-to-b from-green-700/60 via-transparent to-green-700/60" />

      {/* Faint glow blobs — brand-tinted */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-125 h-125 rounded-full bg-green-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-green-800/40 blur-[120px]" />

      {/* Faint horizontal rule across top */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Header ── */}
        <div ref={headerRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="h-px w-8 bg-white/60" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase">
              Industries We Serve
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight"
            >
              Logistics built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400">
                  modern businesses
                </span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-green-100/70 text-lg leading-relaxed md:pb-1"
            >
              Tuuraa supports businesses across multiple industries with
              structured delivery coordination, scalable dispatch, and reliable
              last-mile logistics.
            </motion.p>
          </div>
        </div>

        {/* ── Industry Grid ── */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/20"
        >
          {industries.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}

       
        </motion.div>
      </div>

      {/* Faint horizontal rule across bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default Industries;
