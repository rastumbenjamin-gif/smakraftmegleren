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
      className="py-20 bg-slate-50 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-emerald-600 text-white border-0">{t('comparison.badge')}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">{t('comparison.title')}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Hydro Plants - Featured */}
          <Card className="bg-white/98 backdrop-blur-sm border-2 border-emerald-200/80 shadow-xl hover:shadow-2xl hover:border-emerald-400 transition-all duration-300 md:scale-105 md:-translate-y-4 flex flex-col min-h-[600px] rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-4 bg-gradient-to-br from-emerald-50/50 to-transparent">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-emerald-600 flex items-center justify-center shadow-lg">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-emerald-700 font-bold">{t('comparison.hydro.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Annual ROI</span>
                <Badge className="bg-success text-white">{t('comparison.hydro.roi')}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.hydro.feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.hydro.feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.hydro.feature3')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.hydro.feature4')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.hydro.feature5')}</span>
              </div>
              
              <div className="mt-auto">
                <Collapsible open={allDetailsOpen}>
                  <CollapsibleContent className="mt-4 p-4 bg-hydro-blue/5 rounded-lg border border-hydro-blue/20">
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold text-hydro-blue text-base mb-3">{t('comparison.hydro.details.title')}</p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.hydro.details.1.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.hydro.details.1.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.hydro.details.2.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.hydro.details.2.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-hydro-blue mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.hydro.details.3.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.hydro.details.3.text')}</span>
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
          <Card className="bg-white/98 backdrop-blur-sm border-2 border-slate-200/80 shadow-xl hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col min-h-[600px] rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-4 bg-gradient-to-br from-slate-50/50 to-transparent">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-200 flex items-center justify-center">
                <Target className="h-8 w-8 text-slate-600" />
              </div>
              <CardTitle className="text-2xl text-slate-700">{t('comparison.carbon.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Annual ROI</span>
                <Badge variant="outline" className="text-warning border-warning">{t('comparison.carbon.roi')}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.carbon.feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.carbon.feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.carbon.feature3')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.carbon.feature4')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.carbon.feature5')}</span>
              </div>
              
              <div className="mt-auto">
                <Collapsible open={allDetailsOpen}>
                  <CollapsibleContent className="mt-4 p-4 bg-warning/5 rounded-lg border border-warning/20">
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold text-warning text-base mb-3">{t('comparison.carbon.details.title')}</p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.carbon.details.1.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.carbon.details.1.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.carbon.details.2.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.carbon.details.2.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.carbon.details.3.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.carbon.details.3.text')}</span>
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
          <Card className="bg-white/98 backdrop-blur-sm border-2 border-slate-200/80 shadow-xl hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col min-h-[600px] rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-4 bg-gradient-to-br from-slate-50/50 to-transparent">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-200 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-slate-600" />
              </div>
              <CardTitle className="text-2xl text-slate-700">{t('comparison.esg.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Annual ROI</span>
                <Badge variant="outline" className="text-muted-foreground">{t('comparison.esg.roi')}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.esg.feature1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.esg.feature2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">{t('comparison.esg.feature3')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.esg.feature4')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm">{t('comparison.esg.feature5')}</span>
              </div>
              
              <div className="mt-auto">
                <Collapsible open={allDetailsOpen}>
                  <CollapsibleContent className="mt-4 p-4 bg-muted/20 rounded-lg border border-muted/40">
                    <div className="space-y-4 text-sm">
                      <p className="font-semibold text-muted-foreground text-base mb-3">{t('comparison.esg.details.title')}</p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.esg.details.1.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.esg.details.1.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.esg.details.2.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.esg.details.2.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-medium text-foreground">{t('comparison.esg.details.3.title')}</span>
                            <span className="text-muted-foreground ml-1">{t('comparison.esg.details.3.text')}</span>
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
        <div className="flex justify-center mt-12 animate-fade-in [animation-delay:400ms]">
          <Button 
            onClick={toggleAllDetails}
            variant="outline"
            size="lg"
            className="px-8 py-4 bg-white/98 backdrop-blur-sm border-2 border-slate-300 hover:border-emerald-600 hover:bg-slate-50 text-slate-900 transition-all duration-300 rounded-xl shadow-lg"
          >
            <Info className="h-5 w-5 mr-2" />
            {allDetailsOpen ? t('comparison.showLess') : t('comparison.readMore')}
            <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-300 ${allDetailsOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};