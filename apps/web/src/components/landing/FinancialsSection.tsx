"use client";

import { Wallet, ArrowRight, TrendingUp, CreditCard, DollarSign, PieChart, ShieldCheck } from "lucide-react";
import InteractiveAreaChart from "./InteractiveAreaChart";

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

          {/* Right Column: Financial Dashboard Preview Card with Interactive Area Graph */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    Fee Collection Velocity
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">Interactive Real-Time Revenue Curve (Hover Points)</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 border border-emerald-200">
                  CA-Ready Status
                </span>
              </div>

              {/* 4 Stat Boxes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Fee Collected</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">₹42.6L</div>
                  <span className="text-[10px] text-emerald-600 font-semibold">+18% vs last term</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Outstanding Dues</span>
                  <div className="text-2xl font-extrabold text-amber-600 mt-1">₹18.4L</div>
                  <span className="text-[10px] text-slate-500 font-medium">Auto notices queued</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Operating Income</span>
                  <div className="text-2xl font-extrabold text-blue-600 mt-1">₹1.20Cr</div>
                  <span className="text-[10px] text-slate-500 font-medium">Annual budget</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500 block font-medium">Expenses & Payroll</span>
                  <div className="text-2xl font-extrabold text-rose-600 mt-1">₹76L</div>
                  <span className="text-[10px] text-slate-500 font-medium">Fully reconciled</span>
                </div>
              </div>

              {/* Interactive Area Graph (Light Mode) */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-slate-900">Daily POS & Ledger Collection Trend</span>
                  <span className="text-blue-600 text-[11px] font-mono font-semibold">Live Cursor Tracking</span>
                </div>
                <InteractiveAreaChart height={200} colorScheme="blue" isDark={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
