"use client";

import {
  Search,
  FileText,
  UserCheck,
  Award,
  BookOpen,
  QrCode,
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function AuditVaultSection() {
  const vaultTags = [
    "Historical Records",
    "Institutional Documents",
    "Financial Records",
    "Student Records",
    "Administrative Records",
    "Compliance Records",
    "Audit Information",
  ];

  const careerMilestones = [
    "Joining",
    "Designation",
    "Promotion",
    "Salary Revisions",
    "Transfer",
    "Leave",
    "Documents",
    "Retirement",
  ];

  const clearanceDepts = [
    "Fees Counter",
    "Library",
    "Store / Uniform",
    "Transport",
    "Academic Admin",
    "Teacher Sign",
    "Final Certificate",
  ];

  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Sub-Feature 1: Audit Discovery Vault */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <Search className="w-4 h-4 text-blue-600" />
              RTE & LEGAL AUDIT DISCOVERY VAULT
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Find the Records You Need.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-transparent bg-clip-text block">When You Need Them.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              A secure digital archive of historical and institutional records. Search, filter and retrieve with a timeline — fast retrieval, organized history and controlled access.
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2">
              {vaultTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 shadow-xs transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Instant Search Vault Preview Box */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xl">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
                <Search className="w-4 h-4 text-blue-600" />
                <span className="font-mono text-slate-500">Search records by student ID, year, document title...</span>
              </div>

              {/* Result List Items */}
              {[
                { title: "Fee Ledger 2024-25", tag: "Audited", status: "Verified" },
                { title: "Teacher Service Book & Qualification Logs", tag: "HR Vault", status: "Active" },
                { title: "CBSE & State Board Affiliation Certificates", tag: "Regulatory", status: "Compliant" },
              ].map((res, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/90 flex items-center justify-between text-xs hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <div>
                      <span className="font-bold text-slate-900 block">{res.title}</span>
                      <span className="text-[10px] text-slate-500 font-medium">Category: {res.tag}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold">
                    {res.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Feature 2 & 3: Employee Career Book & No-Dues Clearance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Career Book Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                SERVICE BOOK CAREER LEDGER
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                A Complete Digital Career History for Every Employee.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                A chronological institutional service history — from joining through designations, promotions, salary revisions, transfers, leave and supporting documents to retirement.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {careerMilestones.map((m, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-semibold text-slate-700 border border-slate-200">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* No-Dues Clearance Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-cyan-300 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                NO-DUES & CLEARANCE
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                From Pending Dues to Final Clearance — One Connected Workflow.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Route a student or staff member through every department, from fee clearance to certificates from the same connected workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {clearanceDepts.map((d, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-semibold text-cyan-800 border border-slate-200">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Feature 4 & 5: Certificates & ID Cards & Inventory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <Award className="w-8 h-8 text-blue-600" />
            <h4 className="text-base font-bold text-slate-900">Certificates & Documents</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Generate official documents without repetitive data entry. Pull student data into branded templates for bonafide & transfer certificates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <QrCode className="w-8 h-8 text-cyan-600" />
            <h4 className="text-base font-bold text-slate-900">ID Cards & Print Engine</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Configure student ID cards, staff ID cards, certificates and institutional documents with a full print-ready design engine.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:shadow-md transition-shadow">
            <Package className="w-8 h-8 text-emerald-600" />
            <h4 className="text-base font-bold text-slate-900">Store, Stock & Inventory</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Manage uniform and book store sales, variants, stock, orders and payments — connected directly to student accounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
