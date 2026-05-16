import React from "react";
import ServicesHero from "../components/ServiceHero";
import TrustStrip from "../components/TrustStrip";
import ServicesSection from "../components/ServicesSection";
import HomeCTA from "../components/HomeCTA";
import FAQ from "../components/FAQ";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <TrustStrip/>
      <ServicesSection/>
     <FAQ/>
      <HomeCTA/>
    </div>
  );
};

export default Services;
