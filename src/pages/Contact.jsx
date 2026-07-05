import React, { useState, useEffect } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import HomeCTA from "../components/HomeCTA";
import PageSEO from "../components/PageSEO";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+234 704 023 4374",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "hello@tuuraa.ng",
    },
    {
      icon: <FiMapPin />,
      label: "Address",
      value: "14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
    },
    {
      icon: <FiMessageCircle />,
      label: "WhatsApp",
      value: "+234 704 023 4374",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="min-h-screen bg-[#F7F5F0] "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <PageSEO
        title="Contact"
        description="Get in touch with Tuuraa to onboard your business for managed logistics in Lagos. Talk to our team about delivery plans tailored to your operations."
        canonical="https://tuuraalogistics.com/contact"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-green-600 mb-4">
            <span className="w-7 h-px bg-green-600" />
            Get in touch
          </div>

          <h1 className=" font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#1A1714] max-w-xl">
            We're always <em className="text-green-800 italic">here</em> to
            help.
          </h1>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <p className="text-[#5A534C] font-light leading-relaxed max-w-md mb-12">
              Whether you’re looking to improve your logistics operations,
              partner with Tuuraa, or make an enquiry. Our team is ready to
              assist.
            </p>

            <div className="space-y-7">
              {contactItems.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl border border-green-600/20 bg-green-500/20 text-[#1A1714] text-lg">
                    {item.icon}
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-green-600 mb-1">
                      {item.label}
                    </div>
                    <div className="text-[#1A1714] text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - FORM (NO WHITE GRADIENT) */}
          <div className="bg-[#F2EFE8] border border-[#E7E2DA] rounded-2xl p-8">
            {!submitted ? (
              <>
                <h2 className=" text-2xl mb-1">Send a message</h2>
                <p className="text-sm text-[#8A7F76] mb-8">
                  We’ll respond within one business day.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-white border border-[#E7E2DA] focus:border-green-600 outline-none"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-white border border-[#E7E2DA] focus:border-green-600 outline-none"
                  />
                </div>

                <input
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mb-4 px-4 py-3 rounded-xl bg-white border border-[#E7E2DA] focus:border-green-600 outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mb-6 px-4 py-3 rounded-xl bg-white border border-[#E7E2DA] focus:border-green-600 outline-none min-h-30"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-800 text-[#F7F5F0] py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition"
                >
                  Send message
                  <FiSend />
                </button>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-800 flex items-center justify-center text-green-600text-2xl">
                  ✓
                </div>
                <h2 className="font-serif text-2xl mb-2">Message sent!</h2>
                <p className="text-sm text-[#5A534C]">
                  Thanks {form.name.split(" ")[0] || "there"}, we’ll get back to
                  you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <HomeCTA
        badge="Managed Logistics Infrastructure"
        title="Let’s support"
        highlight="your operations"
        description="Tell us what you need from daily dispatch to full logistics management and our team will get back to you with a structured plan for your business."
        primaryLabel="mailto:hello@tuuraa.com"
        secondaryLabel="/pricing"
        primaryCta="Send a Message"
        secondaryCta="View Pricing"
      />
    </div>
  );
};

export default Contact;
