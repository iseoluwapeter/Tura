import React from "react";
import HeroSection from "./HeroSection";
const PACKAGES = [
  {
    id: "spark",
    name: "Spark",
    persona: "For solo-run shops testing dispatch",
    price: 45000,
    highlight: false,
    badge: null,
    cta: "Get started",
    href: "/onboard",
    features: [
      "15 deliveries usable across any 45 consecutive days",
      "Class M goods handling only",
      "Single pickup address within operating zone",
      "Dedicated Tura operations contact via WhatsApp & phone",
      "One-time rollover of unused drops into the next Spark cycle",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    persona: "For businesses with recurring weekly or daily deliveries",
    price: 180000,
    highlight: false,
    badge: null,
    cta: "Get started",
    href: "/onboard",
    features: [
      "Up to 100 deliveries per calendar month",
      "Class M goods handling only",
      "Single pickup location within one contiguous zone",
      "Dedicated Tura operations contact",
      "Daily manifest processing & dispatch coordination",
      "End-of-day completion summary",
    ],
  },
  {
    id: "essential",
    name: "Essential",
    persona: "For brands with high-volume daily dispatch needs",
    price: 320000,
    highlight: true,
    badge: "Most popular",
    cta: "Get started",
    href: "/onboard",
    features: [
      "Up to 250 deliveries per calendar month",
      "Class M goods handling only",
      "Multiple pickup points within operating zone",
      "Dedicated Tura operations contact",
      "Daily manifest processing & dispatch coordination",
      "End-of-day completion reporting",
      "Monthly written performance summary",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    persona:
      "For expanding SMEs with structured daily logistics operations across multiple Lagos zones",
    price: 580000,
    highlight: false,
    badge: null,
    cta: "Talk to us",
    href: "/contact",
    features: [
      "Up to 500 deliveries per calendar month",
      "Class M standard delivery support",
      "Class V delivery available at scoped van operator rates",
      "Expanded coverage across in multiple zones",
      "Dedicated Tura operations contact",
      "Daily manifest processing & dispatch coordination",
      "End-of-day completion reporting",
      "Weekly written performance reports",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    persona: "For brands with high-volume daily dispatch needs",
    price: 950000,
    highlight: false,
    badge: "",
    cta: "Get started",
    href: "/onboard",
    features: [
      "Custom fleet operations from ₦950,000 per month",
      "Dedicated multi-vehicle logistics coordination",
      "Class M standard support with scoped Class V vehicle operations",
      "Nightly route sheet planning for all active vehicles",
      "Real-time run tracking with proactive delay & exception updates",
      "Weekly performance reporting & monthly commercial reviews",
      "Dedicated operations contact with direct phone access",
    ],
  },
];

function formatPrice(price) {
  return `₦${price.toLocaleString("en-NG")}`;
}

const Pricing = () => {
  return (
    <main
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#ffffff",
        minHeight: "100vh",
        padding: "72px 24px 96px",
      }}
    >
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
        relative rounded-3xl p-8 pb-6
        ${i === 3 ? "sm:col-start-1 lg:col-start-1 lg:translate-x-1/2" : ""}
        ${i === 4 ? "sm:col-start-2 lg:col-start-2 lg:translate-x-1/2" : ""}
        ${
          pkg.highlight
            ? "bg-green-50 border-2 border-emerald-600 shadow-[0_10px_30px_rgba(5,150,105,0.12)]"
            : "bg-white border border-gray-200 shadow-sm"
        }
      `}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}

              {/* Plan name */}
              <p
                className={`font-mono text-[10.5px] font-bold tracking-[0.12em] uppercase mb-2 ${
                  pkg.highlight ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                {pkg.name}
              </p>

              {/* Persona */}
              <p className="text-[13px] leading-relaxed text-gray-500 mb-5">
                {pkg.persona}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="font-serif text-[38px] font-bold tracking-tight text-gray-900">
                  {formatPrice(pkg.price)}
                </span>
                <span className="ml-1 text-[13px] text-gray-400">/ month</span>
              </div>

              {/* Features */}
              <div
                className={`border-t pt-4 mb-6 ${
                  pkg.highlight ? "border-green-200" : "border-gray-100"
                }`}
              >
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 mb-3">
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
              <a
                href={pkg.href}
                className={`block text-center no-underline px-4 py-3 rounded-2xl text-sm font-semibold transition-opacity hover:opacity-90 ${
                  pkg.highlight
                    ? "bg-emerald-600 text-white shadow-[0_6px_18px_rgba(5,150,105,0.22)]"
                    : "bg-transparent text-emerald-600 border border-emerald-600"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Pricing;
