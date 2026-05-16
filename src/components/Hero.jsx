import { useEffect, useState } from "react";

// ─── Live dispatch ticker ─────────────────────────────────────────────────────
const TICKER_ITEMS = [
  {
    id: "TRA-2841",
    zone: "Victoria Island",
    status: "Delivered",
    time: "2m ago",
  },
  {
    id: "TRA-2840",
    zone: "Lekki Phase 1",
    status: "In transit",
    time: "5m ago",
  },
  { id: "TRA-2839", zone: "Lagos Island", status: "Delivered", time: "9m ago" },
  { id: "TRA-2838", zone: "Ikoyi", status: "Delivered", time: "12m ago" },
];

function DispatchTicker() {
  return (
    <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span
            className="text-[10px] font-semibold tracking-[0.1em] uppercase text-gray-500"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Live dispatch feed
          </span>
        </div>
        <span
          className="text-[10px] text-emerald-600 font-medium"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Lagos network
        </span>
      </div>
      <div className="divide-y divide-gray-50">
        {TICKER_ITEMS.map((item, i) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 py-2"
            style={{
              animation: `tickerFade 0.4s ease forwards ${i * 80}ms`,
              opacity: 0,
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="text-[10px] text-gray-400"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {item.id}
              </span>
              <span className="text-[11.5px] text-gray-700 font-medium">
                {item.zone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  item.status === "Delivered"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {item.status}
              </span>
              <span className="text-[10px] text-gray-400">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay so CSS animations fire after paint
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes tickerFade {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
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
        .float-panel {
          animation: floatY 5s ease-in-out infinite;
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
        {/* Subtle dot-grid background */}
        <div className="hero-bg-dot absolute inset-0 opacity-40 pointer-events-none" />

        {/* Top-left emerald blob */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Bottom-right blob */}
        <div
          className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
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
              <div
                className="inline-flex items-center gap-2 self-start mb-7 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50"
                style={{
                  opacity: 0,
                  animation: mounted
                    ? "fadeSlideUp 0.5s ease forwards 0ms"
                    : "none",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span
                  className="text-[11px] font-semibold tracking-[0.1em] uppercase text-emerald-700"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  · Third party logistics
                </span>
              </div>

              {/* Headline */}
              <h1
                className="hero-headline text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08] font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  letterSpacing: "-0.02em",
                  opacity: 0,
                  animation: mounted
                    ? "fadeSlideUp 0.65s ease forwards 80ms"
                    : "none",
                }}
              >
                Last-mile logistics
                <br />
                with <em>judgment</em>,
                <br />
                not just speed.
              </h1>

              {/* Sub-headline */}
              <p
                className="text-[16.5px] text-gray-500 leading-[1.7] max-w-[480px] mb-8"
                style={{
                  opacity: 0,
                  animation: mounted
                    ? "fadeSlideUp 0.65s ease forwards 180ms"
                    : "none",
                }}
              >
                Tura handles your dispatch operations end-to-end — from manifest
                creation to proof of delivery — so your team can focus on the
                business, not the logistics.
              </p>

              {/* CTA row */}
              <div
                className="flex flex-wrap items-center gap-3 mb-10"
                style={{
                  opacity: 0,
                  animation: mounted
                    ? "fadeSlideUp 0.65s ease forwards 280ms"
                    : "none",
                }}
              >
                <a
                  href="/services"
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
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white text-[14px] font-semibold rounded-xl transition-all duration-150 shadow-lg shadow-emerald-700/25"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect
                      x="1"
                      y="2.5"
                      width="13"
                      height="10"
                      rx="2.5"
                      stroke="white"
                      strokeWidth="1.4"
                    />
                    <path d="M5.5 5.5l4 2-4 2V5.5z" fill="white" />
                  </svg>
                  Contact
                </a>
              </div>

              {/* Divider */}
              <div
                className="w-full h-px bg-gray-100 mb-8"
                style={{
                  opacity: 0,
                  animation: mounted
                    ? "fadeIn 0.5s ease forwards 380ms"
                    : "none",
                }}
              />
            </div>

            {/* ── RIGHT: Visual panel ─────────────────────────────────────── */}
            <div
              className="relative flex items-center justify-center lg:justify-end"
              style={{
                opacity: 0,
                animation: mounted ? "fadeIn 0.8s ease forwards 300ms" : "none",
              }}
            >
              {/* Decorative ring behind the card */}
              <div
                className="absolute w-[420px] h-[420px] rounded-full border-2 border-dashed border-emerald-100"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute w-[320px] h-[320px] rounded-full border border-emerald-50"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />

              {/* Main card */}
              <div className="float-panel relative w-full max-w-[440px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/15 border border-gray-100 bg-white">
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

                {/* GIF container */}
                <div className="relative bg-gray-900 aspect-[4/3] overflow-hidden">
                  <img
                    src="https://media.giphy.com/media/3o7qE2fiT5seO2lsNq/giphy.gif"
                    alt="Live logistics dispatch operations"
                    className="w-full h-full object-cover opacity-80"
                    loading="eager"
                  />

                  {/* Emerald overlay tint */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(5,150,105,0.18) 0%, transparent 60%, rgba(0,0,0,0.4) 100%)",
                    }}
                  />

                  {/* Floating metric badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/50">
                    <p
                      className="text-[9px] font-semibold tracking-[0.1em] uppercase text-gray-400"
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

                {/* Dispatch ticker */}
                <div className="relative h-[176px]">
                  <DispatchTicker />
                </div>
              </div>

              {/* Floating SLA badge — outside card, top-left */}
              <div
                className="absolute -left-4 top-16 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                style={{
                  animation: mounted
                    ? "fadeSlideRight 0.6s ease forwards 700ms"
                    : "none",
                  opacity: 0,
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-lg flex-shrink-0">
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
              </div>

              {/* Floating proof badge — bottom-left */}
              <div
                className="absolute -left-4 bottom-20 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                style={{
                  animation: mounted
                    ? "fadeSlideRight 0.6s ease forwards 820ms"
                    : "none",
                  opacity: 0,
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-lg flex-shrink-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
