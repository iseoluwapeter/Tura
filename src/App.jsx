import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Company from "./pages/Company";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
