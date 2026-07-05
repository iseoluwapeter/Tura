import React, { useEffect } from "react";
import ServicesHero from "../components/ServiceHero";
import TrustStrip from "../components/TrustStrip";
import ServicesSection from "../components/ServicesSection";
import HomeCTA from "../components/HomeCTA";
import FAQ from "../components/FAQ";
import PageSEO from "../components/PageSEO";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <PageSEO
        title="Services"
        description="Managed last-mile delivery, coordinator-led logistics, and 4PL orchestration for SMEs across Lagos. Explore Tuuraa's service tiers built for recurring business needs."
        canonical="https://tuuraalogistics.com/services"
      />

      <ServicesHero />
      <TrustStrip />
      <ServicesSection />
      <FAQ />
      <HomeCTA
        badge="Managed Logistics Infrastructure"
        title="Ready to streamline"
        highlight="your deliveries?"
        description="Partner with Tura and build a more reliable logistics operation structured, scalable, and built for modern urban commerce."
        primaryLabel="/pricing"
        secondaryLabel="/contact"
        primaryCta="Get Started"
        secondaryCta="Contact Us"
      />
    </div>
  );
};

export default Services;
