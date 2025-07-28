import React from "react";
import { PharmaHeroSection } from "@/components/pharma/PharmaHeroSection";
import { PharmaOpportunitySection } from "@/components/pharma/PharmaOpportunitySection";
import { PharmaPainPointsSection } from "@/components/pharma/PharmaPainPointsSection";
import { PharmaSolutionSection } from "@/components/pharma/PharmaSolutionSection";
import { PharmaBenefitsSection } from "@/components/pharma/PharmaBenefitsSection";
import { PharmaTestimonialSection } from "@/components/pharma/PharmaTestimonialSection";
import { PharmaFinalCTASection } from "@/components/pharma/PharmaFinalCTASection";
import { PharmaFooter } from "@/components/pharma/PharmaFooter";

const FarmaDelivery = () => {
  return (
    <div className="min-h-screen bg-pharma-white">
      <PharmaHeroSection />
      <PharmaOpportunitySection />
      <PharmaPainPointsSection />
      <PharmaSolutionSection />
      <PharmaBenefitsSection />
      <PharmaTestimonialSection />
      <PharmaFinalCTASection />
      <PharmaFooter />
    </div>
  );
};

export default FarmaDelivery;