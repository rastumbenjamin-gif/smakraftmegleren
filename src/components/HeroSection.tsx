import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hydro-hero-new.jpg";
import { Zap, Droplet, TrendingUp } from "lucide-react";
import { SellPowerPlantModal } from "./SellPowerPlantModal";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-hydro-green/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in [animation-delay:400ms] text-white drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_0.8)]">
            {t('hero.title')}
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mx-auto max-w-3xl border border-white/20 shadow-2xl">
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed animate-fade-in [animation-delay:600ms] font-medium">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm animate-fade-in [animation-delay:800ms]">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
              <Zap className="h-4 w-4" />
              <span className="font-medium">{t('hero.feature1')}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
              <Droplet className="h-4 w-4" />
              <span className="font-medium">{t('hero.feature2')}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">
              <TrendingUp className="h-4 w-4" />
              <span className="font-medium">{t('hero.feature3')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch pt-8 animate-fade-in [animation-delay:1000ms] max-w-5xl mx-auto">
            <Button 
              variant="invest" 
              size="lg" 
              className="w-full sm:w-auto sm:min-w-[300px] lg:min-w-[400px] text-base sm:text-lg px-4 sm:px-6 py-6 sm:py-8 h-auto min-h-[120px] bg-gradient-to-r from-hydro-blue to-hydro-green hover:opacity-90 shadow-2xl border-2 border-white/20"
              onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex flex-col items-center justify-center text-center h-full">
                <span className="font-bold text-white">{t('hero.cta1')}</span>
                <span className="text-sm opacity-90 mt-1 text-white">{t('hero.cta1.subtitle')}</span>
              </div>
            </Button>
            <SellPowerPlantModal>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto sm:min-w-[300px] lg:min-w-[400px] text-base sm:text-lg px-4 sm:px-6 py-6 sm:py-8 h-auto min-h-[120px] bg-black/30 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary shadow-2xl"
              >
                <div className="flex flex-col items-center justify-center text-center w-full h-full">
                  <div className="flex flex-wrap items-center justify-center gap-2 mb-1">
                    <span className="font-bold whitespace-nowrap">{t('hero.cta2')}</span>
                    <div className="flex items-center gap-1 bg-green-500 px-2 py-1 rounded text-xs font-bold text-white whitespace-nowrap">
                      <span className="line-through text-green-200">10k NOK</span>
                      <span>{t('hero.freeLimited')}</span>
                    </div>
                  </div>
                  <span className="text-sm opacity-90">{t('hero.cta2.subtitle')}</span>
                </div>
              </Button>
            </SellPowerPlantModal>
          </div>
        </div>
      </div>
    </section>
  );
};