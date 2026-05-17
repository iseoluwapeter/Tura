import React from "react";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Problems from "../components/Problems";
import HomeServices from "../components/HomeServices";
import HowItWorks from "../components/HowItWorks";
import WhyTura from "../components/WhyTura";
import HomeCTA from "../components/HomeCTA";
import Industries from "../components/Industries";

const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Problems />
      <HomeServices />
      <HowItWorks />
      <Industries />
      <WhyTura />
      <HomeCTA/>
    </div>
  );
};

export default Home;
