"use client";

import { useState } from "react";
import {
  Building2,
  GraduationCap,
  Settings,
  Calculator,
  BookOpen,
  Users,
  Bus,
  ShoppingBag,
  Lock,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export default function RoleBasedSection() {
  const [selectedRole, setSelectedRole] = useState(0);

  const roles = [
    {
      title: "Management / Board",
      icon: Building2,
      subtitle: "See the whole institution at a glance",
      permissions: [
        "Executive Dashboard & Institution Overview",
        "Financial Balance Sheet & Cash Ledger Summary",
        "Board & Regulatory Compliance Status Audit",
        "Multi-Branch Performance Analytics",
      ],
      desc: "Access is controlled by role, so board members get high-level governance insights without micro-operational clutter.",
    },
    {
      title: "Principal / Leadership",
      icon: GraduationCap,
      subtitle: "Oversee academics and daily campus operations",
      permissions: [
        "Real-Time Student & Staff Attendance Tracking",
        "Teacher Class Allocations & Timetable Overrides",
        "Academic Exam Results & Progress Approvals",
        "Disciplinary & Parent Escalation Log",
      ],
      desc: "Full academic oversight to track daily school health, teacher performance, and student progress.",
    },
    {
      title: "Administrator",
      icon: Settings,
      subtitle: "Run operations from a central control hub",
      permissions: [
        "Master Data Settings & Section/Roll Allocations",
        "User Roles, Permissions & Access Log Audit",
        "Official Notices & Broadcast Messages Engine",
        "Custom Workflow Configuration",
      ],
      desc: "Central command center to manage permissions, user onboarding, and campus configurations.",
    },
    {
      title: "Accountant / Finance",
      icon: Calculator,
      subtitle: "Keep financial ledger accurate and CA-ready",
      permissions: [
        "Fee Collections, Discounts & POS Counters",
        "Vendor Expense Invoicing & Voucher Approval",
        "Bank Reconciliation & Ledger Exports",
        "RTE Reimbursement Claim Filings",
      ],
      desc: "Complete accounting suite with zero manual spreadsheet reconciliation.",
    },
    {
      title: "Teacher / Faculty",
      icon: BookOpen,
      subtitle: "Focus on teaching, not manual paperwork",
      permissions: [
        "One-Tap Class Attendance & Marksheet Entry",
        "Digital Lesson Planning & Homework Publisher",
        "Direct Parent Communication Portal",
        "Student Leave Request Approvals",
      ],
      desc: "Saves teachers 5+ hours weekly on administrative tasks so they can focus on student learning.",
    },
    {
      title: "HR & Payroll",
      icon: Users,
      subtitle: "Manage staff, salary slips & career ledgers",
      permissions: [
        "Employee Digital Service Book History",
        "Automated Biometric Attendance & Salary Calculation",
        "Staff Leave Approvals & Substitution Roster",
        "PF, ESI & Statutory Compliance Reports",
      ],
      desc: "End-to-end employee lifecycle management from recruitment to retirement.",
    },
    {
      title: "Transport Manager",
      icon: Bus,
      subtitle: "Keep every route and vehicle accounted for",
      permissions: [
        "Vehicle Route Allocations & GPS Tracking",
        "Driver Licenses, Insurance & Expiry Alerts",
        "Student Bus Pickup/Drop Attendance",
        "Fuel & Maintenance Expense Log",
      ],
      desc: "Complete transport safety and route optimization for school buses.",
    },
    {
      title: "Store & Inventory",
      icon: ShoppingBag,
      subtitle: "Track book store and uniform stock sales",
      permissions: [
        "Item Stock Catalog & Low Inventory Alerts",
        "Uniform & Book Sales POS Counter",
        "Asset Purchase Orders & Department Issuance",
        "Vendor Ledger & Stock Adjustments",
      ],
      desc: "Real-time stock tracking connected directly to student billing.",
    },
  ];

  return (
    <section id="role-views" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-xs font-bold text-blue-700 dark:text-blue-400 tracking-wider uppercase mb-4">
            <Lock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            ROLE-BASED EXPERIENCE
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            One platform. <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">Every role.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Everyone gets the information and tools they need — strictly within their role. No clutter, no irrelevant screens.
          </p>
        </div>

        {/* Interactive 2 Column Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Role Selection Grid (8 Roles) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 sm:gap-3">
            {roles.map((r, idx) => {
              const IconComp = r.icon;
              const isSelected = selectedRole === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedRole(idx)}
                  className={`p-2.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-2.5 sm:gap-3.5 ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 border-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                      : "bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-xs"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white dark:bg-slate-950 text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 shadow-xs"
                    }`}
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold leading-tight truncate sm:whitespace-normal">{r.title}</h4>
                    <span
                      className={`text-[9px] sm:text-[10px] block leading-tight mt-0.5 line-clamp-2 ${
                        isSelected ? "text-blue-100" : "text-slate-500 dark:text-slate-400 font-medium"
                      }`}
                    >
                      {r.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Role Detail View Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-cyan-300 flex items-center justify-center border border-blue-200 dark:border-blue-500/30">
                    {(() => {
                      const Icon = roles[selectedRole].icon;
                      return <Icon className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {roles[selectedRole].title}
                    </h3>
                    <span className="text-xs text-blue-600 dark:text-cyan-400 font-semibold">Role Access Level: Active</span>
                  </div>
                </div>
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {roles[selectedRole].desc}
              </p>

              {/* Authorized Features List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  AUTHORIZED WORKSPACES:
                </span>
                {roles[selectedRole].permissions.map((perm, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{perm}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between font-medium">
              <span>Row-Level Data Security Active</span>
              <span className="text-blue-600 dark:text-cyan-400 font-semibold cursor-pointer hover:underline">Preview View &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
