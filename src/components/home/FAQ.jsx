import { useState } from 'react'

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. A standard website takes 4–8 weeks, while a full brand + platform build can take 12–16 weeks."
  },
  {
    q: "Do you offer custom AI solutions?",
    a: "Yes. We build completely custom AI solutions tailored to your business needs including automation, analytics, and intelligent platforms."
  },
  {
    q: "What is your pricing structure?",
    a: "We offer both project-based and retainer pricing depending on scope. Contact us to get a tailored quote for your project."
  }
];

export default function FAQ() {

  const [open, setOpen] = useState(null);

  return (
    <section className="py-28 bg-[#eef1f7]">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-800 mb-16">
          Common Inquiries
        </h2>

        {/* Accordion */}
        <div className="space-y-6">

          {faqs.map((faq, i) => (

            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition"
            >

              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-lg font-semibold text-slate-800">
                  {faq.q}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* Answer */}
              {open === i && (
                <div className="px-8 pb-6 text-slate-500 leading-relaxed">
                  {faq.a}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}