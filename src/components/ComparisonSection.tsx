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
      className="py-12 bg-slate-50 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <Badge className="mb-2 bg-emerald-600 text-white border-0 text-xs">{t('comparison.badge')}</Badge>
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-slate-900">{t('comparison.title')}</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-light">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {/* Hydro Plants - Featured */}
          <Card className="bg-white/98 backdrop-blur-sm border-2 border-emerald-200/80 shadow-lg hover:shadow-xl hover:border-emerald-400 transition-all duration-300 md:scale-105 md:-translate-y-3 flex flex-col min-h-[450px] rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-3 bg-gradient-to-br from-emerald-50/50 to-transparent pt-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-lg text-emerald-700 font-bold">{t('comparison.hydro.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col text-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-900">{t('comparison.roi')}</span>
                <Badge className="bg-emerald-600 text-white border-0 font-semibold text-xs">{t('comparison.hydro.roi')}</Badge>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-success" />
                <span className="text-xs">{t('comparison.hydro.feature1')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-success" />
                <span className="text-xs">{t('comparison.hydro.feature2')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-success" />
                <span className="text-xs">{t('comparison.hydro.feature3')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-success" />
                <span className="text-xs">{t('comparison.hydro.feature4')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-success" />
                <span className="text-xs">{t('comparison.hydro.feature5')}</span>
              </div>
              
              <div className="mt-auto">
                <Collapsible open={allDetailsOpen}>
                  <CollapsibleContent className="mt-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/80 shadow-sm">
                    <div className="space-y-3">
                      <p className="font-semibold text-emerald-700 text-sm mb-2">{t('comparison.hydro.details.title')}</p>
                      <div className="space-y-2.5">
                        <div className="flex gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"></div>
                          <div className="text-xs">
                            <span className="font-semibold text-slate-900">{t('comparison.hydro.details.1.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.hydro.details.1.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"></div>
                          <div className="text-xs">
                            <span className="font-semibold text-slate-900">{t('comparison.hydro.details.2.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.hydro.details.2.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"></div>
                          <div className="text-xs">
                            <span className="font-semibold text-slate-900">{t('comparison.hydro.details.3.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.hydro.details.3.text')}</span>
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
          <Card className="bg-white/98 backdrop-blur-sm border-2 border-slate-200/80 shadow-lg hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col min-h-[450px] rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-3 bg-gradient-to-br from-slate-50/50 to-transparent pt-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-slate-200 flex items-center justify-center">
                <Target className="h-7 w-7 text-slate-600" />
              </div>
              <CardTitle className="text-lg text-slate-700">{t('comparison.carbon.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col text-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">{t('comparison.roi')}</span>
                <Badge variant="outline" className="text-slate-700 border-slate-400 font-semibold bg-white/50">{t('comparison.carbon.roi')}</Badge>
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
                  <CollapsibleContent className="mt-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm">
                    <div className="space-y-4">
                      <p className="font-semibold text-slate-700 text-lg mb-4">{t('comparison.carbon.details.title')}</p>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <div className="text-base">
                            <span className="font-semibold text-slate-900">{t('comparison.carbon.details.1.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.carbon.details.1.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <div className="text-base">
                            <span className="font-semibold text-slate-900">{t('comparison.carbon.details.2.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.carbon.details.2.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <div className="text-base">
                            <span className="font-semibold text-slate-900">{t('comparison.carbon.details.3.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.carbon.details.3.text')}</span>
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
          <Card className="bg-white/98 backdrop-blur-sm border-2 border-slate-200/80 shadow-lg hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col min-h-[450px] rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-3 bg-gradient-to-br from-slate-50/50 to-transparent pt-4">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-slate-200 flex items-center justify-center">
                <TrendingUp className="h-7 w-7 text-slate-600" />
              </div>
              <CardTitle className="text-lg text-slate-700">{t('comparison.esg.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col text-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">{t('comparison.roi')}</span>
                <Badge variant="outline" className="text-slate-700 border-slate-400 font-semibold bg-white/50">{t('comparison.esg.roi')}</Badge>
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
                  <CollapsibleContent className="mt-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm">
                    <div className="space-y-4">
                      <p className="font-semibold text-slate-700 text-lg mb-4">{t('comparison.esg.details.title')}</p>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <div className="text-base">
                            <span className="font-semibold text-slate-900">{t('comparison.esg.details.1.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.esg.details.1.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <div className="text-base">
                            <span className="font-semibold text-slate-900">{t('comparison.esg.details.2.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.esg.details.2.text')}</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                          <div className="text-base">
                            <span className="font-semibold text-slate-900">{t('comparison.esg.details.3.title')}</span>
                            <span className="text-slate-600 ml-1">{t('comparison.esg.details.3.text')}</span>
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
        <div className="flex justify-center mt-8 animate-fade-in [animation-delay:400ms]">
          <Button 
            onClick={toggleAllDetails}
            variant="outline"
            size="lg"
            className="px-6 py-3 bg-white/98 backdrop-blur-sm border-2 border-slate-300 hover:border-emerald-600 hover:bg-slate-50 text-slate-900 transition-all duration-300 rounded-lg shadow-md text-sm"
          >
            <Info className="h-4 w-4 mr-2" />
            {allDetailsOpen ? t('comparison.showLess') : t('comparison.readMore')}
            <ChevronDown className={`h-4 w-4 ml-2 transition-transform duration-300 ${allDetailsOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};