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
    <section className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-xs font-bold text-amber-800 tracking-wider uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            THE ROOT CAUSE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Institutions don't have a software problem.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text block mt-1">
              They have an operational problem.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Buying 10 different single-purpose apps creates data silos and operational chaos. See how Vexa solves this with a connected architecture.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Legacy Card */}
          <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200/80 relative group hover:border-rose-300 transition-all shadow-sm">
            <div className="flex items-center justify-between pb-6 border-b border-rose-200/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Traditional Disconnected Software</h3>
                  <p className="text-xs text-rose-700 font-semibold">Siloed & Error-Prone</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-rose-100 text-rose-700 border border-rose-200">
                Legacy Trap
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {legacyPainPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vexa Solution Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-50/90 via-white to-slate-50 border border-blue-300 relative group hover:border-blue-400 shadow-xl shadow-blue-500/10 transition-all">
            <div className="flex items-center justify-between pb-6 border-b border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Vexa Connected Operating System</h3>
                  <p className="text-xs text-blue-700 font-semibold">Unified & Automated</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-700 border border-blue-200">
                Next-Gen ERP
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {vexaSolutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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
