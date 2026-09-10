"use client";

import Link from "next/link";
import { Building2, ShieldCheck, CheckCircle2, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">VEXA</span>
                  <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30">
                    IQ Solutions
                  </span>
                </div>
                <span className="text-[10px] tracking-wider text-slate-500 dark:text-slate-400 font-medium uppercase">
                  Connected Institution OS
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm font-normal">
              One connected operating platform for schools, colleges and coaching networks. One source of truth for admissions, finance, compliance, and governance. A smarter institution.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-2 font-medium">
              <span className="flex items-center gap-1 text-blue-600 dark:text-cyan-400">
                <ShieldCheck className="w-4 h-4" /> 256-Bit Encrypted
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> CA-Ready Financials
              </span>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Mail className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
              <span>Email:</span>
              <a href="mailto:info@vexaiq.com" className="text-blue-600 dark:text-cyan-400 hover:underline">
                info@vexaiq.com
              </a>
            </div>
          </div>

          {/* Column 1: PLATFORM */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">PLATFORM</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#why-vexa" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Architecture Overview</a></li>
              <li><a href="#data-flow" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Information Flow Engine</a></li>
              <li><a href="#compliance" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Board Compliance Vault</a></li>
              <li><a href="#ai-assistant" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Vexa IQ AI</a></li>
              <li><a href="#financials" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Smart Fee & POS Cash</a></li>
              <li><a href="#role-views" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Role-Based Workspaces</a></li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">COMPANY</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About Vexa IQ</a></li>
              <li><a href="#case-studies" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Institution Case Studies</a></li>
              <li><a href="#security" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Security & SLA Guarantee</a></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact Support</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Schedule Guided Demo</Link></li>
            </ul>
          </div>

          {/* Column 3: LEGAL & COMPLIANCE */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">LEGAL & SAFETY</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#privacy" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#data-governance" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Data Governance</a></li>
              <li><a href="#rte-disclaimer" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Regulatory Notice</a></li>
            </ul>
            <div className="pt-2">
              <a
                href="#book-demo"
                className="inline-block px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div>
            &copy; 2026 Vexa IQ Solutions. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Notice</a>
            <a href="#terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security Audit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
