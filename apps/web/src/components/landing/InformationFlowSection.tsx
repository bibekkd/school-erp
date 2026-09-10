"use client";

import { useState, useEffect, useRef } from "react";
import {
  UserPlus,
  Users,
  Grid,
  CalendarCheck,
  CreditCard,
  Receipt,
  Bus,
  FileCheck,
  Award,
  GitBranch,
} from "lucide-react";

export default function InformationFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      badge: "Step 01",
      title: "Admissions & Enrollment",
      icon: UserPlus,
      desc: "Online applicant portal captures verified student & guardian details directly into the master data hub.",
      align: "left",
      pill: "Admissions",
    },
    {
      id: 2,
      badge: "Step 02",
      title: "Student Profile Hub",
      icon: Users,
      desc: "Credentials, biometric IDs, and mobile notification channels are provisioned automatically.",
      align: "right",
      pill: "Profiles",
    },
    {
      id: 3,
      badge: "Step 03",
      title: "Section & Roll Allocations",
      icon: Grid,
      desc: "Smart class allocation engine assigns section, roll numbers, and house divisions based on quotas.",
      align: "left",
      pill: "Allocations",
    },
    {
      id: 4,
      badge: "Step 04",
      title: "Attendance & Timetable Engine",
      icon: CalendarCheck,
      desc: "Daily biometrics, RFID bus swipes, and teacher logs automatically update class attendance records.",
      align: "right",
      pill: "Attendance",
    },
    {
      id: 5,
      badge: "Step 05",
      title: "Fee Structure & Ledger Sync",
      icon: CreditCard,
      desc: "Fee category (RTE, day scholar, hosteller, scholarship) maps directly into the student financial ledger.",
      align: "left",
      pill: "Fees",
    },
    {
      id: 6,
      badge: "Step 06",
      title: "Fee Collections & POS Cash",
      icon: Receipt,
      desc: "Online gateway and front-desk POS issue instant digital receipts with zero manual ledger updates.",
      align: "right",
      pill: "Collections",
    },
    {
      id: 7,
      badge: "Step 07",
      title: "Transport & Library Access",
      icon: Bus,
      desc: "Paid status instantly unlocks library book borrowing privileges and bus route allocation.",
      align: "left",
      pill: "Transport",
    },
    {
      id: 8,
      badge: "Step 08",
      title: "Certificates & Official Records",
      icon: FileCheck,
      desc: "No-dues clearance routes automatically across departments for bonafide, TC, and marksheets.",
      align: "right",
      pill: "Certificates",
    },
    {
      id: 9,
      badge: "Step 09",
      title: "CA Audit & Board Reports",
      icon: Award,
      desc: "Complete operational history feeds directly into CA-ready audit balances and board compliance reports.",
      align: "center",
      pill: "Reports",
    },
  ];

  // On scroll progress calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate relative position within viewport
      const startThreshold = windowHeight * 0.75;
      const totalDist = rect.height;
      const currentPos = startThreshold - rect.top;

      let progress = (currentPos / totalDist) * 100;
      progress = Math.max(0, Math.min(100, progress));

      setScrollProgress(progress);

      // Determine active step index based on scroll progress
      const stepIndex = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor((progress / 100) * steps.length))
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    const stepEl = document.getElementById(`flow-step-${index + 1}`);
    if (stepEl) {
      stepEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="data-flow" className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 tracking-wider uppercase mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            CONNECTIVITY FIRST
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Information Should Flow Through{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text">the Institution.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Scroll down to watch data seamlessly flow step-by-step from initial admission to final CA financial auditing without re-keying data.
          </p>
        </div>

        {/* Vertical Scroll-Driven Animated Flowchart Diagram */}
        <div ref={containerRef} className="mt-16 relative">
          {/* Central Vertical Connector Base Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-12 w-1 bg-slate-200 rounded-full" />

          {/* Scroll-Driven Progressive Beam Fill Line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-8 w-1 bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_rgba(37,99,235,0.6)]"
            style={{
              height: `${scrollProgress}%`,
            }}
          />

          {/* Flowchart Steps Nodes */}
          <div className="space-y-10 sm:space-y-14 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              const isPast = (scrollProgress / 100) * steps.length >= idx;

              return (
                <div
                  id={`flow-step-${step.id}`}
                  key={step.id}
                  onClick={() => scrollToStep(idx)}
                  className={`relative flex flex-col sm:flex-row items-center cursor-pointer group ${
                    step.align === "left"
                      ? "sm:justify-start"
                      : step.align === "right"
                      ? "sm:justify-end"
                      : "sm:justify-center"
                  }`}
                >
                  {/* Central Node Circle */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center ${
                      step.align === "center" ? "-top-5" : "top-1/2 -translate-y-1/2"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-xs transition-all duration-500 ${
                        isActive
                          ? "bg-blue-600 text-white ring-8 ring-blue-500/25 scale-125 shadow-lg shadow-blue-500/40"
                          : isPast
                          ? "bg-blue-700 text-white ring-4 ring-blue-200"
                          : "bg-white border-2 border-slate-300 text-slate-500 shadow-sm"
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Step Card Container */}
                  <div
                    className={`w-full sm:w-[45%] p-5 sm:p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
                      isActive
                        ? "bg-white border-blue-400 shadow-xl scale-[1.03] text-slate-900"
                        : isPast
                        ? "bg-white/90 border-slate-200 text-slate-800 shadow-sm"
                        : "bg-white/60 border-slate-200 text-slate-500 opacity-70 hover:opacity-100"
                    } ${
                      step.align === "left"
                        ? "sm:mr-auto sm:text-right"
                        : step.align === "right"
                        ? "sm:ml-auto sm:text-left"
                        : "sm:mx-auto sm:text-center mt-12 pt-8 sm:w-[60%]"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-2 ${
                        step.align === "left"
                          ? "sm:flex-row-reverse"
                          : step.align === "center"
                          ? "justify-center"
                          : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 font-bold block">
                          {step.badge}
                        </span>
                        <h3 className="text-base font-extrabold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-600 font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
