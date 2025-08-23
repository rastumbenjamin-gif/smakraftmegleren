import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface MoreOpportunitiesModalProps {
  children: React.ReactNode;
}

export const MoreOpportunitiesModal = ({ children }: MoreOpportunitiesModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
              Register for more information
            </DialogTitle>
            <p className="text-muted-foreground">
              Request additional hydropower investment opportunities
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
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
                <Label htmlFor="email">Email *</Label>
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
              <Label>Investor type *</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)} required>
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
                <Select value={formData.investmentAmount} onValueChange={(value) => handleInputChange("investmentAmount", value)} required>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select budget" />
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
                <Label>Pricing area *</Label>
                <Select value={formData.phone} onValueChange={(value) => handleInputChange("phone", value)}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select pricing area" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="no1">NO1 - Eastern Norway</SelectItem>
                    <SelectItem value="no2">NO2 - Southern Norway</SelectItem>
                    <SelectItem value="no3">NO3 - Central Norway</SelectItem>
                    <SelectItem value="no4">NO4 - Northern Norway</SelectItem>
                    <SelectItem value="no5">NO5 - Western Norway</SelectItem>
                    <SelectItem value="open-explore">Open to explore</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preferred production range *</Label>
                <Select value={formData.interests} onValueChange={(value) => handleInputChange("interests", value)}>
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select production range" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-lg z-50">
                    <SelectItem value="under-3">Under 3 GWh</SelectItem>
                    <SelectItem value="3-5">3-5 GWh</SelectItem>
                    <SelectItem value="6-10">6-10 GWh</SelectItem>
                    <SelectItem value="11-20">11-20 GWh</SelectItem>
                    <SelectItem value="over-20">Over 20 GWh</SelectItem>
                    <SelectItem value="open-explore">Open to explore</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Purchase timeframe *</Label>
                <Select value={formData.investmentTimeframe} onValueChange={(value) => handleInputChange("investmentTimeframe", value)} required>
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
              <Label htmlFor="additionalInfo">Additional comments</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                placeholder="Describe your specific requirements or preferences..."
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
                Cancel
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
                  "Register interest"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};