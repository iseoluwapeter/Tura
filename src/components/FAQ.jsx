import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    q: "What makes Tura different from regular dispatch services?",
    a: "Tura focuses on structured logistics operations rather than informal dispatching. Our approach emphasizes reliability, coordination, operational efficiency, and scalable business support.",
  },
  {
    q: "What types of businesses can use Tura?",
    a: "Tura is built for any business that moves products ecommerce brands, retail stores, food businesses, pharmacies, FMCG distributors, fashion labels, and more. If you operate in Lagos and need reliable delivery coordination, Tura is designed for you.",
  },
  {
    q: "Does Tura support warehouse-to-retailer distribution?",
    a: "Yes. Tura supports distribution operations including warehouse dispatch coordination and deliveries to retailers or customer locations across Lagos.",
  },
  {
    q: "How does Tura coordinate deliveries for my business?",
    a: "Once you submit an order through the dashboard, Tura matches it to the nearest available verified rider using proximity and load-balancing logic. You receive real-time status updates at every stage - pickup, in transit, and delivered.",
  },
  {
    q: "How do businesses get started with Tura?",
    a: "Businesses can contact the Tura operations team to discuss delivery requirements, operational needs, and suitable logistics arrangements.",
  },
];

const AccordionItem = ({ item, index, isOpen, onToggle }) => (
  <div className="border-b border-slate-100 last:border-0">
    <button
      onClick={onToggle}
      className="group w-full flex items-start justify-between gap-6 py-6 text-left focus:outline-none"
    >
      <div className="flex items-start gap-4 flex-1">
        <span className="shrink-0 mt-0.5 text-[11px] font-bold tracking-[0.15em] text-slate-300 w-6 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`text-[15px] font-semibold leading-snug transition-colors duration-200 ${
            isOpen
              ? "text-green-600"
              : "text-slate-800 group-hover:text-green-600"
          }`}
        >
          {item.q}
        </span>
      </div>

      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center border transition-colors duration-200 ${
          isOpen
            ? "border-green-500 bg-green-500 text-white"
            : "border-slate-200 bg-white text-slate-400 group-hover:border-green-400 group-hover:text-green-500"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="pl-10 pb-6 text-slate-500 text-[14.5px] leading-relaxed">
            {item.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative w-full py-28 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-75 rounded-full bg-green-50 blur-[100px] opacity-80" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 mb-5"
          >
            <div className="h-px w-8 bg-green-500" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-green-600 uppercase">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-4xl md:text-[2.75rem] font-bold text-slate-900 leading-[1.12] tracking-tight mb-4"
          >
            Common questions,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">answered</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={headerInView ? { scaleX: 1 } : {}}
                transition={{
                  delay: 0.55,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-green-100 origin-left z-0"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-500 text-[15px] leading-relaxed"
          >
            Everything you need to know about using Tura for your business
            deliveries in Lagos.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="border-t border-slate-100">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              index={i}
              isOpen={openId === i}
              onToggle={() => setOpenId((prev) => (prev === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
