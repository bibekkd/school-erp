"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Building2, CheckCircle2 } from "lucide-react";
import { ShineBorder } from "@school-erp/ui/components/shine-border";

export default function CtaBannerSection() {
  return (
    <section id="book-demo" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white shadow-2xl text-center">
          {/* Animated Shine Border */}
          <ShineBorder
            borderWidth={3.5}
            duration={6}
            shineColor={["#38bdf8", "#c084fc", "#ffffff", "#38bdf8"]}
            className="rounded-3xl pointer-events-none"
          />

          {/* Radial Light Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-xs font-extrabold text-white tracking-wider uppercase backdrop-blur-md">
              <Building2 className="w-4 h-4 text-cyan-200" />
              ONE PLATFORM &bull; ONE SOURCE OF TRUTH
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to connect <span className="text-cyan-200">your institution?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-blue-50 leading-relaxed font-normal">
              See how Vexa IQ Solutions can bring your institution's academic, financial, administrative and operational processes together into one connected platform.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative overflow-hidden w-full sm:w-auto pl-8 pr-3 py-3.5 rounded-full bg-white border border-slate-200/90 shadow-xl shadow-slate-900/10 hover:border-white transition-all duration-300 flex items-center justify-between gap-4"
              >
                {/* Animated Expanding Gradient Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full pointer-events-none" />

                <span className="relative z-10 text-slate-900 group-hover:text-white transition-colors duration-300 font-extrabold text-base">
                  Book a Guided Demo
                </span>

                <span className="relative z-10 w-9 h-9 flex items-center justify-center shrink-0">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 shadow-md group-hover:opacity-0 transition-opacity duration-300" />
                  <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </Link>
              <a
                href="mailto:info@vexaiq.com"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 text-white font-semibold text-base border border-blue-400/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-cyan-200" />
                <span>Talk to Institutional Advisor</span>
              </a>
            </div>

            {/* Bottom Tagline */}
            <div className="pt-6 text-xs font-bold uppercase tracking-widest text-cyan-200 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-200" />
              <span>A smarter, connected institution.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
