"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle2,
  BrainCircuit,
  CreditCard,
  Building,
  GraduationCap,
  ArrowUpRight,
  Activity,
  Layers,
  Search,
  Clock
} from "lucide-react";
import InteractiveAreaChart from "./InteractiveAreaChart";
import { HexagonPattern } from "@school-erp/ui/components/hexagon-pattern";
import { ShineBorder } from "@school-erp/ui/components/shine-border";
import { MagneticContainer } from "@school-erp/ui/components/magnetic-container";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"overview" | "finance" | "ai" | "compliance">("overview");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      {/* Hexagon Pattern Background */}
      <HexagonPattern
        radius={36}
        gap={4}
        className="stroke-blue-400/25 dark:stroke-blue-500/15 fill-blue-300/10 dark:fill-blue-500/5 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,white_20%,transparent_80%)]"
        hexagons={[
          [3, 2],
          [5, 4],
          [-2, 3],
          [8, 1],
          [-4, 5],
          [2, 6],
        ]}
      />
      {/* Background Radial Light Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Badge */}
        <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 backdrop-blur-md mb-8 hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer group shadow-sm overflow-hidden">
          <ShineBorder
            borderWidth={1.5}
            duration={8}
            shineColor={["#2563eb", "#06b6d4", "#3b82f6"]}
            className="rounded-full pointer-events-none"
          />
          <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse relative z-10" />
          <span className="text-xs font-bold tracking-wide text-blue-700 dark:text-blue-300 relative z-10">
            ALL-IN-ONE INSTITUTION OPERATING SYSTEM
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.15]">
          The Future of Education Management Starts Here.{" "}
          <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">
            We Connect the Institution.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          A single, connected platform to power admissions, academics, finance, compliance, and governance for schools & colleges. One source of truth for your entire institution.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group relative overflow-hidden pl-7 pr-2.5 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 hover:border-blue-400 shadow-xl shadow-blue-500/15 transition-all duration-300 flex items-center justify-between gap-4 w-full sm:w-auto text-base font-extrabold"
          >
            {/* Animated Expanding Gradient Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full pointer-events-none" />

            <span className="relative z-10 text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300 font-extrabold">
              Book a Free Institutional Demo
            </span>

            <span className="relative z-10 w-9 h-9 flex items-center justify-center shrink-0">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 shadow-md group-hover:opacity-0 transition-opacity duration-300" />
              <ArrowRight className="relative z-10 w-5 h-5 text-white group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </Link>
          <a href="#why-vexa">
            <LiquidButton variant="glossy" size="lg" className="w-full sm:w-auto px-8 py-3.5 text-base">
              <Compass className="w-4 h-4 text-blue-600 mr-1" />
              <span>Explore Architecture</span>
            </LiquidButton>
          </a>
        </div>

        {/* Quick Highlights Pill Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span>No Spreadsheet Frustration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span>CA-Ready Financial Ledger</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span>CBSE/ICSE/State Board Compliance</span>
          </div>
        </div>

        {/* Live Interactive Dashboard Preview Showcase (Liquid Glass Board) */}
        <MagneticContainer className="mt-16 relative max-w-6xl mx-auto" strength={0.12} tilt={true} tiltStrength={6}>
          {/* Outer Ambient Liquid Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/25 via-cyan-300/20 to-indigo-400/25 rounded-[38px] opacity-80 blur-xl pointer-events-none" />

          {/* Liquid Glassboard Outer Frame */}
          <div className="relative rounded-[32px] md:rounded-[36px] bg-white/70 dark:bg-slate-900/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/80 dark:border-slate-800 shadow-[inset_0_2px_4px_0_rgba(255,255,255,1),inset_0_-1px_3px_0_rgba(0,0,0,0.04),0_25px_60px_-15px_rgba(37,99,235,0.12),0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-none overflow-hidden text-left transition-all">

            {/* Top Bar of Mockup */}
            <div className="px-6 py-4 bg-white/40 dark:bg-slate-900/60 backdrop-blur-xl border-b border-white/60 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                </div>
                <div className="bg-white/60 dark:bg-slate-800/80 backdrop-blur-md border border-white/80 dark:border-slate-700 rounded-full px-4 py-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <span className="text-slate-400">🔒</span>
                  <span>https://app.vexaiq.com/institution-overview</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center bg-white/60 dark:bg-slate-800/80 backdrop-blur-md p-1 rounded-full border border-white/80 dark:border-slate-700 text-xs shadow-inner gap-1">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-1.5 rounded-full font-semibold transition-all ${activeTab === "overview"
                      ? "bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("finance")}
                  className={`px-4 py-1.5 rounded-full font-semibold transition-all ${activeTab === "finance"
                      ? "bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  Finance Ledger
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`px-4 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 ${activeTab === "ai"
                      ? "bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  <span>Vexa IQ AI</span>
                  <span className="text-[9px] bg-amber-100/90 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-1.5 py-0.2 rounded-full font-bold border border-amber-200/80 dark:border-amber-700/50 shadow-2xs">
                    Soon
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("compliance")}
                  className={`px-4 py-1.5 rounded-full font-semibold transition-all ${activeTab === "compliance"
                      ? "bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  Compliance Vault
                </button>
              </div>
            </div>

            {/* Dashboard Content Container */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Stat Cards Row - Frosted Glass Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Total Students */}
                <div className="p-4.5 rounded-2xl bg-white/65 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200/70 dark:border-blue-800/50 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Students</div>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">2,340</div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +12% this academic year
                    </div>
                  </div>
                </div>

                {/* Attendance Rate */}
                <div className="p-4.5 rounded-2xl bg-white/65 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-200/70 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Attendance Rate</div>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">98.4%</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Today &bull; 2,302 Present</div>
                  </div>
                </div>

                {/* Term Fee Collected */}
                <div className="p-4.5 rounded-2xl bg-white/65 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-purple-100/80 dark:bg-purple-900/40 border border-purple-200/70 dark:border-purple-800/50 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-inner">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Term Fee Collected</div>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">₹42.6L</div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">94% target achieved</div>
                  </div>
                </div>

                {/* Board Compliance */}
                <div className="p-4.5 rounded-2xl bg-white/65 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-100/80 dark:bg-amber-900/40 border border-amber-200/70 dark:border-amber-800/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Board Compliance</div>
                    <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">99.99% CA-Ready</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">CBSE & RTE Verified</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Content Panel based on selected tab */}
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Left Column: Monthly Fee Collection Curve Chart */}
                  <div className="md:col-span-2 p-6 rounded-2xl bg-white/65 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                        Monthly Fee Collection Curve
                      </h4>
                      <span className="text-xs text-blue-700 dark:text-cyan-300 bg-blue-100/80 dark:bg-blue-900/40 font-bold px-3 py-1 rounded-full border border-blue-200/80 dark:border-blue-800/50 backdrop-blur-sm shadow-2xs">
                        Interactive Area Graph
                      </span>
                    </div>

                    {/* Interactive Area Chart */}
                    <InteractiveAreaChart height={195} colorScheme="blue" />
                  </div>

                  {/* Right Column: Live Ecosystem Flow */}
                  <div className="p-6 rounded-2xl bg-white/65 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm space-y-3.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      Live Ecosystem Flow
                    </h4>
                    {[
                      { title: "Admissions Engine", status: "28 New Applicants", color: "text-emerald-700 dark:text-emerald-400", icon: Users, iconBg: "bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400" },
                      { title: "Timetable & Schedules", status: "100% Allocated", color: "text-blue-700 dark:text-cyan-400", icon: Clock, iconBg: "bg-blue-100/80 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400" },
                      { title: "Smart Fee Counters", status: "POS Active", color: "text-cyan-700 dark:text-cyan-300", icon: CreditCard, iconBg: "bg-cyan-100/80 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400" },
                      { title: "RTE & Affiliation Vault", status: "Audited & Safe", color: "text-purple-700 dark:text-purple-300", icon: ShieldCheck, iconBg: "bg-amber-100/80 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400" },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/70 dark:bg-slate-800/80 hover:bg-white/90 dark:hover:bg-slate-800 backdrop-blur-md border border-white/90 dark:border-slate-700 shadow-sm flex items-center justify-between text-xs transition-all hover:translate-x-0.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
                            <item.icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-bold text-slate-700 dark:text-slate-200">{item.title}</span>
                        </div>
                        <span className={`font-extrabold ${item.color}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "finance" && (
                <div className="p-6 rounded-2xl bg-white/65 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      CA-Ready Financial Ledger & Smart Cash Counters
                    </h4>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-900/40 px-3 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800/50">
                      Audit Verified
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 text-xs shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Total Operating Income</span>
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">₹1.20 Crore</div>
                    </div>
                    <div className="p-4 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 text-xs shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Operating Expenses</span>
                      <div className="text-xl font-extrabold text-rose-600 dark:text-rose-400 mt-1">₹76.2 Lakhs</div>
                    </div>
                    <div className="p-4 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 text-xs shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">Net Surplus Fund</span>
                      <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">+ ₹43.8 Lakhs</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ai" && (
                <div className="p-6 rounded-2xl bg-white/65 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                        <BrainCircuit className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          Vexa AI Assistant
                          <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-900/50 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-700 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Coming Soon
                          </span>
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Connected directly to institutional database</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 flex items-center justify-between text-xs shadow-sm">
                    <span className="text-slate-700 dark:text-slate-200 font-mono">"Which class has the highest pending fee status for Q2?"</span>
                    <Search className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div className="p-4 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/50 rounded-xl text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
                    <span className="font-semibold text-blue-800 dark:text-cyan-300 block mb-1">🤖 AI Analysis Result (Preview):</span>
                    Class 10-B currently has 14 pending tuition installments totaling ₹2.8L. Automated reminder notices have been queued for parents.
                  </div>
                </div>
              )}

              {activeTab === "compliance" && (
                <div className="p-6 rounded-2xl bg-white/65 dark:bg-slate-800/60 backdrop-blur-xl border border-white/90 dark:border-slate-700 shadow-sm space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    Board & Regulatory Compliance Status
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400 block">CBSE Affiliation</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Valid till 2029</span>
                    </div>
                    <div className="p-3.5 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400 block">Fire Safety Certificate</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Renewed</span>
                    </div>
                    <div className="p-3.5 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400 block">RTE Quota Seats</span>
                      <span className="text-cyan-700 dark:text-cyan-300 font-bold">25% Allocated</span>
                    </div>
                    <div className="p-3.5 bg-white/70 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-white/90 dark:border-slate-700 shadow-sm">
                      <span className="text-slate-500 dark:text-slate-400 block">Inspector Access</span>
                      <span className="text-blue-700 dark:text-cyan-400 font-bold">Read-Only Ready</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </MagneticContainer>
      </div>
    </section>
  );
}
