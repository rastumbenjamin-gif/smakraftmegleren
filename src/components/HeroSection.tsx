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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_0.8)] mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in [animation-delay:400ms]">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/30">
              <Zap className="h-5 w-5" />
              <span className="font-medium text-base">{t('hero.feature1')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/30">
              <Droplet className="h-5 w-5" />
              <span className="font-medium text-base">{t('hero.feature2')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/30">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium text-base">{t('hero.feature3')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto animate-fade-in [animation-delay:600ms]">
            <Button 
              variant="outline" 
              size="lg" 
              className="group w-full text-lg px-8 py-10 h-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/40 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 hover:scale-[1.02] rounded-2xl"
              onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <span className="font-bold text-2xl">{t('hero.cta1')}</span>
                <span className="text-base font-normal text-white/90">{t('hero.cta1.line1')} • {t('hero.cta1.line2')}</span>
              </div>
            </Button>
            <SellPowerPlantModal>
              <Button 
                variant="outline" 
                size="lg"
                className="group w-full text-lg px-8 py-10 h-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/40 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 hover:scale-[1.02] rounded-2xl"
              >
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <span className="font-bold text-2xl">{t('hero.cta2')}</span>
                  <span className="text-base font-normal text-white/90">{t('hero.cta2.subtitle')}</span>
                </div>
              </Button>
            </SellPowerPlantModal>
          </div>
        </div>
      </div>
    </section>
  );
};