import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hydro-hero.jpg";
import { Zap, Droplet, TrendingUp } from "lucide-react";
import { SellPowerPlantModal } from "./SellPowerPlantModal";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-hydro-green/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Badge className="bg-black/40 backdrop-blur-sm text-white border-white/30 text-sm px-4 py-2 mb-6 animate-fade-in [animation-delay:200ms] shadow-lg">
            🇳🇴 Norwegian Hydroelectric Investments
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in [animation-delay:400ms] text-white drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_0.8)]">
            Real Green Investments
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mx-auto max-w-3xl border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-white leading-relaxed animate-fade-in [animation-delay:600ms] font-medium">
              Own actual hydro plants in Norway. Generate 5-10% annual returns while creating 
              measurable environmental impact that directly contributes to your sustainability goals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm animate-fade-in [animation-delay:800ms]">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
              <Zap className="h-4 w-4" />
              <span className="font-medium">Clean Energy Production</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
              <Droplet className="h-4 w-4" />
              <span className="font-medium">Norwegian Fjord Power</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
              <TrendingUp className="h-4 w-4" />
              <span className="font-medium">5-10% Annual ROI</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in [animation-delay:1000ms] max-w-5xl mx-auto">
            <Button 
              variant="invest" 
              size="lg" 
              className="w-full sm:min-w-[400px] text-lg px-6 py-6 h-auto bg-gradient-to-r from-hydro-blue to-hydro-green hover:opacity-90 shadow-2xl border-2 border-white/20"
              onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex flex-col items-center text-center">
                <span className="font-bold text-white">View Investment Opportunities</span>
                <span className="text-sm opacity-90 mt-1 text-white">Start investing today</span>
              </div>
            </Button>
            <SellPowerPlantModal>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:min-w-[400px] text-lg px-6 py-6 h-auto bg-black/30 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary shadow-2xl"
              >
                <div className="flex flex-col items-center text-center w-full">
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-1">
                    <span className="font-bold whitespace-nowrap">Sell Your Power Plant</span>
                    <div className="flex items-center gap-1 bg-green-500 px-2 py-1 rounded text-xs font-bold text-white whitespace-nowrap">
                      <span className="line-through text-green-200">10k NOK</span>
                      <span>FREE</span>
                    </div>
                  </div>
                  <span className="text-sm opacity-90">Free evaluation • No obligations</span>
                </div>
              </Button>
            </SellPowerPlantModal>
          </div>
        </div>
      </div>
    </section>
  );
};