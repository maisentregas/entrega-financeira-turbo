import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { ProofSection } from "@/components/ProofSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <BenefitsSection />
      <WorkflowSection />
      <ProofSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;