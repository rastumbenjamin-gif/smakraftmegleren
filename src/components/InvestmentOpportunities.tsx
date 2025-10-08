import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Zap, Calendar, Users, TrendingUp } from "lucide-react";
import { RegistrationModal } from "./RegistrationModal";
import { MoreOpportunitiesModal } from "./MoreOpportunitiesModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import hydroPlant1 from "@/assets/hydro-plant-1.jpg";
import hydroPlant2 from "@/assets/hydro-plant-2.jpg";
import hydroPlant3 from "@/assets/hydro-plant-3.jpg";
import vollabekkenKraftverk from "@/assets/vollabekken-kraftverk.jpg";
import sandvikEnergi from "@/assets/sandvik-energi.jpg";
import hindbergelvaKraftverk from "@/assets/hindbergelva-kraftverk.jpg";
import vollabekkenKraftverkNew from "@/assets/vollabekken-kraftverk-new.jpg";
import molnelvaKraftverk from "@/assets/molnelva-kraftverk.jpg";

export const InvestmentOpportunities = () => {
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  const opportunities = [
    {
      id: 1,
      name: "Hindbergelva kraftverk",
      location: "Mosvik, Trøndelag",
      capacity: "530 kW",
      annualProduction: "1.43 GWh/år",
      roi: "6%",
      funded: 45,
      totalInvestment: "37 MNOK",
      minInvestment: "0.5 MNOK",
      co2Reduction: "2,400",
      operationalDate: "In Operation (1987)",
      investors: 89,
      image: hindbergelvaKraftverk,
      status: "Available investment",
      statusColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      buildYear: "1987",
      advantages: [
        t('opportunities.hindbergelva.advantage1'),
        t('opportunities.hindbergelva.advantage2')
      ]
    },
    {
      id: 3,
      name: "Vollabekken kraftverk",
      location: "Indre Fosen, Trøndelag",
      capacity: "0.99 MW",
      annualProduction: "2.95 GWh/år",
      roi: "6%",
      funded: 0,
      totalInvestment: "28 MNOK",
      minInvestment: "0.5 MNOK",
      co2Reduction: "1,200",
      operationalDate: "In Operation (2012)",
      investors: 0,
      image: vollabekkenKraftverkNew,
      status: "Available investment",
      statusColor: "bg-success",
      buildYear: "2012",
      advantages: [
        t('opportunities.vollabekken.advantage1'),
        t('opportunities.vollabekken.advantage2')
      ]
    },
    {
      id: 4,
      name: "Mølnelva kraftverk",
      location: "Dyrøy, Troms",
      capacity: "1.2 MW",
      annualProduction: "3.8 GWh/år",
      roi: "6%",
      funded: 0,
      totalInvestment: "TBD",
      minInvestment: "0.5 MNOK",
      co2Reduction: "1,500",
      operationalDate: "In Operation (2008)",
      investors: 0,
      image: molnelvaKraftverk,
      status: "Available investment",
      statusColor: "bg-success",
      buildYear: "2008",
      advantages: [
        t('opportunities.molnelva.advantage1'),
        t('opportunities.molnelva.advantage2')
      ]
    }
  ];
  
  return (
    <section 
      id="investment-opportunities" 
      ref={sectionRef}
      className="py-12 bg-white opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <Badge className="mb-3 bg-emerald-600 text-white border-0 text-sm">{t('opportunities.badge')}</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">{t('opportunities.title')}</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-light">
            {t('opportunities.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto justify-items-center">
          {opportunities.map((plant) => (
            <Card key={plant.id} className="group relative overflow-hidden bg-white/98 backdrop-blur-sm border-2 border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400 h-full flex flex-col rounded-2xl">
              <div className="relative z-10 h-full flex flex-col">
                {/* Plant Image */}
                <div className="relative h-36 overflow-hidden rounded-t-lg">
                  <img 
                    src={plant.image} 
                    alt={`${plant.name} hydroelectric plant`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Status Badge Overlay on Image */}
                  <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary"
                    className={`${
                      plant.operationalDate.includes("Operation") 
                        ? 'bg-emerald-600 text-white border-0 shadow-lg' 
                        : plant.operationalDate.includes("construction")
                        ? 'bg-orange-500 text-white border-0 shadow-lg'
                        : 'bg-blue-600 text-white border-0 shadow-lg'
                    } px-4 py-1.5 text-sm font-semibold backdrop-blur-sm`}
                  >
                    {plant.operationalDate.includes("Operation") 
                      ? t('opportunities.inOperation') 
                      : plant.operationalDate.includes("construction")
                      ? "Consented project - not built"
                      : t('opportunities.consentedProject')}
                  </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3 pt-4">
                  {/* Plant Info */}
                  <div className="space-y-1.5">
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">{plant.name}</CardTitle>
                    <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      {plant.location}
                    </div>
                  </div>
                </CardHeader>

              <CardContent className="space-y-4 flex-1 flex flex-col pt-3">
                <div className="flex-1 space-y-4">
                {/* Key Metrics - Prominent Display */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2.5 bg-white/70 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-sm">
                    <div className="text-base font-bold text-slate-900 leading-tight">{plant.capacity}</div>
                    <div className="text-[9px] text-slate-600 mt-1 font-medium leading-tight">{t('opportunities.capacity')}</div>
                  </div>
                  <div className="text-center p-2.5 bg-emerald-50/70 backdrop-blur-md rounded-xl border border-emerald-200/60 shadow-sm">
                    <div className="text-base font-bold text-emerald-700 leading-tight">{plant.annualProduction.replace('GWh/år', 'GWh')}</div>
                    <div className="text-[9px] text-slate-600 mt-1 font-medium leading-tight break-words">{t('opportunities.production')}</div>
                  </div>
                  <div className="text-center p-2.5 bg-blue-50/70 backdrop-blur-md rounded-xl border border-blue-200/60 shadow-sm">
                    <div className="text-xl font-extrabold text-blue-700 leading-tight">{plant.roi}</div>
                    <div className="text-[9px] text-slate-600 mt-1 font-medium leading-tight">ROI</div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 p-2 bg-white/70 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-sm">
                    <MapPin className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-slate-900 text-[11px] leading-tight truncate">{plant.location.split(',')[0]}</div>
                      <div className="text-[9px] text-slate-600 leading-tight truncate">{plant.location.split(',')[1]}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white/70 backdrop-blur-md rounded-xl border border-slate-200/60 shadow-sm">
                    <Calendar className="h-3.5 w-3.5 text-slate-500 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-slate-900 text-[11px] leading-tight">{plant.buildYear}</div>
                      <div className="text-[9px] text-slate-600 leading-tight truncate">{t('opportunities.buildYear')}</div>
                    </div>
                  </div>
                </div>

                {/* Unique Advantages */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">{t('opportunities.advantages')}</h4>
                  <div className="space-y-2">
                    {plant.advantages.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-slate-600 leading-relaxed">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </div>

                {/* CTA Button */}
                <RegistrationModal plantName={plant.name}>
                  <Button 
                    variant="default" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 h-auto py-3 px-4 text-sm font-semibold whitespace-normal mt-auto rounded-lg shadow-md"
                  >
                    {t('opportunities.register')}
                  </Button>
                </RegistrationModal>
              </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* More Opportunities CTA Section */}
        <div className="mt-20 text-center animate-fade-in [animation-delay:600ms]">
          <Card className="max-w-4xl mx-auto bg-white/98 backdrop-blur-sm border-2 border-slate-200/80 shadow-xl rounded-3xl">
            <CardContent className="p-10">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{t('opportunities.more.title')}</h3>
                </div>
                
                <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                  {t('opportunities.more.subtitle')}
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="text-slate-700">{t('opportunities.more.feature1')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700">{t('opportunities.more.feature2')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                    <Users className="h-4 w-4 text-slate-600" />
                    <span className="text-slate-700">{t('opportunities.more.feature3')}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <MoreOpportunitiesModal>
                    <Button 
                      variant="default"
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-7 h-auto text-lg w-full sm:w-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {t('opportunities.more.cta')}
                    </Button>
                  </MoreOpportunitiesModal>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};