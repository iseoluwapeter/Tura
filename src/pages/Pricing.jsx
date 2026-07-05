import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";

const PACKAGES = [
  {
    id: "spark",
    name: "Spark",
    persona: "For small businesses starting structured daily deliveries",
    highlight: false,
    badge: null,
    cta: "Get started",
    href: "/contact",
    headerColor: "from-stone-700 to-stone-500",
    features: [
      "15 deliveries usable across any 45 consecutive days",
      "Class M goods handling only",
      "Single pickup address within operating zone",
      "Dedicated Tura operations manager",
      "One-time rollover of unused drops",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    persona: "For businesses with recurring weekly or daily deliveries",
    highlight: false,
    badge: null,
    cta: "Talk to operations",
    href: "/contact",
    headerColor: "from-cyan-900 to-cyan-700",
    features: [
      "Up to 100 deliveries per calendar month",
      "Class M goods handling only",
      "Single pickup location within one contiguous zone",
      "Dedicated Tura operations manager",
      "Daily manifest processing & dispatch coordination",
      "End-of-day completion summary",
    ],
  },
  {
    id: "essential",
    name: "Essential",
    persona: "For brands with high-volume daily dispatch needs",
    highlight: false,
    badge: "",
    cta: "Request pricing",
    href: "/contact",
    headerColor: "from-violet-900 to-violet-600",
    features: [
      "Up to 250 deliveries per calendar month",
      "Class M goods handling only",
      "Multiple pickup points within operating zone",
      "Dedicated Tura operations manager",
      "Daily manifest processing & dispatch coordination",
      "End-of-day completion reporting",
      "Monthly written performance summary",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    persona:
      "For expanding SMEs with structured daily logistics operations across multiple zones",
    highlight: true,
    badge: "Most popular",
    cta: "Talk to us",
    href: "/contact",
    headerColor: "from-emerald-700 to-emerald-400",
    features: [
      "Up to 500 deliveries per calendar month",
      "Class M standard delivery support",
      "Class V delivery available at scoped rates",
      "Expanded coverage across multiple zones",
      "Dedicated Tura operations manager",
      "Daily manifest processing & dispatch coordination",
      "End-of-day completion reporting",
      "Weekly written performance reports",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    persona: "For enterprise with high-density daily dispatch needs",
    highlight: false,
    badge: "",
    cta: "Get a quote",
    href: "/contact",
    headerColor: "from-gray-950 via-gray-800 to-gray-950",
    features: [
      "Custom fleet operations from ₦950,000 per month",
      "Dedicated multi-vehicle logistics coordination",
      "Dashboard and API Integration",
      "Class M standard & Class V vehicle operations",
      "Real-time run tracking with proactive delay & exception updates",
      "Weekly performance reporting & monthly commercial reviews",
      "Dedicated operations contact with direct phone access",
    ],
  },
];

const Pricing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#ffffff",
        minHeight: "100vh",
        padding: "72px 24px 96px",
      }}
    >
      <PageSEO
        title="Pricing"
        description="Flexible subscription plans for managed logistics in Lagos — from startup-friendly Spark to enterprise-scale Scale. Transparent pricing built for growing SMEs."
        canonical="https://tuuraalogistics.com/pricing"
      />

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        {/* Hero */}
        <HeroSection
          badgeText="Simple, transparent pricing"
          title="Flexible logistics plans"
          highlightText="built for Nigerian businesses"
          description="Scale your deliveries with predictable pricing and real-time tracking."
        />

        {/* Pricing cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start max-w-5xl mx-auto px-4">
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`
        relative rounded-3xl overflow-hidden
        ${i === 3 ? "sm:col-start-1 lg:col-start-1 lg:translate-x-1/2" : ""}
        ${i === 4 ? "sm:col-start-2 lg:col-start-2 lg:translate-x-1/2" : ""}
        ${
          pkg.highlight
            ? "bg-green-50 border-2 border-emerald-600 shadow-[0_10px_30px_rgba(5,150,105,0.12)]"
            : "bg-white border border-gray-200 shadow-sm"
        }
      `}
            >
              {/* Plan name header band */}
              <div
                className={`px-8 pt-8 pb-5 bg-linear-to-r ${pkg.headerColor} relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 blur-2xl bg-white" />
                {pkg.badge && (
                  <div className="mb-3 inline-flex bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {pkg.badge}
                  </div>
                )}
                <h3
                  className="text-[28px] font-black tracking-tight text-white leading-none"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {pkg.name}
                </h3>
              </div>

              {/* Card body */}
              <div className="px-8 pt-5 pb-6">
                {/* Persona */}
                <p className="text-[13px] leading-relaxed text-gray-500 mb-5">
                  {pkg.persona}
                </p>

                {/* Features */}
                <div
                  className={`border-t pt-4 mb-6 ${
                    pkg.highlight ? "border-green-200" : "border-gray-100"
                  }`}
                >
                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 mb-3"
                    >
                      <span className="text-emerald-600 font-bold text-[13px] mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span className="text-[13.5px] text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={pkg.href}
                  className={`block text-center no-underline px-4 py-3 rounded-2xl text-sm font-semibold transition-opacity hover:opacity-90 ${
                    pkg.highlight
                      ? "bg-emerald-600 text-white shadow-[0_6px_18px_rgba(5,150,105,0.22)]"
                      : "bg-transparent text-emerald-600 border border-emerald-600"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Pricing;
