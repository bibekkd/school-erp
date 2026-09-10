"use client";

import { ArrowRight } from "lucide-react";

export default function FourPromisesSection() {
  const promises = [
    {
      num: "01",
      title: "One Source of Truth",
      description:
        "Institutional information stays connected across authorized workflows — entered once, reused everywhere permitted without duplicate records.",
      numColor: "text-blue-600",
      lineBg: "bg-blue-600",
      linkColor: "text-blue-600 group-hover:text-blue-700",
      glowBg: "from-blue-200/60 via-blue-100/30 to-transparent",
    },
    {
      num: "02",
      title: "Financial Control",
      description:
        "Track fees, collections, expenses, transactions, POS cash operations and financial ledgers centrally with real-time auditability.",
      numColor: "text-emerald-600",
      lineBg: "bg-emerald-600",
      linkColor: "text-emerald-600 group-hover:text-emerald-700",
      glowBg: "from-emerald-200/60 via-emerald-100/30 to-transparent",
    },
    {
      num: "03",
      title: "CA-Ready Reports",
      description:
        "Generate structured financial reports that make institutional review and accountant/CA workflows effortless without chasing manual files.",
      numColor: "text-amber-500",
      lineBg: "bg-amber-500",
      linkColor: "text-amber-500 group-hover:text-amber-600",
      glowBg: "from-amber-200/60 via-amber-100/30 to-transparent",
    },
    {
      num: "04",
      title: "Compliance Management",
      description:
        "Organize and monitor board, affiliation, RTE, safety certificates, inspection documents and regulatory requirements in one place.",
      numColor: "text-blue-600",
      lineBg: "bg-blue-600",
      linkColor: "text-blue-600 group-hover:text-blue-700",
      glowBg: "from-indigo-200/60 via-blue-100/30 to-transparent",
    },
  ];

  return (
    <section id="why-vexa" className="py-24 bg-slate-50/60 relative overflow-hidden">
      {/* Background Subtle Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-300/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 tracking-wider uppercase mb-4">
            WHY VEXA IQ IS DIFFERENT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            We Don't Just Digitize Departments.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text block mt-1">
              We Connect the Institution.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Four promises that turn a list of separate software features into a unified operating platform you can run your institution on.
          </p>
        </div>

        {/* 4 Cards Grid matching design mockup */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, idx) => (
            <div
              key={idx}
              className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top-Right Soft Color Gradient Glow Spot */}
              <div
                className={`absolute -top-10 -right-10 w-44 h-44 rounded-full bg-gradient-to-bl ${promise.glowBg} blur-xl pointer-events-none transition-all duration-500 group-hover:scale-125`}
              />

              <div className="relative z-10">
                {/* Number Header */}
                <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${promise.numColor}`}>
                  {promise.num}
                </div>
                {/* Short Underline Accent */}
                <div className={`w-8 h-1 rounded-full ${promise.lineBg} mt-2.5 mb-6`} />

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {promise.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {promise.description}
                </p>
              </div>

              {/* Bottom Link */}
              <div className="relative z-10 mt-8 pt-4 border-t border-slate-100 flex items-center gap-2">
                <span className={`text-sm font-bold ${promise.linkColor} transition-colors`}>
                  Explore Workflow
                </span>
                <ArrowRight className={`w-4 h-4 ${promise.linkColor} transition-transform duration-300 group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
