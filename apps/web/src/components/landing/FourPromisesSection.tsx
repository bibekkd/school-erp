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
    <section id="why-vexa" className="py-24 bg-slate-50/60 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Background Subtle Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-300/10 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300 tracking-wider uppercase mb-4">
            WHY VEXA IQ IS DIFFERENT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            We Don't Just Digitize Departments.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text block mt-1">
              We Connect the Institution.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Four promises that turn a list of separate software features into a unified operating platform you can run your institution on.
          </p>
        </div>

        {/* 4 Cards Grid matching design mockup */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, idx) => (
            <div
              key={idx}
              className="group relative p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-200/40 dark:shadow-none hover:shadow-xl dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {promise.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {promise.description}
                </p>
              </div>

              {/* Bottom CTA Button */}
              <div className="relative z-10 mt-8">
                <div className="inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:border-transparent text-slate-800 dark:text-slate-200 group-hover:text-white shadow-xs group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300 text-xs sm:text-sm font-bold cursor-pointer">
                  <span>Explore Workflow</span>
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-900 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300 group-hover:text-white transition-transform duration-300 group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
