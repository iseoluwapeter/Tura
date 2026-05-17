import React from "react";
import HeroSection from "./HeroSection";
const PACKAGES = [
  {
    id: "spark",
    name: "Spark",
    persona: "For solo-run shops testing dispatch",
    price: 18000,
    highlight: false,
    badge: null,
    cta: "Get started",
    href: "/onboard",
    features: [
      "Manifest creation & tracking",
      "Up to 5 drops per run",
      "Standard operator pool",
      "Push notification updates",
      "Basic proof of delivery",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    persona: "For small pharmacies & boutiques",
    price: 35000,
    highlight: false,
    badge: null,
    cta: "Get started",
    href: "/onboard",
    features: [
      "Everything in Spark",
      "Up to 10 drops per run",
      "Verified operator tier access",
      "WhatsApp delivery alerts",
      "Timestamped proof of delivery",
    ],
  },
  {
    id: "essential",
    name: "Essential",
    persona: "For growing supermarkets & retailers",
    price: 65000,
    highlight: true,
    badge: "Most popular",
    cta: "Get started",
    href: "/onboard",
    features: [
      "Everything in Starter",
      "Up to 20 drops per run",
      "Priority operator assignment",
      "Multi-channel alerts (Push · WhatsApp · SMS)",
      "Same-day SLA guarantee",
      "WHT-compliant payout records",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    persona: "For high-volume B2B operations",
    price: 110000,
    highlight: false,
    badge: null,
    cta: "Talk to us",
    href: "/contact",
    features: [
      "Everything in Essential",
      "Unlimited drops per run",
      "Dedicated operator squad",
      "Account manager support",
      "Custom SLA & invoicing",
      "API access (coming soon)",
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
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 22,
            alignItems: "start",
          }}
        >
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                position: "relative",
                background: pkg.highlight ? "#f0fdf4" : "#ffffff",
                border: pkg.highlight
                  ? "2px solid #059669"
                  : "1.5px solid #e5e7eb",
                borderRadius: 24,
                padding: "30px 24px 24px",
                boxShadow: pkg.highlight
                  ? "0 10px 30px rgba(5,150,105,0.12)"
                  : "0 2px 10px rgba(0,0,0,0.04)",
              }}
            >
              {pkg.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#059669",
                    color: "#fff",
                    padding: "5px 14px",
                    borderRadius: 999,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              <p
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: pkg.highlight ? "#059669" : "#9ca3af",
                  marginBottom: 8,
                  fontFamily: "monospace",
                }}
              >
                {pkg.name}
              </p>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "#6b7280",
                  marginBottom: 20,
                }}
              >
                {pkg.persona}
              </p>

              <div style={{ marginBottom: 22 }}>
                <span
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 38,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#111827",
                  }}
                >
                  {formatPrice(pkg.price)}
                </span>

                <span
                  style={{
                    marginLeft: 5,
                    fontSize: 13,
                    color: "#9ca3af",
                  }}
                >
                  / month
                </span>
              </div>

              <div
                style={{
                  borderTop: "1px solid",
                  borderColor: pkg.highlight ? "#bbf7d0" : "#f3f4f6",
                  paddingTop: 18,
                  marginBottom: 24,
                }}
              >
                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        color: "#059669",
                        fontWeight: 700,
                        fontSize: 13,
                        marginTop: 1,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>

                    <span
                      style={{
                        fontSize: 13.5,
                        color: "#374151",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={pkg.href}
                style={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: 14,
                  fontSize: 14,
                  fontWeight: 600,
                  background: pkg.highlight ? "#059669" : "transparent",
                  color: pkg.highlight ? "#ffffff" : "#059669",
                  border: pkg.highlight ? "none" : "1.5px solid #059669",
                  boxShadow: pkg.highlight
                    ? "0 6px 18px rgba(5,150,105,0.22)"
                    : "none",
                }}
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
