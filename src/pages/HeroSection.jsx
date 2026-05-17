import React from "react";

export default function HeroSection({
  badgeText = "Transparent monthly pricing",
  title = "Logistics infrastructure",
  highlightText = "for modern Lagos businesses",
  description = "Every package includes verified operators, manifest tracking, proof of delivery, and operational visibility for your business.",
  containerStyle = {},
  badgeStyle = {},
  titleStyle = {},
  highlightStyle = {},
  descriptionStyle = {},
}) {
  return (
    <section
      style={{
        textAlign: "center",
        marginBottom: 60,
        ...containerStyle,
      }}
    >
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 14px",
          borderRadius: 999,
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          marginBottom: 22,
          ...badgeStyle,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#059669",
          }}
        />

        <span
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#059669",
            fontFamily: "monospace",
          }}
        >
          {badgeText}
        </span>
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          color: "#111827",
          marginBottom: 18,
          ...titleStyle,
        }}
      >
        {title}
        <br />
        <em
          style={{
            color: "#059669",
            ...highlightStyle,
          }}
        >
          {highlightText}
        </em>
      </h1>

      {/* Description */}
      <p
        style={{
          maxWidth: 580,
          margin: "0 auto",
          fontSize: 16,
          lineHeight: 1.8,
          color: "#6b7280",
          ...descriptionStyle,
        }}
      >
        {description}
      </p>
    </section>
  );
}
