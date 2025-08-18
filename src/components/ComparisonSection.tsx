import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CheckCircle, XCircle, TrendingUp, Target, ChevronDown, Info, AlertTriangle } from "lucide-react";
import { useState } from "react";

export const ComparisonSection = () => {
  const [openDetails, setOpenDetails] = useState<{[key: string]: boolean}>({
    hydro: false,
    carbon: false,
    esg: false
  });

  const toggleDetails = (type: string) => {
    setOpenDetails(prev => ({ ...prev, [type]: !prev[type] }));
  };

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
          <Card className="border-2 border-hydro-blue/40 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-hydro-blue/5 to-hydro-green/5 md:scale-105 md:-translate-y-4">
            <CardHeader className="text-center pb-4">
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
              
              <Collapsible open={openDetails.hydro} onOpenChange={() => toggleDetails('hydro')}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full mt-4 text-hydro-blue hover:text-hydro-blue hover:bg-hydro-blue/10">
                    <Info className="h-4 w-4 mr-2" />
                    Learn More About Hydro Investments
                    <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${openDetails.hydro ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 p-4 bg-hydro-blue/5 rounded-lg border border-hydro-blue/20">
                  <div className="space-y-3 text-sm">
                    <p className="font-semibold text-hydro-blue">Why Norwegian Hydro Plants Are Superior:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Real Asset Ownership:</strong> You own an actual piece of renewable energy infrastructure, not just certificates or promises.</li>
                      <li>• <strong>Predictable Returns:</strong> Electricity demand is constant, and Norway has a regulated energy market ensuring stable pricing.</li>
                      <li>• <strong>Climate Impact:</strong> Every kWh produced directly displaces fossil fuel energy and creates measurable CO₂ reduction.</li>
                      <li>• <strong>Inflation Hedge:</strong> Energy prices typically rise with inflation, protecting your investment's real value.</li>
                      <li>• <strong>Norwegian Stability:</strong> Backed by one of the world's most stable economies and transparent regulatory frameworks.</li>
                      <li>• <strong>Long-term Value:</strong> Hydro plants can operate for 80-100+ years with proper maintenance, creating generational wealth.</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
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
              
              <Collapsible open={openDetails.carbon} onOpenChange={() => toggleDetails('carbon')}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full mt-4 text-warning hover:text-warning hover:bg-warning/10">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Critical Issues with Carbon Credits
                    <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${openDetails.carbon ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 p-4 bg-warning/5 rounded-lg border border-warning/20">
                  <div className="space-y-3 text-sm">
                    <p className="font-semibold text-warning">Why Carbon Credits Often Fail:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Additionality Problem:</strong> Many projects would have happened anyway, making the "offset" meaningless.</li>
                      <li>• <strong>No Permanent Impact:</strong> Forests can burn down, projects can fail, but you've already paid for the credits.</li>
                      <li>• <strong>Double Counting:</strong> The same carbon reduction is often claimed by multiple parties (project country AND credit buyer).</li>
                      <li>• <strong>Verification Issues:</strong> Remote monitoring is difficult, and many projects overstate their impact.</li>
                      <li>• <strong>Price Manipulation:</strong> Oversupply and market manipulation can crash prices overnight.</li>
                      <li>• <strong>No Asset Value:</strong> You own nothing tangible - just a digital certificate that can become worthless.</li>
                      <li>• <strong>Delay Tactic:</strong> Often used by companies to avoid making real emission reductions.</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
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
              
              <Collapsible open={openDetails.esg} onOpenChange={() => toggleDetails('esg')}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full mt-4 text-muted-foreground hover:text-muted-foreground hover:bg-muted/20">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Problems with ESG Funds
                    <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${openDetails.esg ? 'rotate-180' : ''}`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 p-4 bg-muted/20 rounded-lg border border-muted/40">
                  <div className="space-y-3 text-sm">
                    <p className="font-semibold text-muted-foreground">Why ESG Funds Disappoint:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Greenwashing:</strong> Many "ESG" funds still hold fossil fuel companies, weapons manufacturers, and other questionable investments.</li>
                      <li>• <strong>No Direct Control:</strong> Fund managers make decisions - you have no say in what companies are supported.</li>
                      <li>• <strong>Fee Erosion:</strong> 1-2% annual fees compound over time, significantly reducing your returns.</li>
                      <li>• <strong>Marketing Over Substance:</strong> ESG scores are often manipulated by companies and don't reflect real environmental impact.</li>
                      <li>• <strong>Diluted Impact:</strong> Your money is spread across hundreds of companies - minimal influence on any single environmental outcome.</li>
                      <li>• <strong>Performance Lag:</strong> ESG funds often underperform traditional funds while charging higher fees.</li>
                      <li>• <strong>Unclear Standards:</strong> "ESG" definition varies wildly - what's sustainable to one fund isn't to another.</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};