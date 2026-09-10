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
    <section id="financials" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copywriting & Flow Pills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-300 tracking-wider uppercase">
              <Wallet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              FINANCE & SMART CASH
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Know Where Your Institution Stands{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">Financially.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              From fees and collections to transactions, expenses and cash operations — get a single financial view and structured, CA-ready reports instead of chasing spreadsheets.
            </p>

            {/* Formula Highlight Banner */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center gap-2 shadow-xs">
              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
              <span>Better financial visibility &rarr; Better financial control &rarr; Better decisions.</span>
            </div>

            {/* Smart Cash & POS Counter Flow Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                SMART CASH & POS COUNTER WORKFLOW:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {cashFlowPills.map((pill, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs">
                      {pill}
                    </span>
                    {idx < cashFlowPills.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
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
            <div className="relative rounded-[32px] bg-white/80 dark:bg-slate-900/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/90 dark:border-slate-800 shadow-[inset_0_2px_4px_0_rgba(255,255,255,1),inset_0_-1px_3px_0_rgba(0,0,0,0.04),0_25px_60px_-15px_rgba(37,99,235,0.12),0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-none overflow-hidden p-4 sm:p-8 space-y-5 sm:space-y-6 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 border-b border-slate-200/80 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5 sm:gap-2 leading-tight">
                      <TrendingUp className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                      <span className="truncate sm:whitespace-normal">Fee Collection Velocity</span>
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal truncate sm:whitespace-normal">Interactive Real-Time Revenue Curve (Hover Points)</p>
                  </div>
                </div>
                <span className="self-start sm:self-auto text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-700/50 shadow-2xs shrink-0">
                  CA-Ready Status
                </span>
              </div>

              {/* 4 Stat Boxes with Frosted Glass Styling */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block font-medium">Fee Collected</span>
                  <div className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">₹42.6L</div>
                  <span className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">+18% vs last term</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block font-medium">Outstanding Dues</span>
                  <div className="text-lg sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">₹18.4L</div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium">Auto notices queued</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block font-medium">Operating Income</span>
                  <div className="text-lg sm:text-2xl font-extrabold text-blue-600 dark:text-cyan-400 mt-1">₹1.20Cr</div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium">Annual budget</span>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 hover:scale-[1.02] transition-transform">
                  <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block font-medium">Expenses & Payroll</span>
                  <div className="text-lg sm:text-2xl font-extrabold text-rose-600 dark:text-rose-400 mt-1">₹76L</div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium">Fully reconciled</span>
                </div>
              </div>

              {/* Interactive Area Graph */}
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-slate-900 dark:text-white">Daily POS & Ledger Collection Trend</span>
                  <span className="text-blue-600 dark:text-cyan-400 text-[11px] font-mono font-semibold">Live Cursor Tracking</span>
                </div>
                <InteractiveAreaChart height={200} colorScheme="blue" />
              </div>
            </div>
          </MagneticContainer>
        </div>
      </div>
    </section>
  );
}
