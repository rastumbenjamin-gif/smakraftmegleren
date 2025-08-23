import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Search, Rocket } from "lucide-react";
import { SearchKraftverkCombobox } from "./SearchKraftverkCombobox";
import { RevenueOptionInput } from "./RevenueOptionInput";
import { supabase } from "@/integrations/supabase/client";


interface SellPowerPlantModalProps {
  children: React.ReactNode;
}

export const SellPowerPlantModal = ({ children }: SellPowerPlantModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    phone: "",
    email: "",
    // Power Plant Information
    plantName: "",
    municipality: "",
    county: "",
    installedCapacity: "",
    annualProduction: "",
    // Sales Details
    mainReason: "",
    maintenanceResponsible: "",
    waterRightsLease: "",
    salesTimeframe: "",
    priceExpectation: "",
    additionalComments: "",
    consentAgreed: false,
    // Water rights lease details
    waterRightsDetails: null as { type: 'percentage' | 'fixed'; amount: string } | null
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.plantName || !formData.consentAgreed) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and agree to the terms.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Send notification email
      const { error } = await supabase.functions.invoke("send-notification", {
        body: {
          type: "seller",
          data: {
            navn: formData.name,
            telefon: formData.phone,
            epost: formData.email,
            kraftverkNavn: formData.plantName,
            lokasjon: `${formData.municipality}, ${formData.county}`,
            installertEffekt: formData.installedCapacity,
            aarligProduksjon: formData.annualProduction,
            byggeaar: "N/A", // Not collected in this form
            pris: formData.priceExpectation,
            salgsgrunn: formData.mainReason,
            tidslinje: formData.salesTimeframe,
            kommentarer: formData.additionalComments,
            samtykke: formData.consentAgreed
          }
        }
      });

      if (error) {
        console.error("Email notification error:", error);
        toast({
          title: "Submission Error",
          description: "There was an issue sending your request. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Evaluation Request Sent!",
        description: "Thank you for your submission. We'll contact you within 24 hours with a free evaluation of your power plant.",
      });
      
      setOpen(false);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        plantName: "",
        municipality: "",
        county: "",
        installedCapacity: "",
        annualProduction: "",
        mainReason: "",
        maintenanceResponsible: "",
        waterRightsLease: "",
        salesTimeframe: "",
        priceExpectation: "",
        additionalComments: "",
        consentAgreed: false,
        waterRightsDetails: null
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue sending your request. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">Evaluate Your Hydro Plant</DialogTitle>
          <p className="text-muted-foreground mb-4">
            Get a professional evaluation of your hydroelectric facility with detailed market analysis
          </p>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl font-bold line-through text-muted-foreground">10,000 NOK</span>
              <span className="text-3xl font-bold text-green-600">Free for a limited time</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional evaluation • Market analysis • No obligations
            </p>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-8 mt-6">
          {/* Contact Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-hydro-blue text-white flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <h3 className="text-lg font-semibold">Contact Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                  className="bg-background"
                />
              </div>
            </div>
            
            <div className="ml-10">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
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
          </div>

          {/* Power Plant Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-hydro-green text-white flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <h3 className="text-lg font-semibold">Power Plant Information</h3>
            </div>
            
            <div className="ml-10 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="plantName">Power plant name * <Search className="inline h-4 w-4 ml-1" /></Label>
                <SearchKraftverkCombobox
                  value={formData.plantName}
                  onChange={(v) => setFormData((prev) => ({ ...prev, plantName: v }))}
                  onSelect={(k) => {
                    setFormData((prev) => ({
                      ...prev,
                      plantName: k.Navn,
                      municipality: k.Kommune,
                      county: k.Fylke,
                      installedCapacity: String(k.MaksYtelse ?? ""),
                      annualProduction: String(k.MidProd_91_20 ?? ""),
                    }));
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="municipality">Municipality *</Label>
                  <Input
                    id="municipality"
                    value={formData.municipality}
                    onChange={(e) => setFormData(prev => ({ ...prev, municipality: e.target.value }))}
                    placeholder="F.eks. Voss"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label>County *</Label>
                  <Select value={formData.county} onValueChange={(value) => setFormData(prev => ({ ...prev, county: value }))}>
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue placeholder="Select county" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border shadow-lg z-50">
                      <SelectItem value="Agder">Agder</SelectItem>
                      <SelectItem value="Buskerud">Buskerud</SelectItem>
                      <SelectItem value="Innlandet">Innlandet</SelectItem>
                      <SelectItem value="Møre og Romsdal">Møre og Romsdal</SelectItem>
                      <SelectItem value="Nordland">Nordland</SelectItem>
                      <SelectItem value="Oslo">Oslo</SelectItem>
                      <SelectItem value="Rogaland">Rogaland</SelectItem>
                      <SelectItem value="Troms og Finnmark">Troms og Finnmark</SelectItem>
                      <SelectItem value="Trøndelag">Trøndelag</SelectItem>
                      <SelectItem value="Vestfold og Telemark">Vestfold og Telemark</SelectItem>
                      <SelectItem value="Vestland">Vestland</SelectItem>
                      <SelectItem value="Viken">Viken</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Installed capacity *</Label>
                  <Input
                    id="capacity"
                    value={formData.installedCapacity}
                    onChange={(e) => setFormData(prev => ({ ...prev, installedCapacity: e.target.value }))}
                    placeholder="F.eks. 2.5"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="production">Annual production (GWh, average last 5 years) *</Label>
                  <Input
                    id="production"
                    value={formData.annualProduction}
                    onChange={(e) => setFormData(prev => ({ ...prev, annualProduction: e.target.value }))}
                    placeholder="F.eks. 12.5"
                    required
                    className="bg-background"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sales Details Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <h3 className="text-lg font-semibold">Plant Details</h3>
            </div>
            
            <div className="ml-10 space-y-4">
              <div className="space-y-2">
                <Label>Main reason for sale *</Label>
                <Select value={formData.mainReason} onValueChange={(value) => setFormData(prev => ({ ...prev, mainReason: value }))}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select main reason" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="negative-cash-flow">Negative cash flow</SelectItem>
                    <SelectItem value="generational-change">Generational change</SelectItem>
                    <SelectItem value="better-returns">Desire for better returns</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Who is responsible for regular maintenance of the power plant, including cleaning, oil changes, etc.? *</Label>
                <Select value={formData.maintenanceResponsible} onValueChange={(value) => setFormData(prev => ({ ...prev, maintenanceResponsible: value }))}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select who is responsible" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="continue-after-sale">I am responsible and want to continue this after sale</SelectItem>
                    <SelectItem value="no-continue-after-sale">I am responsible but do not want this after sale</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>What are the terms for water rights lease (ground rent for waterfall)? *</Label>
                <Select value={formData.waterRightsLease} onValueChange={(value) => setFormData(prev => ({ ...prev, waterRightsLease: value }))}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select type of water rights lease" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="no-lease">No water rights lease (I own both land and power plant)</SelectItem>
                    <SelectItem value="percentage-revenue">Percentage of gross revenue</SelectItem>
                    <SelectItem value="fixed-annual">Fixed annual amount</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Show revenue input when percentage or fixed is selected */}
              {(formData.waterRightsLease === 'percentage-revenue' || formData.waterRightsLease === 'fixed-annual') && (
                <div className="mt-4">
                  <RevenueOptionInput
                    value={formData.waterRightsDetails}
                    onChange={(value) => setFormData(prev => ({ ...prev, waterRightsDetails: value }))}
                    label="Water Rights Lease Details"
                    fixedType={formData.waterRightsLease === 'percentage-revenue' ? 'percentage' : 'fixed'}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label>Sales timeframe *</Label>
                <Select value={formData.salesTimeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, salesTimeframe: value }))}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                    <SelectItem value="short-term">Short term (3-6 months)</SelectItem>
                    <SelectItem value="medium-term">Medium term (6-12 months)</SelectItem>
                    <SelectItem value="long-term">Long term (12+ months)</SelectItem>
                    <SelectItem value="exploring">Just exploring options</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priceExpectation">Price expectation (optional)</Label>
                <Input
                  id="priceExpectation"
                  value={formData.priceExpectation}
                  onChange={(e) => setFormData(prev => ({ ...prev, priceExpectation: e.target.value }))}
                  placeholder="NOK - what do you think the facility is worth?"
                  className="bg-background"
                />
              </div>
            </div>
          </div>

          {/* Additional Comments */}
          <div className="space-y-2">
            <Label htmlFor="comments">Additional comments</Label>
            <Textarea
              id="comments"
              value={formData.additionalComments}
              onChange={(e) => setFormData(prev => ({ ...prev, additionalComments: e.target.value }))}
              placeholder="Describe your specific requirements or preferences..."
              className="bg-background min-h-[100px] resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="bg-hydro-blue-light/20 p-4 rounded-lg border border-hydro-blue/20">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="consent"
                checked={formData.consentAgreed}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consentAgreed: checked as boolean }))}
                className="mt-1"
              />
              <Label htmlFor="consent" className="text-sm leading-relaxed">
                I consent to my information being processed in accordance with privacy regulations, and that Småkraftmeglerne may contact me regarding the valuation of my power plant. *
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-hydro-green to-hydro-blue text-white hover:opacity-90 py-6 text-lg"
          >
            <Rocket className="h-5 w-5 mr-2" />
            Send free evaluation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};