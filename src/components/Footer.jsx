import React from "react";
import { IconWhite, TuraLogo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-16 ">
      <div className="px-6 md:px-20 grid md:grid-cols-4 gap-10">
        <div>
          <img src={IconWhite} alt="Tura" className="w-35" />
          <p className="text-slate-400 mt-4">
            Structured logistics infrastructure for growing businesses across
            Nigeria.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/services">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            {/* <li>Contact</li> */}
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
            <li>
              Email:<br></br>{" "}
              <span className="md:text-sm lg:text-[17px]">
                hello@tuuraalogistics.com
              </span>
            </li>
            <li>
              Phone: <br></br>+234 704 023 4374
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-slate-500 mt-12 text-sm">
        © {new Date().getFullYear()} Tuuraa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
