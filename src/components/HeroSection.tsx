import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hydro-hero.jpg";
import { Zap, Droplet, TrendingUp } from "lucide-react";
import { SellPowerPlantModal } from "./SellPowerPlantModal";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-hydro-green/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2 mb-6">
            🇳🇴 Norwegian Hydroelectric Investments
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Real Green Investments
            <span className="block text-hydro-green-light">Not Greenwashing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Own actual hydro plants in Norway. Generate 8-15% annual returns while creating 
            measurable environmental impact that directly contributes to your sustainability goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Zap className="h-4 w-4" />
              <span>Clean Energy Production</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Droplet className="h-4 w-4" />
              <span>Norwegian Fjord Power</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <TrendingUp className="h-4 w-4" />
              <span>8-15% Annual ROI</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="invest" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
            >
              View Investment Opportunities
            </Button>
            <SellPowerPlantModal>
              <Button 
                variant="hydro-outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto text-white border-white hover:bg-white hover:text-primary"
              >
                Sell Your Power Plant
              </Button>
            </SellPowerPlantModal>
          </div>
        </div>
      </div>
    </section>
  );
};