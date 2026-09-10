"use client";

import { Building2, Award, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

export default function SocialProofSection() {
  const stats = [
    { label: "Partner Institutions", val: "500+", icon: Building2, desc: "Schools, Colleges & Institutes" },
    { label: "Active Students Managed", val: "1,000,000+", icon: Users, desc: "Profiles & Ledgers Synced" },
    { label: "Platform Uptime & SLA", val: "99.99%", icon: ShieldCheck, desc: "Enterprise-grade Reliability" },
    { label: "Compliance Pass Rate", val: "100%", icon: Award, desc: "CA & Inspection Ready" },
  ];

  const boards = [
    "CBSE Affiliated Institutions",
    "ICSE & ISC Board Schools",
    "State Education Boards",
    "Multi-Branch Coaching Networks",
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-all text-center group hover:scale-[1.02] shadow-sm hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                  {stat.val}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Board Badges Horizontal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0">
            Trusted Across All Regulatory Boards:
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            {boards.map((board, idx) => (
              <div
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-2 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{board}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
