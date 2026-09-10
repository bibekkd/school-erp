"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowLeft, Menu, X, Building2 } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export interface NavbarProps {
  showNavLinks?: boolean;
}

export default function Navbar({ showNavLinks }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const shouldShowNavLinks = showNavLinks ?? (pathname === "/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why Vexa", href: "#why-vexa" },
    { name: "Compliance", href: "#compliance" },
    { name: "Data Flow", href: "#data-flow" },
    { name: "AI Assistant", href: "#ai-assistant" },
    { name: "Financials", href: "#financials" },
    { name: "Role Views", href: "#role-views" },
    { name: "Trust & Security", href: "#trust" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-all">
              <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">VEXA</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                  IQ
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-slate-500 dark:text-slate-400 font-semibold uppercase">
                Institution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (only on Home page) */}
          {shouldShowNavLinks && (
            <nav className="hidden lg:flex items-center gap-1 bg-white/40 dark:bg-slate-900/40 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 rounded-full transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ModeToggle />
            <Link
              href="/login"
              className="text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 px-3.5 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Sign In
            </Link>

            {/* Gradient Animated CTA Button */}
            <Link
              href="/contact"
              className="group relative overflow-hidden pl-5 pr-1.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700 hover:border-blue-400 transition-all duration-300 flex items-center justify-between gap-3 text-xs font-extrabold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full pointer-events-none" />

              <span className="relative z-10 text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300 font-bold">
                Book a Demo
              </span>

              <span className="relative z-10 w-7 h-7 flex items-center justify-center shrink-0">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 transition-opacity duration-300 group-hover:opacity-0" />
                <ArrowRight className="relative z-10 w-3.5 h-3.5 text-white group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl backdrop-blur-xl space-y-3">
            {shouldShowNavLinks && (
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
            <div className={`flex flex-col gap-2 ${shouldShowNavLinks ? "pt-3 border-t border-slate-200 dark:border-slate-800" : ""}`}>
              {!shouldShowNavLinks && (
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  <span>Back</span>
                </Link>
              )}
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl"
              >
                Sign In to Portal
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
