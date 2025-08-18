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
                  <div className="space-y-4 text-sm">
                    <p className="font-semibold text-hydro-blue text-base mb-3">Why Norwegian Hydro Plants Are Superior:</p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Real Asset Ownership:</span>
                          <span className="text-muted-foreground ml-1">You own an actual piece of renewable energy infrastructure, not just certificates or promises.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Predictable Returns:</span>
                          <span className="text-muted-foreground ml-1">Electricity demand is constant, and Norway has a regulated energy market ensuring stable pricing.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Climate Impact:</span>
                          <span className="text-muted-foreground ml-1">Every kWh produced directly displaces fossil fuel energy and creates measurable CO₂ reduction.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Inflation Hedge:</span>
                          <span className="text-muted-foreground ml-1">Energy prices typically rise with inflation, protecting your investment's real value.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Norwegian Stability:</span>
                          <span className="text-muted-foreground ml-1">Backed by one of the world's most stable economies and transparent regulatory frameworks.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Long-term Value:</span>
                          <span className="text-muted-foreground ml-1">Hydro plants can operate for 80-100+ years with proper maintenance, creating generational wealth.</span>
                        </div>
                      </div>
                    </div>
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
                  <div className="space-y-4 text-sm">
                    <p className="font-semibold text-warning text-base mb-3">Why Carbon Credits Often Fail:</p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Additionality Problem:</span>
                          <span className="text-muted-foreground ml-1">Many projects would have happened anyway, making the "offset" meaningless.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">No Permanent Impact:</span>
                          <span className="text-muted-foreground ml-1">Forests can burn down, projects can fail, but you've already paid for the credits.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Double Counting:</span>
                          <span className="text-muted-foreground ml-1">The same carbon reduction is often claimed by multiple parties (project country AND credit buyer).</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Verification Issues:</span>
                          <span className="text-muted-foreground ml-1">Remote monitoring is difficult, and many projects overstate their impact.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Price Manipulation:</span>
                          <span className="text-muted-foreground ml-1">Oversupply and market manipulation can crash prices overnight.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">No Asset Value:</span>
                          <span className="text-muted-foreground ml-1">You own nothing tangible - just a digital certificate that can become worthless.</span>
                        </div>
                      </div>
                    </div>
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
                  <div className="space-y-4 text-sm">
                    <p className="font-semibold text-muted-foreground text-base mb-3">Why ESG Funds Disappoint:</p>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Greenwashing:</span>
                          <span className="text-muted-foreground ml-1">Many "ESG" funds still hold fossil fuel companies, weapons manufacturers, and other questionable investments.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">No Direct Control:</span>
                          <span className="text-muted-foreground ml-1">Fund managers make decisions - you have no say in what companies are supported.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Fee Erosion:</span>
                          <span className="text-muted-foreground ml-1">1-2% annual fees compound over time, significantly reducing your returns.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Marketing Over Substance:</span>
                          <span className="text-muted-foreground ml-1">ESG scores are often manipulated by companies and don't reflect real environmental impact.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Diluted Impact:</span>
                          <span className="text-muted-foreground ml-1">Your money is spread across hundreds of companies - minimal influence on any single environmental outcome.</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-foreground">Performance Lag:</span>
                          <span className="text-muted-foreground ml-1">ESG funds often underperform traditional funds while charging higher fees.</span>
                        </div>
                      </div>
                    </div>
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