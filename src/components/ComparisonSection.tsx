import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { CheckCircle, XCircle, TrendingUp, Target, ChevronDown, Info } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

export const ComparisonSection = () => {
  const [allDetailsOpen, setAllDetailsOpen] = useState(false);
  const sectionRef = useScrollAnimation();
  const { t } = useLanguage();

  const toggleAllDetails = () => {
    setAllDetailsOpen(!allDetailsOpen);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-muted/30 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">{t('comparison.badge')}</Badge>
          <h2 className="text-4xl font-bold mb-6">{t('comparison.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('comparison.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Hydro Plants - Featured */}
          <Card className="border-2 border-hydro-blue/40 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-hydro-blue/5 to-hydro-green/5 md:scale-105 md:-translate-y-4 flex flex-col min-h-[600px]">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-hydro-blue to-hydro-green flex items-center justify-center shadow-lg animate-pulse">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-hydro-blue font-bold">{t('comparison.hydro_title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t('comparison.annual_roi')}</span>
                <Badge className="bg-success text-white">5-10%</Badge>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.asset_ownership')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.direct_energy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.co2_reduction')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.regulated')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.inflation_protected')}</span>
              </div>
              
              <div className="mt-auto">
                <Collapsible open={allDetailsOpen}>
                  <CollapsibleContent className="mt-4 p-4 bg-hydro-blue/5 rounded-lg border border-hydro-blue/20">
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold text-hydro-blue text-base mb-3">Why Norwegian Hydro Plants Are Superior:</p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">Real Asset Ownership:</span>
                            <span className="text-muted-foreground ml-1">You own actual hydropower plants, not just certificates or promises.</span>
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
                            <span className="font-medium text-foreground">Direct Climate Impact:</span>
                            <span className="text-muted-foreground ml-1">Every kWh produced directly displaces fossil fuel energy and creates measurable CO₂ reduction.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>

          {/* Carbon Credits */}
          <Card className="border-warning/20 flex flex-col min-h-[600px]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-warning/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-2xl text-warning">{t('comparison.carbon_title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t('comparison.annual_roi')}</span>
                <Badge variant="outline" className="text-warning border-warning">Highly volatile</Badge>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.no_asset')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.questionable')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.immediate_offset')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.limited_oversight')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.price_volatility')}</span>
              </div>
              
              <div className="mt-auto">
                <Collapsible open={allDetailsOpen}>
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
                            <span className="font-medium text-foreground">No Asset Value:</span>
                            <span className="text-muted-foreground ml-1">You own nothing tangible - just a digital certificate that can become worthless.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>

          {/* ESG Funds */}
          <Card className="border-muted flex flex-col min-h-[600px]">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl text-muted-foreground">{t('comparison.esg_title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t('comparison.annual_roi')}</span>
                <Badge variant="outline" className="text-muted-foreground">4-7%</Badge>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.indirect_impact')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.greenwashing')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.diversified')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.management_fees')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.unclear_impact')}</span>
              </div>
              
              <div className="mt-auto">
                <Collapsible open={allDetailsOpen}>
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
                            <span className="font-medium text-foreground">Fee Erosion:</span>
                            <span className="text-muted-foreground ml-1">1-2% annual fees compound over time, significantly reducing your returns.</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">Diluted Impact:</span>
                            <span className="text-muted-foreground ml-1">Your money is spread across hundreds of companies - minimal influence on any single environmental outcome.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Single Read More Button */}
        <div className="flex justify-center mt-12">
          <Button 
            onClick={toggleAllDetails}
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Info className="h-5 w-5 mr-2" />
            {allDetailsOpen ? t('comparison.show_less') : t('comparison.read_more')}
            <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-300 ${allDetailsOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};