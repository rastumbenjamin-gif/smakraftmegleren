import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

interface RegistrationModalProps {
  plantName: string;
  children: React.ReactNode;
}

export const RegistrationModal = ({ plantName, children }: RegistrationModalProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    investorType: "",
    budgetRange: "",
    pricingArea: "",
    productionRange: "",
    timeframe: "",
    comments: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.investorType) {
      toast({
        title: t('registration.missing_info'),
        description: t('registration.missing_info_message'),
        variant: "destructive"
      });
      return;
    }

    try {
      // Send notification email
      const { error } = await supabase.functions.invoke("send-notification", {
        body: {
          type: "buyer",
          data: {
            name: formData.name,
            email: formData.email,
            investorType: formData.investorType,
            budgetRange: formData.budgetRange,
            pricingArea: formData.pricingArea,
            productionRange: formData.productionRange,
            timeframe: formData.timeframe,
            comments: formData.comments,
            plantName: plantName
          }
        }
      });

      if (error) {
        console.error("Email notification error:", error);
        toast({
          title: t('registration.error_title'),
          description: t('registration.error_message'),
          variant: "destructive"
        });
        return;
      }

      toast({
        title: t('registration.success_title'),
        description: t('registration.success_message').replace('{plantName}', plantName),
      });
      
      setOpen(false);
      
      setFormData({
        name: "",
        email: "",
        investorType: "",
        budgetRange: "",
        pricingArea: "",
        productionRange: "",
        timeframe: "",
        comments: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t('registration.error_title'),
        description: t('registration.error_message'),
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">{t('registration.title')}</DialogTitle>
          <p className="text-muted-foreground">
            {t('registration.subtitle').replace('{plantName}', plantName)}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* ... keep existing form code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('form.name')} {t('form.required')}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder=""
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('form.email')} {t('form.required')}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder=""
                required
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t('registration.investor_type')} {t('form.required')}</Label>
            <Select value={formData.investorType} onValueChange={(value) => setFormData(prev => ({ ...prev, investorType: value }))}>
              <SelectTrigger className="bg-background border-input">
                <SelectValue placeholder={t('registration.select_investor')} />
              </SelectTrigger>
              <SelectContent className="bg-background border-border shadow-lg z-50">
                <SelectItem value="private-person">{t('investor.private_person')}</SelectItem>
                <SelectItem value="company">{t('investor.company')}</SelectItem>
                <SelectItem value="investment-fund">{t('investor.investment_fund')}</SelectItem>
                <SelectItem value="institutional-investor">{t('investor.institutional_investor')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('registration.budget_range')} {t('form.required')}</Label>
              <Select value={formData.budgetRange} onValueChange={(value) => setFormData(prev => ({ ...prev, budgetRange: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('registration.select_budget')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="25k-100k">{t('budget.1_5')}</SelectItem>
                  <SelectItem value="100k-500k">{t('budget.5_10')}</SelectItem>
                  <SelectItem value="500k-1m">{t('budget.10_25')}</SelectItem>
                  <SelectItem value="1m-5m">{t('budget.25_50')}</SelectItem>
                  <SelectItem value="5m+">{t('budget.50_plus')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('registration.pricing_area')} {t('form.required')}</Label>
              <Select value={formData.pricingArea} onValueChange={(value) => setFormData(prev => ({ ...prev, pricingArea: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('registration.select_area')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="no1">{t('area.no1')}</SelectItem>
                  <SelectItem value="no2">{t('area.no2')}</SelectItem>
                  <SelectItem value="no3">{t('area.no3')}</SelectItem>
                  <SelectItem value="no4">{t('area.no4')}</SelectItem>
                  <SelectItem value="no5">{t('area.no5')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('registration.production_range')} {t('form.required')}</Label>
              <Select value={formData.productionRange} onValueChange={(value) => setFormData(prev => ({ ...prev, productionRange: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('registration.select_production')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="under-3">{t('production.under_3')}</SelectItem>
                  <SelectItem value="3-5">{t('production.3_5')}</SelectItem>
                  <SelectItem value="6-10">{t('production.6_10')}</SelectItem>
                  <SelectItem value="11-20">{t('production.11_20')}</SelectItem>
                  <SelectItem value="over-20">{t('production.over_20')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('registration.timeframe')} {t('form.required')}</Label>
              <Select value={formData.timeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('registration.select_timeframe')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="immediate">{t('timeframe.immediate')}</SelectItem>
                  <SelectItem value="short-term">{t('timeframe.short_term')}</SelectItem>
                  <SelectItem value="medium-term">{t('timeframe.medium_term')}</SelectItem>
                  <SelectItem value="long-term">{t('timeframe.long_term')}</SelectItem>
                  <SelectItem value="exploring">{t('timeframe.exploring')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">{t('registration.comments')}</Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
              placeholder={t('registration.comments_placeholder')}
              className="bg-background min-h-[100px] resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              {t('form.cancel')}
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-hydro-blue to-hydro-green text-white hover:opacity-90"
            >
              {t('registration.register_button')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};