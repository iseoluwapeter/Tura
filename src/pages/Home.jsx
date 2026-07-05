import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Problems from "../components/Problems";
import HomeServices from "../components/HomeServices";
import HowItWorks from "../components/HowItWorks";
import WhyTura from "../components/WhyTura";
import HomeCTA from "../components/HomeCTA";
import Industries from "../components/Industries";
import PageSEO from "../components/PageSEO";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <PageSEO
        title="Home"
        description="Tuuraa provides managed, accountability-first delivery logistics for Lagos SMEs. Reliable, subscription-based last-mile delivery across the Lekki-Jakande corridor and beyond."
        canonical="https://tuuraalogistics.com/"
      />
      <Hero />
      <Mission />
      <Problems />
      <HomeServices />
      <HowItWorks />
      <Industries />
      <WhyTura />
      <HomeCTA
        badge="Managed Logistics Infrastructure"
        title="Ready to streamline"
        highlight="your deliveries?"
        description="Partner with Tuuraa and build a more reliable logistics operation structured, scalable, and built for modern urban commerce."
        primaryLabel="/pricing"
        secondaryLabel="/contact"
        primaryCta="Get Started"
        secondaryCta="Contact Us"
      />
    </div>
  );
};

export default Home;
