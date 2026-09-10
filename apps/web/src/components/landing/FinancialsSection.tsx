"use client";

import { Wallet, ArrowRight, TrendingUp, CreditCard, DollarSign, PieChart, ShieldCheck } from "lucide-react";
import InteractiveAreaChart from "./InteractiveAreaChart";
import { MagneticContainer } from "@school-erp/ui/components/magnetic-container";

export default function FinancialsSection() {
  const cashFlowPills = [
    "Cash Transaction",
    "Receipt / POS",
    "Reconciliation",
    "Financial Records",
    "Bookkeeping",
  ];

  return (
    <section id="financials" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copywriting & Flow Pills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-xs font-bold text-emerald-700 tracking-wider uppercase">
              <Wallet className="w-4 h-4 text-emerald-600" />
              FINANCE & SMART CASH
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Know Where Your Institution Stands{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text">Financially.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From fees and collections to transactions, expenses and cash operations — get a single financial view and structured, CA-ready reports instead of chasing spreadsheets.
            </p>

            {/* Formula Highlight Banner */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800 flex items-center gap-2 shadow-xs">
              <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Better financial visibility &rarr; Better financial control &rarr; Better decisions.</span>
            </div>

            {/* Smart Cash & POS Counter Flow Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                SMART CASH & POS COUNTER WORKFLOW:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {cashFlowPills.map((pill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                      {pill}
                    </span>
                    {idx < cashFlowPills.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Magnetic Financial Dashboard Preview Card */}
          <MagneticContainer className="lg:col-span-6 relative" strength={0.12} tilt={true} tiltStrength={6}>
            {/* Outer Ambient Liquid Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/25 via-cyan-300/20 to-emerald-400/25 rounded-[38px] opacity-80 blur-xl pointer-events-none" />

            {/* Liquid Glassboard Outer Frame */}
            <div className="relative rounded-[32px] bg-white/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/90 shadow-[inset_0_2px_4px_0_rgba(255,255,255,1),inset_0_-1px_3px_0_rgba(0,0,0,0.04),0_25px_60px_-15px_rgba(37,99,235,0.12),0_15px_35px_rgba(0,0,0,0.06)] overflow-hidden p-6 sm:p-8 space-y-6 transition-all">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      Fee Collection Velocity
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">Interactive Real-Time Revenue Curve (Hover Points)</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 shadow-2xs">
                  CA-Ready Status
                </span>
              </div>

              {/* 4 Stat Boxes with Frosted Glass Styling */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.03)] hover:scale-[1.02] transition-transform">
                  <span className="text-xs text-slate-500 block font-medium">Fee Collected</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">₹42.6L</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">+18% vs last term</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.03)] hover:scale-[1.02] transition-transform">
                  <span className="text-xs text-slate-500 block font-medium">Outstanding Dues</span>
                  <div className="text-2xl font-extrabold text-amber-600 mt-1">₹18.4L</div>
                  <span className="text-[10px] text-slate-500 font-medium">Auto notices queued</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.03)] hover:scale-[1.02] transition-transform">
                  <span className="text-xs text-slate-500 block font-medium">Operating Income</span>
                  <div className="text-2xl font-extrabold text-blue-600 mt-1">₹1.20Cr</div>
                  <span className="text-[10px] text-slate-500 font-medium">Annual budget</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.03)] hover:scale-[1.02] transition-transform">
                  <span className="text-xs text-slate-500 block font-medium">Expenses & Payroll</span>
                  <div className="text-2xl font-extrabold text-rose-600 mt-1">₹76L</div>
                  <span className="text-[10px] text-slate-500 font-medium">Fully reconciled</span>
                </div>
              </div>

              {/* Interactive Area Graph (Light Mode) */}
              <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.03)] space-y-2">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-slate-900">Daily POS & Ledger Collection Trend</span>
                  <span className="text-blue-600 text-[11px] font-mono font-semibold">Live Cursor Tracking</span>
                </div>
                <InteractiveAreaChart height={200} colorScheme="blue" isDark={false} />
              </div>
            </div>
          </MagneticContainer>
        </div>
      </div>
    </section>
  );
}
