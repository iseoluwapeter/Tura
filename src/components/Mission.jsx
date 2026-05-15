import React from "react";
import { MissionImage } from "../assets";

const Mission = () => {
  return (
    <section className="w-full py-24 ">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-green-600 font-semibold tracking-wide uppercase mb-4">
            Built for Growing Businesses
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Reliable logistics support for businesses that need to move fast
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            From ecommerce brands and retailers to distributors and SMEs, Tura
            helps businesses coordinate deliveries efficiently across Lagos with
            structured dispatch operations and dependable fulfillment support.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Industry Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Ecommerce Brands",
                "Retail Stores",
                "Food Businesses",
                "Distributors",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-orange-300 transition-all duration-300"
                >
                  <h3 className="font-semibold text-slate-800 text-lg">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-green-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Tura Exists</h3>

              <p className="text-slate-300 leading-relaxed">
                Too many businesses lose customers because deliveries are
                delayed, uncoordinated, or unreliable. Tura is building a more
                dependable logistics experience designed for the realities of
                modern commerce in Lagos.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={MissionImage}
                alt="Tura logistics operations"
                className="w-full h-125 object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 left-3 md:-left-8 bg-white shadow-xl border border-slate-200 rounded-2xl p-6 w-65">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="font-medium text-slate-700">Operational Focus</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">Lagos</h4>
                  <p className="text-slate-500 text-sm">
                    Focused delivery operations
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-slate-900">SME</h4>
                  <p className="text-slate-500 text-sm">
                    Business-centered logistics
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Scalable
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Structured dispatch support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Mission;
