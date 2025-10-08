import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hydro-hero-new.jpg";
import { Zap, Droplet, TrendingUp } from "lucide-react";
import { SellPowerPlantModal } from "./SellPowerPlantModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTypewriter } from "@/hooks/useTypewriter";

export const HeroSection = () => {
  const { t } = useLanguage();
  const titleText = t('hero.title');
  const typedTitle = useTypewriter(titleText, 8, 150);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/95 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.2fr_auto] gap-12 items-center max-w-[1200px] mx-auto">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8 max-w-2xl">
              <div className="space-y-5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-slate-900 tracking-tight animate-fade-in [animation-delay:200ms] min-h-[1.15em]">
                  {typedTitle}
                  <span className="inline-block w-1 h-[0.9em] bg-emerald-600 ml-1 animate-pulse" style={{ verticalAlign: 'text-bottom' }}></span>
                </h1>
                <p className="text-base md:text-lg text-slate-600 leading-[1.7] font-light max-w-xl animate-fade-in [animation-delay:400ms]">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="lg:hidden space-y-3 pt-4">
                <Button 
                  size="lg"
                  className="group w-full text-base px-6 py-4 h-auto bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold animate-fade-in [animation-delay:600ms]"
                  onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="flex items-center gap-2">
                    <span>{t('hero.cta1')}</span>
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </Button>

                <SellPowerPlantModal>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="group w-full text-base px-6 py-4 h-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-emerald-600 shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold animate-fade-in [animation-delay:800ms]"
                  >
                    <div className="flex items-center gap-2">
                      <span>{t('hero.cta2')}</span>
                      <Droplet className="h-4 w-4" />
                    </div>
                  </Button>
                </SellPowerPlantModal>
              </div>
            </div>

            {/* Right Column - CTA Cards */}
            <div className="hidden lg:flex flex-col gap-4 min-w-[360px]">
              {/* Card 1 - Invest CTA */}
              <div 
                className="bg-white/98 backdrop-blur-sm rounded-2xl shadow-lg p-5 border-2 border-slate-200/80 hover:shadow-xl hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in [animation-delay:600ms]"
                onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-600/30">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{t('hero.cta1')}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t('hero.cta1.line1')} • {t('hero.cta1.line2')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Sell CTA */}
              <SellPowerPlantModal>
                <div className="bg-white/98 backdrop-blur-sm rounded-2xl shadow-lg p-5 border-2 border-slate-200/80 hover:shadow-xl hover:border-emerald-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-fade-in [animation-delay:800ms]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-600/30">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{t('hero.cta2')}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {t('hero.cta2.subtitle')}
                      </p>
                    </div>
                  </div>
                </div>
              </SellPowerPlantModal>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};