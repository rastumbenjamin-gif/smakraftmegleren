import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface MoreOpportunitiesModalProps {
  children: React.ReactNode;
}

export const MoreOpportunitiesModal = ({ children }: MoreOpportunitiesModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentAmount: "",
    investmentTimeframe: "",
    experience: "",
    interests: "",
    additionalInfo: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-notification", {
        body: {
          type: "more_opportunities_request",
          data: formData
        }
      });

      if (error) {
        console.error("Error sending notification:", error);
        toast.error("Failed to submit request. Please try again.");
        return;
      }

      toast.success("Your request has been submitted successfully! We'll be in touch soon.");
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        investmentAmount: "",
        investmentTimeframe: "",
        experience: "",
        interests: "",
        additionalInfo: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">
              {t('more_opportunities.title')}
            </DialogTitle>
            <p className="text-muted-foreground">
              {t('more_opportunities.subtitle')}
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('form.name')} {t('form.required')}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
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
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder=""
                  required
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t('registration.investor_type')} {t('form.required')}</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)} required>
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
                <Select value={formData.investmentAmount} onValueChange={(value) => handleInputChange("investmentAmount", value)} required>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder={t('registration.select_budget')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="25k-50k">0.5 MNOK - 1 MNOK</SelectItem>
                    <SelectItem value="50k-100k">1 MNOK - 2.5 MNOK</SelectItem>
                    <SelectItem value="100k-250k">2.5 MNOK - 5 MNOK</SelectItem>
                    <SelectItem value="250k-500k">5 MNOK - 10 MNOK</SelectItem>
                    <SelectItem value="500k+">10 MNOK+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>{t('registration.pricing_area')} {t('form.required')}</Label>
                <Select value={formData.phone} onValueChange={(value) => handleInputChange("phone", value)}>
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
                <Select value={formData.interests} onValueChange={(value) => handleInputChange("interests", value)}>
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
                <Select value={formData.investmentTimeframe} onValueChange={(value) => handleInputChange("investmentTimeframe", value)} required>
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
              <Label htmlFor="additionalInfo">{t('registration.comments')}</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                placeholder={t('registration.comments_placeholder')}
                className="bg-background min-h-[100px] resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex-1"
              >
                {t('form.cancel')}
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-hydro-blue to-hydro-green text-white hover:opacity-90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  t('registration.register_button')
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};