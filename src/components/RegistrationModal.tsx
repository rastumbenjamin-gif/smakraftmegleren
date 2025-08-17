import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { HindbergelvaOverview } from "./HindbergelvaOverview";

interface RegistrationModalProps {
  plantName: string;
  children: React.ReactNode;
}

export const RegistrationModal = ({ plantName, children }: RegistrationModalProps) => {
  const [open, setOpen] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.investorType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
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
          title: "Registration Error",
          description: "There was an issue sending your registration. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Registration Successful!",
        description: `Thank you for your interest in ${plantName}. Here's the detailed information you requested.`,
      });
      
      setOpen(false);
      
      // Show Hindbergelva overview for that specific plant
      if (plantName === "Hindbergelva kraftverk") {
        setTimeout(() => setShowOverview(true), 300);
      }
      
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
        title: "Registration Error", 
        description: "There was an issue sending your registration. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background border-border">
          <DialogHeader className="relative">
            <DialogTitle className="text-2xl font-bold mb-2">Register for more information</DialogTitle>
            <p className="text-muted-foreground">
              Register din interesse for {plantName}
            </p>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute right-0 top-0 h-6 w-6"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            {/* ... keep existing form code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
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
                <Label htmlFor="email">Email *</Label>
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
              <Label>Investor type *</Label>
              <Select value={formData.investorType} onValueChange={(value) => setFormData(prev => ({ ...prev, investorType: value }))}>
                <SelectTrigger className="bg-background border-input">
                  <SelectValue placeholder="Select investor type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg z-50">
                  <SelectItem value="private-person">Private person</SelectItem>
                  <SelectItem value="company">Company</SelectItem>
                  <SelectItem value="investment-fund">Investment fund</SelectItem>
                  <SelectItem value="institutional-investor">Institutional investor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Budget range *</Label>
                <Select value={formData.budgetRange} onValueChange={(value) => setFormData(prev => ({ ...prev, budgetRange: value }))}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="25k-100k">€25,000 - €100,000</SelectItem>
                    <SelectItem value="100k-500k">€100,000 - €500,000</SelectItem>
                    <SelectItem value="500k-1m">€500,000 - €1,000,000</SelectItem>
                    <SelectItem value="1m-5m">€1,000,000 - €5,000,000</SelectItem>
                    <SelectItem value="5m+">Over €5,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Pricing area *</Label>
                <Select value={formData.pricingArea} onValueChange={(value) => setFormData(prev => ({ ...prev, pricingArea: value }))}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select pricing area" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="no1">NO1 - Eastern Norway</SelectItem>
                    <SelectItem value="no2">NO2 - Southern Norway</SelectItem>
                    <SelectItem value="no3">NO3 - Central Norway</SelectItem>
                    <SelectItem value="no4">NO4 - Northern Norway</SelectItem>
                    <SelectItem value="no5">NO5 - Western Norway</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred production range *</Label>
                <Select value={formData.productionRange} onValueChange={(value) => setFormData(prev => ({ ...prev, productionRange: value }))}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select production range" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="under-3">Under 3 GWh</SelectItem>
                    <SelectItem value="3-5">3-5 GWh</SelectItem>
                    <SelectItem value="6-10">6-10 GWh</SelectItem>
                    <SelectItem value="11-20">11-20 GWh</SelectItem>
                    <SelectItem value="over-20">Over 20 GWh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Sales timeframe *</Label>
                <Select value={formData.timeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}>
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments">Additional comments</Label>
              <Textarea
                id="comments"
                value={formData.comments}
                onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                placeholder="Describe your specific requirements or preferences..."
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
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-hydro-blue to-hydro-green text-white hover:opacity-90"
              >
                Register interest
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Hindbergelva Overview Modal */}
      {showOverview && (
        <div className="fixed inset-0 z-[9999] bg-background overflow-y-auto">
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 right-4 z-[10000] bg-background border border-border rounded-full shadow-lg hover:bg-muted"
            onClick={() => setShowOverview(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="w-full h-full">
            <HindbergelvaOverview />
          </div>
        </div>
      )}
    </>
  );
};