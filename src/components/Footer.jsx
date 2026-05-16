import React from "react";
import { TuraLogo } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-10">
        <div>
          <img src={TuraLogo} alt="Tura" className="w-20 md:w-40" />
          <p className="text-slate-400">
            Structured logistics for growing businesses in Lagos.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Last-Mile Delivery</li>
            <li>Bulk Dispatch</li>
            <li>Tracking</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>Email: hello@tura.com</li>
            <li>Phone: +234 XXX XXX XXXX</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-slate-500 mt-12 text-sm">
        © {new Date().getFullYear()} Tura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
