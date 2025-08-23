// Update this page (the content is just a fallback if you fail to update the page)

import { HeroSection } from "@/components/HeroSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { InvestmentOpportunities } from "@/components/InvestmentOpportunities";
import { Header } from "@/components/Header";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LanguageToggle />
      <main>
        <section className="scroll-snap-start">
          <HeroSection />
        </section>
        <section className="scroll-snap-start">
          <ComparisonSection />
        </section>
        <section className="scroll-snap-start">
          <InvestmentOpportunities />
        </section>
      </main>
    </div>
  );
};

export default Index;
