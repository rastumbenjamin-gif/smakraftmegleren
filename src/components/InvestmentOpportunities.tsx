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
      image: sandvikEnergi,
      status: "Available investment",
      statusColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      buildYear: "1987",
      advantages: [
        t('opportunities.hindbergelva.advantage1'),
        t('opportunities.hindbergelva.advantage2'),
        t('opportunities.hindbergelva.advantage3')
      ]
    },
    {
      id: 2,
      name: "Bjøråa kraftverk",
      location: "Høylandet, Trøndelag", 
      annualProduction: "7.2 GWh/år",
      roi: "High ROI potential",
      funded: 0,
      totalInvestment: "82 MNOK",
      minInvestment: "0.5 MNOK",
      co2Reduction: "2,970",
      operationalDate: "Under construction (2024)",
      investors: 0,
      image: vollabekkenKraftverk,
      status: "Under construction",
      statusColor: "bg-primary",
      buildYear: "2024-2025",
      advantages: [
        t('opportunities.bjora.advantage1'),
        t('opportunities.bjora.advantage2')
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
      image: hydroPlant2,
      status: "Available investment",
      statusColor: "bg-success",
      buildYear: "2012",
      advantages: [
        t('opportunities.vollabekken.advantage1'),
        t('opportunities.vollabekken.advantage2'),
        t('opportunities.vollabekken.advantage3')
      ]
    },
    {
      id: 4,
      name: "Sandvik Energi",
      location: "Vindafjord, Rogaland",
      capacity: "1 MW",
      annualProduction: "3 GWh/år",
      roi: "6%",
      funded: 0,
      totalInvestment: "35 MNOK",
      minInvestment: "0.5 MNOK",
      co2Reduction: "1,500",
      operationalDate: "In Operation (2018)",
      investors: 0,
      image: hydroPlant1,
      status: "Available investment",
      statusColor: "bg-success",
      buildYear: "2018",
      advantages: [
        t('opportunities.sandvik.advantage1'),
        t('opportunities.sandvik.advantage2'),
        t('opportunities.sandvik.advantage3')
      ]
    }
  ];
  
  return (
    <section 
      id="investment-opportunities" 
      ref={sectionRef}
      className="py-20 bg-muted/20 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hydro-blue text-white">{t('opportunities.badge')}</Badge>
          <h2 className="text-4xl font-bold mb-6">{t('opportunities.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('opportunities.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
          {opportunities.map((plant) => (
            <Card key={plant.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-white to-muted/20">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-hydro-blue via-hydro-green to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-lg">
                <div className="w-full h-full bg-background rounded-[6px]" />
              </div>
              
              <div className="relative z-10">
                {/* Plant Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
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
                        ? 'bg-success/90 text-white border-success/20' 
                        : plant.operationalDate.includes("construction")
                        ? 'bg-orange-500/90 text-white border-orange-500/20'
                        : 'bg-primary/90 text-white border-primary/20'
                    } px-3 py-1 text-xs font-medium backdrop-blur-sm`}
                  >
                    {plant.operationalDate.includes("Operation") 
                      ? t('opportunities.inOperation') 
                      : plant.operationalDate.includes("construction")
                      ? "Consented project - not built"
                      : t('opportunities.consentedProject')}
                  </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  {/* Plant Info */}
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-hydro-blue transition-colors duration-300">{plant.name}</CardTitle>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4" />
                      {plant.location}
                    </div>
                  </div>
                </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Metrics - Prominent Display */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-hydro-blue/5 rounded-lg border border-hydro-blue/10">
                    <div className="text-lg font-bold text-hydro-blue">{plant.capacity}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('opportunities.capacity')}</div>
                  </div>
                  <div className="text-center p-3 bg-success/5 rounded-lg border border-success/10">
                    <div className="text-lg font-bold text-success">{plant.annualProduction.replace('år', 'year')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('opportunities.production')}</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="text-xl font-extrabold text-primary">{plant.roi}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">ROI</div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{plant.location.split(',')[0]}</div>
                      <div className="text-xs text-muted-foreground">{plant.location.split(',')[1]}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{plant.buildYear}</div>
                      <div className="text-xs text-muted-foreground">{t('opportunities.buildYear')}</div>
                    </div>
                  </div>
                </div>

                {/* Key Information */}
                <div>
                  <h4 className="font-semibold mb-3">{t('opportunities.keyInformation')}</h4>
                  <div className="space-y-2">
                    {plant.advantages.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-hydro-green mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <RegistrationModal plantName={plant.name}>
                  <Button 
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary/90 text-white group-hover:bg-gradient-to-r group-hover:from-hydro-blue group-hover:to-hydro-green transition-all duration-300 h-auto py-3 px-4 text-sm font-medium whitespace-normal"
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
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-hydro-blue/5 to-hydro-green/5 border-hydro-blue/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-hydro-blue to-hydro-green flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{t('opportunities.more.title')}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('opportunities.more.subtitle')}
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-hydro-blue/10 px-4 py-2 rounded-full">
                    <MapPin className="h-4 w-4 text-hydro-blue" />
                    <span>{t('opportunities.more.feature1')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-hydro-green/10 px-4 py-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-hydro-green" />
                    <span>{t('opportunities.more.feature2')}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{t('opportunities.more.feature3')}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <MoreOpportunitiesModal>
                    <Button 
                      variant="default"
                      size="lg"
                      className="bg-gradient-to-r from-hydro-blue to-hydro-green text-white px-8 py-6 h-auto text-lg w-full sm:w-auto"
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