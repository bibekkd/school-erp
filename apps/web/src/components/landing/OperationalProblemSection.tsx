"use client";

import { XCircle, CheckCircle2, AlertTriangle, Zap } from "lucide-react";

export default function OperationalProblemSection() {
  const legacyPainPoints = [
    "Fragmented spreadsheets & disconnected department software",
    "Repetitive manual data entry (student profiles re-entered 5 times)",
    "Seasonal panic and folder hunting during CBSE/RTE inspections",
    "Hidden fee collection leaks & un-reconciled POS cash counters",
    "Delayed CA financial auditing due to missing paper vouchers",
    "Zero institutional visibility for management and trust board",
  ];

  const vexaSolutions = [
    "Unified Single Source of Truth — enter once, access everywhere",
    "Automated end-to-end workflows from admission to alumni certificate",
    "Continuous CA-Ready financial ledger & instant audit reports",
    "Digital Compliance Vault with expiry alerts for RTE & affiliation",
    "Real-time institutional dashboard for management & principal",
    "Built-in AI Assistant for instant natural language insights",
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800 text-xs font-bold text-amber-800 dark:text-amber-300 tracking-wider uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            THE ROOT CAUSE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Institutions don't have a software problem.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text block mt-1">
              They have an operational problem.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Buying 10 different single-purpose apps creates data silos and operational chaos. See how Vexa solves this with a connected architecture.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Legacy Card */}
          <div className="p-8 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 relative group hover:border-rose-300 dark:hover:border-rose-800 transition-all shadow-sm">
            <div className="flex items-center justify-between pb-6 border-b border-rose-200/60 dark:border-rose-900/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/40 border border-rose-200 dark:border-rose-800 flex items-center justify-center text-rose-600 dark:text-rose-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Traditional Disconnected Software</h3>
                  <p className="text-xs text-rose-700 dark:text-rose-300 font-semibold">Siloed & Error-Prone</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                Legacy Trap
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {legacyPainPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vexa Solution Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-50/90 via-white to-slate-50 dark:from-slate-800/80 dark:via-slate-900 dark:to-slate-900 border border-blue-300 dark:border-blue-800 relative group hover:border-blue-400 dark:hover:border-cyan-400/60 shadow-xl shadow-blue-500/10 dark:shadow-none transition-all">
            <div className="flex items-center justify-between pb-6 border-b border-blue-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Vexa Connected Operating System</h3>
                  <p className="text-xs text-blue-700 dark:text-cyan-300 font-semibold">Unified & Automated</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                Next-Gen ERP
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {vexaSolutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 dark:text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
