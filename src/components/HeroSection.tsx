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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch pt-8 animate-fade-in [animation-delay:1000ms] max-w-6xl mx-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="group flex-1 sm:flex-1 sm:max-w-[500px] text-base sm:text-xl px-6 sm:px-8 py-8 sm:py-10 h-auto bg-black/60 backdrop-blur-md text-white border-2 border-white/50 hover:border-white hover:bg-black/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.02] rounded-2xl"
              onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex flex-col items-center justify-center text-center h-full gap-2">
                <span className="font-bold text-white text-xl sm:text-2xl drop-shadow-lg">{t('hero.cta1')}</span>
                <span className="text-base opacity-90 text-white drop-shadow-md">{t('hero.cta1.line1')} • {t('hero.cta1.line2')}</span>
              </div>
            </Button>
            <SellPowerPlantModal>
              <Button 
                variant="outline" 
                size="lg"
                className="group flex-1 sm:flex-1 sm:max-w-[500px] text-base sm:text-xl px-6 sm:px-8 py-8 sm:py-10 h-auto bg-black/60 backdrop-blur-md text-white border-2 border-white/50 hover:border-white hover:bg-black/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.02] rounded-2xl"
              >
                <div className="flex flex-col items-center justify-center text-center w-full h-full gap-2">
                  <span className="font-bold text-white text-xl sm:text-2xl drop-shadow-lg">{t('hero.cta2')}</span>
                  <span className="text-base opacity-90 text-white drop-shadow-md">{t('hero.cta2.subtitle')}</span>
                </div>
              </Button>
            </SellPowerPlantModal>
          </div>
        </div>
      </div>
    </section>
  );
};