import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

interface RegistrationModalProps {
  plantName: string;
  children: React.ReactNode;
}

export const RegistrationModal = ({ plantName, children }: RegistrationModalProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const { profile } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investorType: "",
    budgetRange: "",
    pricingArea: "",
    productionRange: "",
    timeframe: "",
    comments: ""
  });
  const { toast } = useToast();

  // Auto-fill form when user profile is available
  useEffect(() => {
    if (profile && open) {
      setFormData(prev => ({
        ...prev,
        name: profile.name || prev.name,
        email: profile.email || prev.email,
        phone: profile.phone || prev.phone,
        investorType: profile.investor_type || prev.investorType,
      }));
    }
  }, [profile, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.investorType) {
      toast({
        title: t('toast.missingInfo'),
        description: t('toast.missingInfoDesc'),
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
          title: t('toast.registrationError'),
          description: t('toast.registrationErrorDesc'),
          variant: "destructive"
        });
        return;
      }

      toast({
        title: t('toast.registrationSuccess'),
        description: t('toast.registrationSuccessDesc').replace('{plantName}', plantName),
      });
      
      setOpen(false);
      
      setFormData({
        name: "",
        email: "",
        phone: "",
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
        title: t('toast.registrationError'), 
        description: t('toast.registrationErrorDesc'),
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
          <DialogTitle className="text-2xl font-bold mb-2">{t('form.register.title')}</DialogTitle>
          <p className="text-muted-foreground">
            {t('form.register.subtitle')} {plantName}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('form.name')}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('form.email')}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t('form.phone')}</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+47 123 45 678"
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <Label>{t('form.investorType')}</Label>
            <Select value={formData.investorType} onValueChange={(value) => setFormData(prev => ({ ...prev, investorType: value }))}>
              <SelectTrigger className="bg-background border-input">
                <SelectValue placeholder={t('form.placeholder.selectInvestorType')} />
              </SelectTrigger>
              <SelectContent className="bg-background border-border shadow-lg z-50">
                <SelectItem value="private-person">{t('form.investorType.private')}</SelectItem>
                <SelectItem value="company">{t('form.investorType.company')}</SelectItem>
                <SelectItem value="investment-fund">{t('form.investorType.fund')}</SelectItem>
                <SelectItem value="institutional-investor">{t('form.investorType.institutional')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('form.budgetRange')}</Label>
              <Select value={formData.budgetRange} onValueChange={(value) => setFormData(prev => ({ ...prev, budgetRange: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('form.placeholder.selectBudget')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="1-5">{t('form.budgetRange.1to5')}</SelectItem>
                  <SelectItem value="5-10">{t('form.budgetRange.5to10')}</SelectItem>
                  <SelectItem value="10-25">{t('form.budgetRange.10to25')}</SelectItem>
                  <SelectItem value="25-50">{t('form.budgetRange.25to50')}</SelectItem>
                  <SelectItem value="50+">{t('form.budgetRange.over50')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('form.pricingArea')}</Label>
              <Select value={formData.pricingArea} onValueChange={(value) => setFormData(prev => ({ ...prev, pricingArea: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('form.placeholder.selectPricingArea')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="no1">{t('form.pricingArea.no1')}</SelectItem>
                  <SelectItem value="no2">{t('form.pricingArea.no2')}</SelectItem>
                  <SelectItem value="no3">{t('form.pricingArea.no3')}</SelectItem>
                  <SelectItem value="no4">{t('form.pricingArea.no4')}</SelectItem>
                  <SelectItem value="no5">{t('form.pricingArea.no5')}</SelectItem>
                  <SelectItem value="open-explore">{t('form.pricingArea.open')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('form.productionRange')}</Label>
              <Select value={formData.productionRange} onValueChange={(value) => setFormData(prev => ({ ...prev, productionRange: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('form.placeholder.selectProductionRange')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="under-3">{t('form.productionRange.under3')}</SelectItem>
                  <SelectItem value="3-5">{t('form.productionRange.3to5')}</SelectItem>
                  <SelectItem value="6-10">{t('form.productionRange.6to10')}</SelectItem>
                  <SelectItem value="11-20">{t('form.productionRange.11to20')}</SelectItem>
                  <SelectItem value="over-20">{t('form.productionRange.over20')}</SelectItem>
                  <SelectItem value="open-explore">{t('form.productionRange.open')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('form.timeframe')}</Label>
              <Select value={formData.timeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder={t('form.placeholder.selectTimeframe')} />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="immediate">{t('form.timeframe.immediate')}</SelectItem>
                  <SelectItem value="short-term">{t('form.timeframe.short')}</SelectItem>
                  <SelectItem value="medium-term">{t('form.timeframe.medium')}</SelectItem>
                  <SelectItem value="long-term">{t('form.timeframe.long')}</SelectItem>
                  <SelectItem value="exploring">{t('form.timeframe.exploring')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">{t('form.comments')}</Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
              placeholder={t('form.commentsPlaceholder')}
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
              {t('form.submit')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};