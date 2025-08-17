import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, TrendingUp, Check } from "lucide-react";

export const HindbergelvaOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Hindbergelva Power Plant</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Mosvik, Trøndelag</span>
          </div>
          <Badge className="bg-success text-white px-4 py-2 text-sm">
            <Check className="h-4 w-4 mr-1" />
            In operation
          </Badge>
        </div>

        {/* Key Investment Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">kr 8,500,000</div>
              <div className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">Sales price</div>
              <div className="text-xs text-green-600">Competitive price</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">6%</div>
              <div className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">Expected annual return</div>
              <div className="text-xs text-blue-600">Stable and predictable</div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">34</div>
              <div className="text-sm font-medium text-purple-800 dark:text-purple-300 mb-1">years remaining lifetime</div>
              <div className="text-xs text-purple-600">Long investment horizon</div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">kr 540,000</div>
              <div className="text-sm font-medium text-orange-800 dark:text-orange-300 mb-1">Expected annual income</div>
              <div className="text-xs text-orange-600">Based on last 3 years average</div>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Impact */}
        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-green-700 dark:text-green-300">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-lg">🌱</span>
              </div>
              Environmental impact and social benefit
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              The power plant's positive contribution to environment and society
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">176</div>
                <div className="text-sm font-medium text-green-800 dark:text-green-300 mb-1">tons CO₂ reduction per year</div>
                <div className="text-xs text-green-600">Equivalent to taking 77 cars off the road</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">286</div>
                <div className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">households supplied</div>
                <div className="text-xs text-blue-600">Based on 5 MWh consumption per household</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-green-700 dark:text-green-300">Environmental benefits:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                  <span className="text-sm">100% renewable energy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                  <span className="text-sm">Zero local emissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                  <span className="text-sm">Contributes to Norwegian climate goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                  <span className="text-sm">Supports local energy supply</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications and Investment Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                Technical specifications
              </CardTitle>
              <p className="text-sm text-muted-foreground">The power plant's technical properties</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Installed capacity</span>
                  <span className="font-semibold">0.53 MW</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Annual production (GWh, average last 5 years)</span>
                  <span className="font-semibold">1.43 GWh</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Capacity factor</span>
                  <span className="font-semibold">30.8%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Build year</span>
                  <span className="font-semibold">2009</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Years in operation</span>
                  <span className="font-semibold">16 years</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Investment details
              </CardTitle>
              <p className="text-sm text-muted-foreground">Economic key figures</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Sales price</span>
                  <span className="font-semibold">kr 8,500,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Expected return</span>
                  <span className="font-semibold text-green-600">6% p.a.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Annual income</span>
                  <span className="font-semibold">kr 540,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Remaining lifetime</span>
                  <span className="font-semibold">34 years</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-hydro-blue to-hydro-green text-white hover:opacity-90 px-8"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
          </Button>
        </div>
      </div>
    </div>
  );
};