import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hydro-hero-new.jpg";
import { Zap, Droplet, TrendingUp } from "lucide-react";
import { SellPowerPlantModal } from "./SellPowerPlantModal";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Split Background */}
      <div className="absolute inset-0 grid md:grid-cols-2">
        {/* Left side - solid color */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50" />
        
        {/* Right side - image */}
        <div 
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/40 to-slate-50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 animate-fade-in [animation-delay:200ms]">
                <div className="flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200">
                  <Zap className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm font-medium text-cyan-900">{t('hero.feature1')}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                  <Droplet className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">{t('hero.feature2')}</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                  <TrendingUp className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-900">{t('hero.feature3')}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4 animate-fade-in [animation-delay:400ms]">
                <Button 
                  size="lg"
                  className="group w-full md:w-auto text-lg px-10 py-7 h-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold"
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
                    className="group w-full md:w-auto text-lg px-10 py-7 h-auto bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-slate-400 shadow-lg transition-all duration-300 hover:scale-[1.02] rounded-xl font-semibold"
                  >
                    <div className="flex items-center gap-3">
                      <span>{t('hero.cta2')}</span>
                      <Droplet className="h-5 w-5" />
                    </div>
                  </Button>
                </SellPowerPlantModal>
              </div>
            </div>

            {/* Right Column - Floating Cards */}
            <div className="hidden md:block relative h-[600px] animate-fade-in [animation-delay:600ms]">
              {/* Card 1 - Investment Stats */}
              <div className="absolute top-10 right-20 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{t('hero.cta1.line1')}</p>
                    <p className="text-sm text-slate-600">{t('hero.feature1')}</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Hydro Power */}
              <div className="absolute top-64 right-4 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <Droplet className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{t('hero.feature2')}</p>
                    <p className="text-sm text-slate-600">{t('hero.cta1.line2')}</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Energy */}
              <div className="absolute bottom-20 right-32 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{t('hero.feature3')}</p>
                    <p className="text-sm text-slate-600">{t('hero.subtitle').slice(0, 30)}...</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};