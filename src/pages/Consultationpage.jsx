import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiPackage,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

import {
  initialFormData,
  businessTypes,
  volumeOptions,
  setupOptions,
  challengeOptions,
  tierOptions,
  timelineOptions,
} from "../components/constant";
import { supabase } from "../components/supabaseClient";

export default function ConsultationPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleChallenge = (value) => {
    setFormData((prev) => {
      const exists = prev.primaryChallenges.includes(value);
      return {
        ...prev,
        primaryChallenges: exists
          ? prev.primaryChallenges.filter((c) => c !== value)
          : [...prev.primaryChallenges, value],
      };
    });
  };

  const isValid =
    formData.fullName.trim() !== "" &&
    formData.businessName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.businessType !== "" &&
    formData.monthlyVolume !== "" &&
    formData.consent;

  const resetForm = () => {
    // Spread into a new object so we never hold a reference to the shared
    // initialFormData constant (and so its primaryChallenges array can't
    // accidentally be mutated elsewhere).
    setFormData({ ...initialFormData, primaryChallenges: [] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      setErrorMessage(
        "Please fill in the required fields and accept the consent notice.",
      );
      return;
    }
    setStatus("submitting");
    setErrorMessage("");

    try {
      const { error } = await supabase.from("consultation_requests").insert([
        {
          full_name: formData.fullName,
          business_name: formData.businessName,
          role: formData.role,
          email: formData.email,
          phone: formData.phone,
          business_type: formData.businessType,
          monthly_volume: formData.monthlyVolume,
          delivery_zones: formData.deliveryZones,
          current_setup: formData.currentSetup,
          primary_challenges: formData.primaryChallenges,
          tier_interest: formData.tierInterest,
          timeline: formData.timeline,
          message: formData.message,
          consent: formData.consent,
        },
      ]);

      if (error) throw error;

      resetForm();
      setStatus("success");
    } catch (err) {
      console.error("Consultation request submission failed:", err);
      setStatus("error");
      setErrorMessage(
        err?.message
          ? `Something went wrong. Please try again or reach us on WhatsApp.`
          : "Something went wrong sending your request. Please try again or reach us on WhatsApp.",
      );
    }
  };

  if (status === "success") {
    return (
      <section className="min-h-[70vh] bg-[#F5F3EE] flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full bg-white rounded-2xl border border-black/5 p-10 text-center"
        >
          <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
            <FaCheckCircle className="w-7 h-7 text-emerald-700" />
          </div>
          <h2 className="font-serif text-3xl text-neutral-900 mb-3">
            Request received
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            The Tuuraa team will reach out within one business day to schedule
            your consultation.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-emerald-800 font-medium hover:text-emerald-900 transition-colors"
            >
              Back to home <FiArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-2 text-neutral-500 font-medium hover:text-neutral-700 transition-colors"
            >
              Submit another request
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-[#F5F3EE] py-20 px-6 md:px-20">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-xs tracking-wide uppercase text-emerald-700 font-medium mb-3">
              Book a consultation
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-4 leading-tight">
              Let's map your logistics onto a plan built for it
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Tell us about how your business ships today. We'll come to the
              call with a tier recommendation and zone coverage already worked
              out, not a generic pitch.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-8 items-start">
            {/* Context sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <FiClock
                      className="w-4 h-4 text-emerald-700"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-700 font-medium mb-0.5">
                      Response time
                    </p>
                    <p className="text-sm text-neutral-700">
                      We respond within one business day with next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <FiPhone
                      className="w-4 h-4 text-emerald-700"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-700 font-medium mb-0.5">
                      Prefer to talk now
                    </p>
                    <p className="text-sm text-neutral-700">
                      +234 704 023 4374
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <FiMail
                      className="w-4 h-4 text-emerald-700"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-700 font-medium mb-0.5">
                      Email
                    </p>
                    <p className="text-sm text-neutral-700">
                      hello@tuuraalogistics.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                    <FiMapPin
                      className="w-4 h-4 text-emerald-700"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-700 font-medium mb-0.5">
                      Office
                    </p>
                    <p className="text-sm text-neutral-700">
                      14 Admiralty Way, Lekki Phase 1, Lagos
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl border border-black/5 p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Section 1: Contact */}
                <fieldset>
                  <legend className="text-xs uppercase tracking-wide text-emerald-700 font-medium mb-4">
                    About you
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="sr-only">
                        Full name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          updateField("fullName", e.target.value)
                        }
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="sr-only">
                        Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        placeholder="Role (e.g. Founder, Ops manager)"
                        value={formData.role}
                        onChange={(e) => updateField("role", e.target.value)}
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessName" className="sr-only">
                        Business name
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        required
                        placeholder="Business name"
                        value={formData.businessName}
                        onChange={(e) =>
                          updateField("businessName", e.target.value)
                        }
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="Business email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Section 2: Business context */}
                <fieldset>
                  <legend className="text-xs uppercase tracking-wide text-emerald-700 font-medium mb-4">
                    Your business
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="businessType"
                        className="block text-sm text-neutral-600 mb-1.5"
                      >
                        Business type
                      </label>
                      <select
                        id="businessType"
                        required
                        value={formData.businessType}
                        onChange={(e) =>
                          updateField("businessType", e.target.value)
                        }
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      >
                        <option value="" disabled>
                          Select business type
                        </option>
                        {businessTypes.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="monthlyVolume"
                        className="block text-sm text-neutral-600 mb-1.5"
                      >
                        Monthly delivery volume
                      </label>
                      <select
                        id="monthlyVolume"
                        required
                        value={formData.monthlyVolume}
                        onChange={(e) =>
                          updateField("monthlyVolume", e.target.value)
                        }
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        {volumeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="deliveryZones"
                      className="block text-sm text-neutral-600 mb-1.5"
                    >
                      Where do you deliver most?
                    </label>
                    <input
                      id="deliveryZones"
                      type="text"
                      placeholder="e.g. Lekki, Jakande, Island-wide, Mainland"
                      value={formData.deliveryZones}
                      onChange={(e) =>
                        updateField("deliveryZones", e.target.value)
                      }
                      className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="currentSetup"
                      className="block text-sm text-neutral-600 mb-1.5"
                    >
                      Current delivery setup
                    </label>
                    <select
                      id="currentSetup"
                      value={formData.currentSetup}
                      onChange={(e) =>
                        updateField("currentSetup", e.target.value)
                      }
                      className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                    >
                      <option value="" disabled>
                        Select current setup
                      </option>
                      {setupOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </fieldset>

                {/* Section 3: Needs */}
                <fieldset>
                  <legend className="text-xs uppercase tracking-wide text-emerald-700 font-medium mb-4">
                    What you need
                  </legend>

                  <div className="mb-5">
                    <p className="block text-sm text-neutral-600 mb-2.5">
                      Biggest challenge right now (select all that apply)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {challengeOptions.map((opt) => {
                        const selected = formData.primaryChallenges.includes(
                          opt.value,
                        );
                        return (
                          <button
                            type="button"
                            key={opt.value}
                            onClick={() => toggleChallenge(opt.value)}
                            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                              selected
                                ? "bg-emerald-800 border-emerald-800 text-white"
                                : "bg-white border-neutral-200 text-neutral-600 hover:border-emerald-300"
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label
                        htmlFor="tierInterest"
                        className="block text-sm text-neutral-600 mb-1.5"
                      >
                        Tier you're considering
                      </label>
                      <select
                        id="tierInterest"
                        value={formData.tierInterest}
                        onChange={(e) =>
                          updateField("tierInterest", e.target.value)
                        }
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      >
                        <option value="" disabled>
                          Select a tier
                        </option>
                        {tierOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm text-neutral-600 mb-1.5"
                      >
                        When are you looking to start?
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) =>
                          updateField("timeline", e.target.value)
                        }
                        className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 bg-white"
                      >
                        <option value="" disabled>
                          Select timeline
                        </option>
                        {timelineOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      Anything else
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Anything else worth knowing before the call?"
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 resize-y"
                    />
                  </div>
                </fieldset>

                <div>
                  <label className="flex items-start gap-3 text-sm text-neutral-600 mb-6">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => updateField("consent", e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-emerald-700 focus:ring-emerald-600/30"
                    />
                    <span>
                      I agree to Tuuraa contacting me about this request and
                      processing my information in line with the privacy policy.
                    </span>
                  </label>

                  {errorMessage && (
                    <p className="text-sm text-red-600 mb-4">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-8 py-3.5 rounded-full transition-colors"
                  >
                    {status === "submitting"
                      ? "Sending…"
                      : "Book my consultation"}
                    {status !== "submitting" && (
                      <FiArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
