import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import HomeCTA from "../components/HomeCTA";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80&fit=crop",
  team: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&fit=crop",
  delivery:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&fit=crop",
  warehouse:
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&fit=crop",
  handshake:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&fit=crop",
  rider:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop",
  office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&fit=crop",
};

const VALUES = [
  {
    icon: "⚡",
    title: "Speed Without Compromise",
    desc: "We treat every delivery like it was our own urgent, precise, and done right the first time.",
  },
  {
    icon: "🤝",
    title: "Partnership Over Transaction",
    desc: "SMEs are not just clients to us. They are partners we grow with, one delivery at a time.",
  },
  {
    icon: "🔍",
    title: "Full Visibility",
    desc: "No black boxes. Merchants always know exactly where their goods are and when they arrive.",
  },
  {
    icon: "📐",
    title: "Built for Scale",
    desc: "From small operations to multi-location enterprises, Tura scales with your logistics demands.",
  },
];

const STATS = [
  { value: "2,400+", label: "Deliveries completed" },
  { value: "98%", label: "On-time rate" },
  { value: "40+", label: "SME partners" },
  { value: "3", label: "Lagos zones covered" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const Company = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="bg-[#FAFAF8] text-[#111] overflow-x-hidden  relative">
      {/* Faint background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* HERO */}
      <HeroSection
        badgeText="Nigeria thrives on businesses."
        title="Businesses keep the economy moving."
        highlightText="We keep them running.."
        description="Tura is a B2B logistics service built for the businesses that power Nigeria's economy from retail chains and manufacturers to distributors, producers, and growing enterprises that refuse to be held back by unreliable logistics infrastructure."
      />
      {/* ABOUT */}
      <section
        className="px-[6vw] py-24 font-poppins"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <FadeIn>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              {/* Badge */}
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-700">
                Our story
              </div>

              {/* Headline */}
              <h2 className="mb-6 text-[clamp(32px,4vw,56px)] font-bold leading-[1.12] text-[#111]">
                Fixing <em className="italic text-green-700">Logistics.</em>
                <br />
                Powering execution
              </h2>

              <p className="mb-5 text-[clamp(15px,1.2vw,17px)] font-light leading-[1.8] text-[#444]">
                Across Nigeria, businesses lose revenue daily not because demand
                is missing, but because logistics fails at the point of
                execution missed deliveries, unreliable dispatch, lack of
                visibility, and no accountable system when things go wrong.
              </p>

              <p className="text-[clamp(15px,1.2vw,17px)] font-light leading-[1.8] text-[#444]">
                Tura was built to solve this gap not as a courier service, but
                as a logistics operations partner for businesses that need
                structure, reliability, and scale. We manage the execution layer
                so businesses can focus on growth, with the confidence that
                every delivery is tracked, coordinated, and completed.
              </p>
            </div>

            {/* Images */}
            <div className="relative pb-10 pr-10">
              <div className="group relative aspect-4/3 overflow-hidden rounded">
                <img
                  src={IMAGES.delivery}
                  alt="Delivery operations"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 z-10 hidden aspect-3/4 w-[48%] overflow-hidden rounded border-[5px] border-[#FAFAF8] lg:block">
                <img
                  src={IMAGES.rider}
                  alt="Tura rider on the move"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* WHAT TURA STANDS FOR */}

      <section
        className="px-[6vw] py-24"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <FadeIn>
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-14">
            <div className="lg:order-2">
              <div className="group relative aspect-3/4 overflow-hidden rounded">
                <img
                  src={IMAGES.handshake}
                  alt="Business partnership"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:order-1">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-600">
                What we stand for
              </div>

              <h2 className="mb-6  text-[clamp(32px,4vw,56px)] font-bold leading-[1.12] text-[#111]">
                The meaning
                <br />
                behind <em className="italic text-green-600">TURA</em>
              </h2>

              <p className="text-[clamp(15px,1.2vw,17px)] font-light leading-[1.8] text-[#444]">
                Every letter in our name is a commitment. These aren't corporate
                values pinned to a wall they're the operating principles our
                team lives by in every dispatch, every drop, every interaction.
              </p>

              <div className="mt-10">
                {[
                  {
                    letter: "T",
                    word: "Trustworthy",
                    meaning:
                      "SMEs trust us with their goods, their customers, and their reputation. We treat that seriously.",
                  },
                  {
                    letter: "U",
                    word: "Unwavering",
                    meaning:
                      "Traffic, weather, high volumes we don't find excuses. We find solutions.",
                  },
                  {
                    letter: "R",
                    word: "Reliable",
                    meaning:
                      "Consistency is the product. Every delivery on time, every time, no surprises.",
                  },
                  {
                    letter: "A",
                    word: "Accountable",
                    meaning:
                      "We own outcomes. When something goes wrong, we show up not disappear.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.letter}
                    className={`flex items-start gap-6 border-[#EEEAE4] py-5 ${
                      index === 0 ? "border-t" : ""
                    } border-b`}
                  >
                    <span className="min-w-11 text-[40px] font-bold leading-none text-green-600">
                      {item.letter}
                    </span>

                    <div>
                      <div className="mb-1 text-[17px] font-semibold text-[#111]">
                        {item.word}
                      </div>

                      <div className="text-[14px] font-light leading-[1.65] text-[#777]">
                        {item.meaning}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden bg-[#111] px-[6vw] py-24">
        <div className="pointer-events-none absolute right-[-4vw] top-1/2 hidden -translate-y-1/2 font-serif text-[28vw] font-bold leading-none text-white/3 lg:block">
          TURA
        </div>

        <FadeIn>
          <div className="relative z-10 max-w-190">
            <div
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-600"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our mission
            </div>

            <div className="mb-10 border-l-[3px] border-green-600 pl-7 font-serif text-[clamp(22px,2.8vw,38px)] font-light italic leading-[1.55] text-white">
              "To remove logistics as a ceiling on SME growth in Lagos giving
              every merchant the operational muscle of a large enterprise, at a
              price that makes sense for a growing business."
            </div>

            <p
              className="max-w-145 text-[16px] font-light leading-[1.85] text-white/60"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We believe the informal economy of Lagos is not informal by
              choice. It is informal by circumstance. When the right
              infrastructure shows up structured, affordable, accountable these
              businesses scale. That's what Tura is here to do.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* VALUES */}
      <section
        className="bg-[#F5F3EE] px-[6vw] py-18"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <FadeIn>
          <div className="mb-14 max-w-155">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-600">
              How we work
            </div>

            <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-bold leading-[1.12] text-[#111]">
              Our <em className="italic text-green-600">operating values</em>
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-md border-2 border-[#E5E5E0] bg-[#E5E5E0] md:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-[#FAFAF8] p-8 transition hover:bg-[#FFF8ED]"
              >
                <span className="mb-5 block text-[28px]">{v.icon}</span>

                <div className="mb-2 text-[17px] font-semibold tracking-[-0.01em] text-[#111]">
                  {v.title}
                </div>

                <div className="text-[14px] font-light leading-[1.75] text-[#666]">
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* TEAM */}
      <section
        className="px-[6vw] py-24"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <FadeIn>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-600">
                Our people
              </div>

              <h2 className="mb-6  text-[clamp(32px,4vw,56px)] font-bold leading-[1.12] text-[#111]">
                A team that <em className="italic text-green-600">shows up</em>
              </h2>

              <p className="mb-5 text-[clamp(15px,1.2vw,17px)] font-light leading-[1.8] text-[#444]">
                Tura is built by people who understand Nigeria’s business
                environment — its operational complexity, its regional
                differences, and the coordination it takes to keep commerce
                moving across cities and markets. Our operations team,
                dispatchers, and network partners are not just service providers
                they are part of the system that makes execution possible.
              </p>

              <p className="text-[clamp(15px,1.2vw,17px)] font-light leading-[1.8] text-[#444]">
                We invest in training, structure, and accountability because the
                quality of execution depends on the strength of the people
                behind it. When the system is well-run and the operators are
                supported, businesses experience consistency and consistency is
                what drives growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group col-span-2 aspect-16/10 overflow-hidden rounded">
                <img
                  src={IMAGES.team}
                  alt="Tura team collaborating"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group aspect-4/3 overflow-hidden rounded">
                <img
                  src={IMAGES.office}
                  alt="Team at work"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group aspect-4/3 overflow-hidden rounded">
                <img
                  src={IMAGES.warehouse}
                  alt="Warehouse operations"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      {/* CTA */}
      <HomeCTA
        badge="Managed Logistics Infrastructure"
        title="Built for businesses"
        highlight="that don’t settle for broken logistics"
        description="Tura partners with growing and enterprise teams to design and run reliable logistics operations structured, scalable, and built for modern commerce."
        primaryLabel="/contact"
        secondaryLabel="/pricing"
        primaryCta="Talk to Us"
        secondaryCta="See Pricing"
      />
    </div>
  );
};

export default Company;
