import React from 'react'

const Problems = () => {
  return (
    <section className="w-full py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-green-600 font-semibold uppercase tracking-wide mb-4">
            The Problem
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Logistics shouldn’t slow down growing businesses
          </h2>

          <p className="text-lg text-slate-600">
            Many businesses in Lagos struggle with unreliable dispatch systems,
            lack of visibility, and inconsistent delivery performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Without Tuuraa */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Without Tuuraa
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li>• Delayed and inconsistent deliveries</li>
              <li>• No structured dispatch coordination</li>
              <li>• Limited visibility for customers</li>
              <li>• Operational stress on business owners</li>
            </ul>
          </div>

          {/* With Tuuraa */}
          <div className="bg-green-900 text-white rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-4">With Tuuraa</h3>
            <ul className="space-y-3 text-slate-300">
              <li>• Structured delivery operations</li>
              <li>• Coordinated dispatch management</li>
              <li>• Real-time delivery updates</li>
              <li>• Scalable logistics support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problems
