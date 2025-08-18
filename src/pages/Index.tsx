// Update this page (the content is just a fallback if you fail to update the page)

import { HeroSection } from "@/components/HeroSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { InvestmentOpportunities } from "@/components/InvestmentOpportunities";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ComparisonSection />
      <InvestmentOpportunities />
    </div>
  );
};

export default Index;
