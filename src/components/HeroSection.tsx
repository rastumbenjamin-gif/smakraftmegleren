import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hydro-hero-new.jpg";
import { Zap, Droplet, TrendingUp } from "lucide-react";
import { SellPowerPlantModal } from "./SellPowerPlantModal";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8 animate-fade-in max-w-2xl">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 animate-fade-in [animation-delay:200ms]">
                <div className="flex items-center gap-2 bg-cyan-50/80 px-4 py-2.5 rounded-full border border-cyan-200/60">
                  <Zap className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm font-medium text-slate-700">{t('hero.feature1')}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50/80 px-4 py-2.5 rounded-full border border-blue-200/60">
                  <Droplet className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">{t('hero.feature2')}</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50/80 px-4 py-2.5 rounded-full border border-emerald-200/60">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{t('hero.feature3')}</span>
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="md:hidden space-y-4 pt-4 animate-fade-in [animation-delay:400ms]">
                <Button 
                  size="lg"
                  className="group w-full text-lg px-10 py-7 h-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold"
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
                    className="group w-full text-lg px-10 py-7 h-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-slate-400 shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold"
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
            <div className="hidden lg:flex flex-col gap-6 animate-fade-in [animation-delay:600ms] min-w-[420px]">
              {/* Card 1 - Invest CTA */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => document.getElementById('investment-opportunities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{t('hero.cta1')}</h3>
                    <p className="text-sm text-slate-600">
                      {t('hero.cta1.line1')} • {t('hero.cta1.line2')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Sell CTA */}
              <SellPowerPlantModal>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Droplet className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">{t('hero.cta2')}</h3>
                      <p className="text-sm text-slate-600">
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