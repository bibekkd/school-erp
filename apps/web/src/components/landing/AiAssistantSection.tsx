"use client";

import { useState } from "react";
import { BrainCircuit, Send, Clock, ArrowRight } from "lucide-react";

export default function AiAssistantSection() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  const aiCapabilities = [
    {
      title: "Ask complex queries in natural language",
      query: "Show total uncollected tuition fees for Class 10 Section B for Quarter 2",
      response:
        "Class 10-B has 14 uncollected tuition installments totaling ₹2.80 Lakhs. 8 parents paid partially, 6 have pending fee extensions.",
      tag: "Financial Insights",
    },
    {
      title: "Generate instantly actionable insights & reports",
      query: "Generate a summary of monthly attendance vs academic performance for Grade 8",
      response:
        "Students with >92% attendance scored 18% higher in Science & Mathematics mid-terms. 3 students flagged for low attendance.",
      tag: "Academic Analytics",
    },
    {
      title: "Search across thousands of documents instantly",
      query: "Locate CBSE 2024 Renewal Certificate & Sanitary Inspector Audit Document",
      response:
        "Found 2 matching documents in Legal Vault. CBSE Renewal Ref: #CBSE-2024-991 (Valid till Mar 2029). Download PDF ready.",
      tag: "Instant Vault Search",
    },
    {
      title: "Look up student & staff histories in seconds",
      query: "Retrieve service record, salary history and leave log for Senior Science Teacher Dr. Anita Sharma",
      response:
        "Dr. Anita Sharma: Joined June 2018. Designations: PGT Physics. Current Basic: ₹72,500. Total Service: 8 Years 3 Months.",
      tag: "Employee Career Ledger",
    },
    {
      title: "Auto-draft official letters & notices",
      query: "Draft urgent notice to parents regarding annual sports day schedule and uniform guidelines",
      response:
        "Draft Generated: 'Dear Parent, We are excited to announce Annual Sports Meet 2026...' [Click to send via SMS / WhatsApp / App Portal].",
      tag: "Automated Communication",
    },
  ];

  return (
    <section id="ai-assistant" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Coming Soon Alert Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-white dark:from-blue-950/80 dark:to-slate-950 border border-blue-200 dark:border-blue-500/40 text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-500/40 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 dark:text-white text-sm">Future Platform Vision</span>
                <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-cyan-300 font-bold text-[10px] uppercase border border-blue-200 dark:border-blue-500/30">
                  COMING SOON Q4 2026
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-normal">
                Vexa IQ AI is currently in private beta testing. Partner institutions receive early preview access.
              </p>
            </div>
          </div>
          <a
            href="#book-demo"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shrink-0 shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Request Early Beta Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-xs font-bold text-blue-700 dark:text-cyan-400 tracking-wider uppercase mb-4">
            <BrainCircuit className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            AI ASSISTANT &bull; COMING SOON
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            An AI Assistant That Understands{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-300 text-transparent bg-clip-text">Your Institution.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            An intelligent AI layer built directly on top of your institutional database — ask questions, retrieve documents, and analyze school performance in real-time.
          </p>
        </div>

        {/* 2 Column Interactive Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Prompt Selection Buttons */}
          <div className="lg:col-span-6 space-y-3">
            {aiCapabilities.map((cap, idx) => {
              const isSelected = selectedPromptIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedPromptIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${isSelected
                      ? "bg-blue-600 dark:bg-slate-900 border-blue-600 dark:border-cyan-500/60 shadow-md text-white"
                      : "bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 shadow-xs"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${isSelected
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-sm font-semibold">{cap.title}</span>
                  </div>
                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${isSelected
                        ? "bg-white/20 text-white border-white/30"
                        : "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-cyan-400 border-blue-200 dark:border-blue-500/20"
                      }`}
                  >
                    {cap.tag}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Simulated Interactive Chat UI (White mode in light theme, dark in dark theme) */}
          <div className="lg:col-span-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-blue-500/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px]">
                    <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center text-cyan-400">
                      <BrainCircuit className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      Vexa IQ AI
                      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Context: Full Institution Database</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 px-2.5 py-1 rounded border border-amber-200 dark:border-amber-500/20 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Coming Soon
                  </span>
                </div>
              </div>

              {/* Simulated Query Chat Bubbles */}
              <div className="space-y-4 text-xs">
                {/* User Prompt Bubble */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] p-3.5 rounded-2xl rounded-tr-none bg-blue-600 text-white font-medium shadow-sm">
                    {aiCapabilities[selectedPromptIndex].query}
                  </div>
                </div>

                {/* AI Response Bubble */}
                <div className="flex justify-start items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-cyan-500/20 border border-blue-200 dark:border-cyan-500/40 flex items-center justify-center text-blue-700 dark:text-cyan-300 shrink-0 mt-1">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <div className="max-w-[85%] p-4 rounded-2xl rounded-tl-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-relaxed shadow-sm">
                    <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-200 dark:border-slate-800">
                      <span className="font-bold text-blue-700 dark:text-cyan-300">Simulated AI Output</span>
                      <span className="text-[10px] text-slate-400">Feature Preview</span>
                    </div>
                    {aiCapabilities[selectedPromptIndex].response}
                  </div>
                </div>
              </div>

              {/* Mock Chat Input */}
              <div className="pt-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-mono text-slate-500">Ask your AI assistant anything... (Coming Soon)</span>
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center cursor-not-allowed opacity-80">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
