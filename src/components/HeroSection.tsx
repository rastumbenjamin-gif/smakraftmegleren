import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hydro-hero-new.jpg";
import { Zap, Droplet, TrendingUp } from "lucide-react";
import { SellPowerPlantModal } from "./SellPowerPlantModal";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/95 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-[1.2fr_auto] gap-20 items-center max-w-[1400px] mx-auto">
            
            {/* Left Column - Main Content */}
            <div className="space-y-10 animate-fade-in max-w-2xl">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] text-slate-900 tracking-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-xl">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 animate-fade-in [animation-delay:200ms]">
                <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-200 shadow-sm">
                  <Zap className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{t('hero.feature1')}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-200 shadow-sm">
                  <Droplet className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">{t('hero.feature2')}</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full border border-slate-200 shadow-sm">
                  <TrendingUp className="h-4 w-4 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">{t('hero.feature3')}</span>
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="lg:hidden space-y-4 pt-6 animate-fade-in [animation-delay:400ms]">
                <Button 
                  size="lg"
                  className="group w-full text-lg px-10 py-7 h-auto bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold"
                  onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="flex items-center gap-3">
                    <span>{t('hero.cta1')}</span>
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </Button>

                <SellPowerPlantModal>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="group w-full text-lg px-10 py-7 h-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-emerald-600 shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold"
                  >
                    <div className="flex items-center gap-3">
                      <span>{t('hero.cta2')}</span>
                      <Droplet className="h-5 w-5" />
                    </div>
                  </Button>
                </SellPowerPlantModal>
              </div>
            </div>

            {/* Right Column - CTA Cards */}
            <div className="hidden lg:flex flex-col gap-5 animate-fade-in [animation-delay:400ms] min-w-[440px]">
              {/* Card 1 - Invest CTA */}
              <div 
                className="bg-white/98 backdrop-blur-sm rounded-2xl shadow-lg p-7 border border-slate-200/80 hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-emerald-600/20">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-tight">{t('hero.cta1')}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t('hero.cta1.line1')} • {t('hero.cta1.line2')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Sell CTA */}
              <SellPowerPlantModal>
                <div className="bg-white/98 backdrop-blur-sm rounded-2xl shadow-lg p-7 border border-slate-200/80 hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-emerald-600/20">
                      <Droplet className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-tight">{t('hero.cta2')}</h3>
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