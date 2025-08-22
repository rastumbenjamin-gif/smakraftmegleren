import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Zap, Calendar, Users, TrendingUp } from "lucide-react";
import { RegistrationModal } from "./RegistrationModal";
import { MoreOpportunitiesModal } from "./MoreOpportunitiesModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const opportunities = [
  {
    id: 1,
    name: "Hindbergelva kraftverk",
    location: "Mosvik, Trøndelag",
    capacity: "1.2 MW",
    annualProduction: "5.8 GWh/år",
    roi: "11.2%",
    funded: 45,
    totalInvestment: "37 MNOK",
    minInvestment: "0.5 MNOK",
    co2Reduction: "2,400",
    operationalDate: "In Operation (1987)",
    investors: 89,
    image: "🏔️",
    status: "Available investment",
    statusColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    buildYear: "1987",
    advantages: [
      "High winter production (peak prices)",
      "Recently renovated equipment"
    ]
  },
  {
    id: 2,
    name: "Bjørå kraftverk",
    location: "Voss, Vestland", 
    capacity: "2.8 MW",
    annualProduction: "12.5 GWh/år",
    roi: "13.7%",
    funded: 0,
    totalInvestment: "82 MNOK",
    minInvestment: "0.5 MNOK",
    co2Reduction: "5,150",
    operationalDate: "2025",
    investors: 0,
    image: "💧",
    status: "Consented project",
    statusColor: "bg-hydro-green",
    buildYear: "2025",
    advantages: [
      "Fresh consent (December 2024)",
      "High production, solid revenue"
    ]
  },
  {
    id: 3,
    name: "Sandvik",
    location: "Vindafjord, Rogaland",
    capacity: "0.99 MW",
    annualProduction: "3.718 GWh/år",
    roi: "10.8%",
    funded: 0,
    totalInvestment: "32 MNOK",
    minInvestment: "0.5 MNOK",
    co2Reduction: "1,530",
    operationalDate: "In Operation (2018)",
    investors: 0,
    image: "🌊",
    status: "Available investment",
    statusColor: "bg-hydro-blue",
    buildYear: "2018",
    advantages: [
      "High head height (132.4m)",
      "Stable water intake (0.88 m³/s)"
    ]
  }
];

export const InvestmentOpportunities = () => {
  const sectionRef = useScrollAnimation();
  
  return (
    <section 
      id="investment-opportunities" 
      ref={sectionRef}
      className="py-20 bg-muted/20 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hydro-blue text-white">Current Opportunities</Badge>
          <h2 className="text-4xl font-bold mb-6">Available Hydro Plant Investments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invest in operational and under-construction hydro plants across Norway's 
            most productive fjords and mountain regions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {opportunities.map((plant) => (
            <Card key={plant.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-white to-muted/20">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-hydro-blue via-hydro-green to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px] rounded-lg">
                <div className="w-full h-full bg-background rounded-[6px]" />
              </div>
              
              <div className="relative z-10">
                <CardHeader className="pb-4">
                  {/* Status Badge - Clean Design */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant="secondary"
                      className={`${
                        plant.operationalDate.includes("Operation") 
                          ? 'bg-success/10 text-success border-success/20' 
                          : 'bg-primary/10 text-primary border-primary/20'
                      } px-3 py-1 text-xs font-medium`}
                    >
                      {plant.operationalDate.includes("Operation") ? "In Operation" : "Consented Project"}
                    </Badge>
                  </div>
                  
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-hydro-blue/5 rounded-lg border border-hydro-blue/10">
                    <div className="text-2xl font-bold text-hydro-blue">{plant.capacity}</div>
                    <div className="text-xs text-muted-foreground mt-1">Power</div>
                  </div>
                  <div className="text-center p-4 bg-success/5 rounded-lg border border-success/10">
                    <div className="text-2xl font-bold text-success">{plant.annualProduction}</div>
                    <div className="text-xs text-muted-foreground mt-1">Annual production (GWh, average last 5 years)</div>
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
                      <div className="text-xs text-muted-foreground">Build year</div>
                    </div>
                  </div>
                </div>

                {/* Unique Advantages */}
                <div>
                  <h4 className="font-semibold mb-3">Unique Advantages</h4>
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
                    Register for pricing and info
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
                  <h3 className="text-2xl font-bold">Discover More Opportunities</h3>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  These are just our featured investments. We have <strong>additional hydropower plants</strong> across Norway, 
                  ranging from small-scale community projects to larger commercial installations.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-hydro-blue/10 px-4 py-2 rounded-full">
                    <MapPin className="h-4 w-4 text-hydro-blue" />
                    <span>Nationwide coverage</span>
                  </div>
                  <div className="flex items-center gap-2 bg-hydro-green/10 px-4 py-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-hydro-green" />
                    <span>ROI 5-10%</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Various investment sizes</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <MoreOpportunitiesModal>
                    <Button 
                      variant="default"
                      size="lg"
                      className="bg-gradient-to-r from-hydro-blue to-hydro-green text-white px-8 py-6 h-auto text-lg w-full sm:w-auto"
                    >
                      Request More Investment Opportunities
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