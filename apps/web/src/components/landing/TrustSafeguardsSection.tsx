"use client";

import {
  Lock,
  History,
  ShieldCheck,
  Database,
  FileCheck2,
  GitPullRequest
} from "lucide-react";

export default function TrustSafeguardsSection() {
  const safeguards = [
    {
      title: "Role-Based Access Control",
      icon: Lock,
      desc: "Each user sees strictly what their role authorizes, ensuring sensitive student profiles, salary structures, and financial records stay protected.",
    },
    {
      title: "Immutable Audit Trails",
      icon: History,
      desc: "Track who changed what, when, and from which IP address — every fee discount, mark edit, or voucher entry leaves a searchable audit record.",
    },
    {
      title: "Granular Permission Engine",
      icon: ShieldCheck,
      desc: "Define custom permission boundaries down to individual fields for teachers, accountants, department heads, and store managers.",
    },
    {
      title: "Permanent Historical Vault",
      icon: Database,
      desc: "Retain structured historical archives so past academic ledgers, board certificates, and staff service books stay 100% accessible.",
    },
    {
      title: "Single Data Integrity Core",
      icon: FileCheck2,
      desc: "A unified data core eliminates conflicting student records, duplicate roll numbers, and un-synced fee ledgers across departments.",
    },
    {
      title: "Multi-Level Approval Workflows",
      icon: GitPullRequest,
      desc: "Route high-stake actions (fee concessions, exam mark re-evaluations, bulk certificate printing) through strict multi-tier approvals.",
    },
  ];

  return (
    <section id="trust" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300 tracking-wider uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            TRUST & CONTROL
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Built for <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">institutional trust.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Sensible safeguards, encryption, and structured control keep your institution's information accurate, secure, and accountable.
          </p>
        </div>

        {/* 6 Safeguard Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeguards.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-400/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-cyan-400 mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
