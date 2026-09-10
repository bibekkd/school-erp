import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FourPromisesSection from "@/components/landing/FourPromisesSection";
import OperationalProblemSection from "@/components/landing/OperationalProblemSection";
import InformationFlowSection from "@/components/landing/InformationFlowSection";
import ComplianceSection from "@/components/landing/ComplianceSection";
import AiAssistantSection from "@/components/landing/AiAssistantSection";
import FinancialsSection from "@/components/landing/FinancialsSection";
import AuditVaultSection from "@/components/landing/AuditVaultSection";
import RoleBasedSection from "@/components/landing/RoleBasedSection";
import TrustSafeguardsSection from "@/components/landing/TrustSafeguardsSection";
import CtaBannerSection from "@/components/landing/CtaBannerSection";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Social Proof & Regulatory Board Badges */}
      <SocialProofSection />

      {/* 3. Four Core Promises (Why Vexa is Different) */}
      <FourPromisesSection />

      {/* 4. Operational Problem vs Vexa Unified OS */}
      <OperationalProblemSection />

      {/* 5. Connectivity & Information Flow Diagram */}
      <InformationFlowSection />

      {/* 6. Board & Regulatory Compliance Vault (Dark Theme) */}
      <ComplianceSection />

      {/* 7. AI Copilot / Assistant Showcase */}
      <AiAssistantSection />

      {/* 8. Financial Ledger & Smart Cash Counters */}
      <FinancialsSection />

      {/* 9. Legal Audit Discovery Vault & Staff Career Service Book */}
      <AuditVaultSection />

      {/* 10. Role-Based Experience Interactive Switcher */}
      <RoleBasedSection />

      {/* 11. Institutional Trust & Security Pillars */}
      <TrustSafeguardsSection />

      {/* 12. Bottom Conversion CTA Banner */}
      <CtaBannerSection />

      {/* 13. Comprehensive SaaS Footer */}
      <FooterSection />
    </div>
  );
}
