"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import FooterSection from "@/components/landing/FooterSection";
import {
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Mail,
  Phone,
  ShieldCheck,
  Users,
  Send,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institutionName: "",
    role: "Principal / Director",
    studentCount: "500 - 1,500 Students",
    board: "CBSE",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to Home Link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 shadow-sm transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-blue-600 dark:text-cyan-400" />
              <span>Back</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300 tracking-wider uppercase mb-4 shadow-sm">
              <Calendar className="w-3.5 h-3.5" />
              1-ON-1 INSTITUTIONAL DEMO
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Schedule Your Customized <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">
                Vexa IQ Platform Walkthrough
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              See how Vexa IQ connects academics, admissions, financial ledgers, compliance, and governance into a single source of truth for your institution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Institutional Demo Requested!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.fullName}</span>. Our senior solutions advisor will reach out to <span className="font-semibold text-blue-600 dark:text-cyan-400">{formData.email}</span> within 2 business hours to schedule your personalized institutional demo.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400 space-y-2 max-w-md mx-auto">
                    <div className="flex items-center justify-between font-semibold">
                      <span>Institution:</span>
                      <span className="text-slate-800 dark:text-slate-200">{formData.institutionName || "Specified Institution"}</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold">
                      <span>Affiliation Board:</span>
                      <span className="text-blue-700 dark:text-cyan-300">{formData.board}</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold">
                      <span>Estimated Intake:</span>
                      <span className="text-slate-800 dark:text-slate-200">{formData.studentCount}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span>Institutional Contact Details</span>
                    <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                      Confidential & Secure
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Rajesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="principal@school.edu.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    {/* Institution Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Institution / Trust Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="St. Mary Public School / ABC Trust"
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Your Role */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Role *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        <option value="Principal / Director">Principal / Director</option>
                        <option value="Trustee / Board Member">Trustee / Board Member</option>
                        <option value="Finance & Accounts Head">Finance & Accounts Head</option>
                        <option value="IT Administrator">IT Administrator</option>
                        <option value="Academic Coordinator">Academic Coordinator</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Student Intake */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Student Strength *
                      </label>
                      <select
                        value={formData.studentCount}
                        onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        <option value="Under 500 Students">Under 500 Students</option>
                        <option value="500 - 1,500 Students">500 - 1,500 Students</option>
                        <option value="1,500 - 3,500 Students">1,500 - 3,500 Students</option>
                        <option value="3,500+ Students">3,500+ Students</option>
                      </select>
                    </div>

                    {/* Board */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Board / Type *
                      </label>
                      <select
                        value={formData.board}
                        onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE / ISC">ICSE / ISC</option>
                        <option value="State Board">State Board</option>
                        <option value="IB / International">IB / International</option>
                        <option value="College / Higher Ed">College / Higher Ed</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Specific Requirements or Focus Areas (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We are looking to streamline fee collection, CA audit reports, and RTE quota compliance..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-extrabold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Clock className="w-5 h-5 animate-spin" />
                        <span>Processing Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>Request Guided Demo Walkthrough</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                    🔒 No obligation. Your institutional details remain 100% confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Information & Trust Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Trust Box */}
              <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-900/90 via-slate-900 to-slate-950 text-white border border-blue-500/30 shadow-2xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Vexa IQ Solutions</h3>
                    <p className="text-xs text-cyan-300 font-semibold">Institutional Operating System</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs leading-relaxed text-slate-300 font-normal">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">CA-Ready Accounting:</strong> Direct double-entry financial ledger with POS cash counter reconciliation.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Board & Regulatory Vault:</strong> Instant document retrieval for CBSE, ICSE, RTE, and Fire Safety audits.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">100% Data Sovereignty:</strong> Dedicated database isolation with 256-bit encryption for every institution.
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-3 text-xs">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:info@vexaiq.com" className="hover:text-white transition-colors">info@vexaiq.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+91 (800) 123-VEXA</span>
                  </div>
                </div>
              </div>

              {/* Direct Support Pill */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Already an existing customer?</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sign in to access your administrative dashboard.</p>
                </div>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-bold hover:bg-blue-100 transition-colors shrink-0"
                >
                  Sign In &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
