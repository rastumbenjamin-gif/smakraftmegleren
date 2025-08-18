import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, TrendingUp, Target, Banknote } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Real Investment Comparison</Badge>
          <h2 className="text-4xl font-bold mb-6">Hydro Plants vs Carbon Credits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why owning actual renewable energy infrastructure delivers superior 
            returns and genuine environmental impact compared to carbon offset schemes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Hydro Plants - Featured */}
          <Card className="relative border-2 border-hydro-blue/40 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-hydro-blue/5 to-hydro-green/5 md:scale-105 md:-translate-y-4">
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-hydro-blue to-hydro-green text-white px-4 py-1 text-sm font-semibold shadow-lg">
                🏆 RECOMMENDED
              </Badge>
            </div>
            <CardHeader className="text-center pb-4 pt-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-hydro-blue to-hydro-green flex items-center justify-center shadow-lg animate-pulse">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-hydro-blue font-bold">Norwegian Hydro Plants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Annual ROI</span>
                <Badge className="bg-success text-white">5-15%</Badge>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Tangible asset ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Direct energy production</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Measurable CO₂ reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Regulated by Norwegian authorities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Inflation-protected revenue</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center gap-1">
                  <Banknote className="h-4 w-4 text-hydro-blue" />
                  <span className="text-sm font-semibold">€25,000 minimum investment</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carbon Credits */}
          <Card className="border-warning/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-warning/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-2xl text-warning">Carbon Credits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Annual ROI</span>
                <Badge variant="outline" className="text-warning border-warning">0-3%</Badge>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">No asset ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Often questionable additionality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Immediate offset credits</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Limited regulatory oversight</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Price volatility risk</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center gap-1">
                  <Banknote className="h-4 w-4 text-warning" />
                  <span className="text-sm font-semibold">€15-100 per ton CO₂</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ESG Funds */}
          <Card className="border-muted">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl text-muted-foreground">ESG Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Annual ROI</span>
                <Badge variant="outline" className="text-muted-foreground">4-8%</Badge>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Indirect impact only</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Greenwashing concerns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Diversified portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Management fees 1-2%</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">Unclear impact measurement</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center gap-1">
                  <Banknote className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">€1,000 minimum</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};