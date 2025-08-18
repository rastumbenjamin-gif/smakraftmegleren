import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Zap, Calendar, Users, TrendingUp } from "lucide-react";
import { RegistrationModal } from "./RegistrationModal";

const opportunities = [
  {
    id: 1,
    name: "Hindbergelva kraftverk",
    location: "Mosvik, Trøndelag",
    capacity: "1.2 MW",
    annualProduction: "5.8 GWh/år",
    roi: "11.2%",
    funded: 45,
    totalInvestment: "€3.2M",
    minInvestment: "€25,000",
    co2Reduction: "2,400",
    operationalDate: "In Operation (1987)",
    investors: 89,
    image: "🏔️",
    status: "Featured opportunity",
    statusColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
    buildYear: "1987",
    advantages: [
      "High winter production when electricity prices are highest",
      "Recently renovated turbine and waterway"
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
    totalInvestment: "€7.1M",
    minInvestment: "€25,000",
    co2Reduction: "5,150",
    operationalDate: "2025",
    investors: 0,
    image: "💧",
    status: "Consented project",
    statusColor: "bg-hydro-green",
    buildYear: "2025",
    advantages: [
      "Fresh consent granted December 2024",
      "High annual production provides solid revenue base"
    ]
  }
];

export const InvestmentOpportunities = () => {
  return (
    <section id="investment-opportunities" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-hydro-blue text-white">Current Opportunities</Badge>
          <h2 className="text-4xl font-bold mb-6">Available Hydro Plant Investments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Invest in operational and under-construction hydro plants across Norway's 
            most productive fjords and mountain regions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {opportunities.map((plant) => (
            <Card key={plant.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${plant.statusColor} text-white px-3 py-1`}>
                    ⭐ {plant.status}
                  </Badge>
                  <Badge 
                    className={`${
                      plant.operationalDate.includes("Operation") 
                        ? 'bg-success text-white' 
                        : 'bg-primary text-white'
                    }`}
                  >
                    {plant.operationalDate.includes("Operation") ? "In operation" : "Consented project"}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{plant.name}</CardTitle>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  {plant.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Plant Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plant.id === 1 
                    ? "Modern hydropower plant with high winter production and potential for increased output. Located downstream of regulated lake providing stable production throughout the year."
                    : "Recently consented hydropower project with high production and attractive economics. All permits are in place and the project is ready for construction or further development."
                  }
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-hydro-blue mt-0.5" />
                    <div>
                      <div className="font-semibold">{plant.capacity}</div>
                      <div className="text-muted-foreground">Power</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-success mt-0.5" />
                    <div>
                      <div className="font-semibold">{plant.annualProduction}</div>
                      <div className="text-muted-foreground">Annual production (GWh, average last 5 years)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-semibold">{plant.location}</div>
                      <div className="text-muted-foreground">Location</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-semibold">{plant.buildYear}</div>
                      <div className="text-muted-foreground">Build year</div>
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
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Register to get pricing and detailed information →
                  </Button>
                </RegistrationModal>
              </CardContent>
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
                  These are just our featured investments. We have <strong>15+ additional hydropower plants</strong> across Norway, 
                  ranging from small-scale community projects to larger commercial installations.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-hydro-blue/10 px-4 py-2 rounded-full">
                    <MapPin className="h-4 w-4 text-hydro-blue" />
                    <span>Nationwide coverage</span>
                  </div>
                  <div className="flex items-center gap-2 bg-hydro-green/10 px-4 py-2 rounded-full">
                    <TrendingUp className="h-4 w-4 text-hydro-green" />
                    <span>ROI 5-18%</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Users className="h-4 w-4 text-primary" />
                    <span>€10k-€100k investments</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-hydro-blue to-hydro-green text-white px-8 py-6 h-auto text-lg"
                  >
                    View All 17 Investment Opportunities
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-hydro-blue text-hydro-blue hover:bg-hydro-blue hover:text-white px-8 py-6 h-auto text-lg"
                  >
                    Get Personalized Recommendations
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};