import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Zap, Calendar, Users, TrendingUp } from "lucide-react";

const opportunities = [
  {
    id: 1,
    name: "Lofoten Falls Hydro Station",
    location: "Lofoten Islands, Norway",
    capacity: "12.5 MW",
    annualProduction: "45 GWh",
    roi: "12.3%",
    funded: 68,
    totalInvestment: "€8.2M",
    minInvestment: "€25,000",
    co2Reduction: "18,500",
    operationalDate: "Q2 2025",
    investors: 156,
    image: "🏔️"
  },
  {
    id: 2,
    name: "Sognefjord Power Plant",
    location: "Sogn og Fjordane, Norway", 
    capacity: "8.7 MW",
    annualProduction: "32 GWh",
    roi: "10.8%",
    funded: 89,
    totalInvestment: "€5.9M",
    minInvestment: "€25,000",
    co2Reduction: "13,200",
    operationalDate: "Q4 2024",
    investors: 203,
    image: "💧"
  },
  {
    id: 3,
    name: "Hardangerfjord Mini-Hydro",
    location: "Hardanger, Norway",
    capacity: "4.2 MW", 
    annualProduction: "15 GWh",
    roi: "14.7%",
    funded: 23,
    totalInvestment: "€2.8M",
    minInvestment: "€25,000",
    co2Reduction: "6,150",
    operationalDate: "Q1 2026",
    investors: 67,
    image: "⚡"
  }
];

export const InvestmentOpportunities = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hydro-blue text-white">Current Opportunities</Badge>
          <h2 className="text-4xl font-bold mb-6">Available Hydro Plant Investments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invest in operational and under-construction hydro plants across Norway's 
            most productive fjords and mountain regions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {opportunities.map((plant) => (
            <Card key={plant.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{plant.image}</div>
                  <Badge 
                    className={`${
                      plant.funded > 80 
                        ? 'bg-success text-white' 
                        : plant.funded > 50 
                          ? 'bg-warning text-white'
                          : 'bg-hydro-blue text-white'
                    }`}
                  >
                    {plant.funded}% Funded
                  </Badge>
                </div>
                <CardTitle className="text-xl">{plant.name}</CardTitle>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  {plant.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Investment Progress</span>
                    <span>{plant.totalInvestment}</span>
                  </div>
                  <Progress value={plant.funded} className="h-2" />
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-hydro-blue" />
                    <div>
                      <div className="font-semibold">{plant.capacity}</div>
                      <div className="text-muted-foreground">Capacity</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <div>
                      <div className="font-semibold text-success">{plant.roi}</div>
                      <div className="text-muted-foreground">Annual ROI</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">{plant.annualProduction}</div>
                    <div className="text-muted-foreground">Annual Production</div>
                  </div>
                  <div>
                    <div className="font-semibold text-hydro-green">{plant.co2Reduction}t CO₂</div>
                    <div className="text-muted-foreground">Annual Reduction</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{plant.investors} investors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{plant.operationalDate}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="text-sm">
                    <span className="font-semibold">Minimum investment: </span>
                    <span className="text-hydro-blue">{plant.minInvestment}</span>
                  </div>
                  
                  <Button 
                    variant="invest" 
                    className="w-full" 
                    disabled={plant.funded >= 100}
                  >
                    {plant.funded >= 100 ? 'Fully Funded' : 'Invest Now'}
                  </Button>
                  
                  <Button variant="hydro-outline" className="w-full">
                    View Details & Financials
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};