"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Building,
  Activity,
  Flame,
  UserCheck,
  Eye,
  CheckCircle2
} from "lucide-react";

export default function ComplianceSection() {
  const [selectedBoard, setSelectedBoard] = useState("all");

  const complianceCards = [
    {
      title: "Board & Regulatory Compliance",
      desc: "Manage compliance requirements, board affiliations, mandatory disclosures, and regulatory reporting.",
      icon: Building,
      board: "cbse",
      status: "Verified",
    },
    {
      title: "Affiliation, RTE & Institutional",
      desc: "Centralize affiliation renewal records, RTE quota allocations, government approvals and documentation.",
      icon: ShieldCheck,
      board: "state",
      status: "Compliant",
    },
    {
      title: "Compliance Health Dashboard",
      desc: "A centralized real-time view of compliance status, audit readiness, and upcoming renewal deadlines.",
      icon: Activity,
      board: "all",
      status: "100% Ready",
    },
    {
      title: "Infrastructure & Safety Expiry",
      desc: "Track fire safety certificates, building stability documents, sanitary permits and renewal expiry dates.",
      icon: Flame,
      board: "icse",
      status: "Up-to-Date",
    },
    {
      title: "RTE Quota Tracking",
      desc: "Monitor RTE student intake allocation, fee reimbursement claims, admissions and mandatory records.",
      icon: UserCheck,
      board: "state",
      status: "25% Full",
    },
    {
      title: "Inspector Read-Only Access",
      desc: "Provide controlled read-only access to inspectors during audits without exposing unauthorized data.",
      icon: Eye,
      board: "all",
      status: "Secure Link",
    },
  ];

  const filteredCards =
    selectedBoard === "all"
      ? complianceCards
      : complianceCards.filter(
        (card) => card.board === "all" || card.board === selectedBoard
      );

  return (
    <section id="compliance" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 dark:bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge & Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-xs font-bold text-cyan-800 dark:text-cyan-300 tracking-wider uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            MAJOR DIFFERENTIATOR
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Compliance, Organized in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">One Place.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Instead of scattered physical folders and seasonal panic, Vexa IQ keeps board, affiliation, RTE, and inspection requirements visible and organized in a single workspace.
          </p>

          {/* Board Filter Tabs */}
          <div className="mt-8 inline-flex items-center bg-white dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 gap-1 shadow-sm">
            {[
              { id: "all", label: "All Boards" },
              { id: "state", label: "State Boards" },
              { id: "cbse", label: "CBSE" },
              { id: "icse", label: "ICSE / IB" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedBoard(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${selectedBoard === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Compliance Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {card.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">{card.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Vault Encryption: 256-bit</span>
                  <span className="text-blue-600 dark:text-cyan-400 font-semibold cursor-pointer hover:underline">
                    View Specs &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote Notice */}
        <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400 font-normal">
          * Vexa IQ helps organize and monitor compliance records; it does not by itself guarantee legal compliance.
        </div>
      </div>
    </section>
  );
}
