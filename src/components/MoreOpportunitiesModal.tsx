import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold mb-2">
              Discover More Opportunities
            </DialogTitle>
            <Badge className="mx-auto bg-hydro-blue text-white">
              Request Additional Investment Options
            </Badge>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+47 123 45 678"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Investment Amount Range *</Label>
                <Select value={formData.investmentAmount} onValueChange={(value) => handleInputChange("investmentAmount", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25k-50k">0.3 MNOK - 0.6 MNOK</SelectItem>
                    <SelectItem value="50k-100k">0.6 MNOK - 1.2 MNOK</SelectItem>
                    <SelectItem value="100k-250k">1.2 MNOK - 3 MNOK</SelectItem>
                    <SelectItem value="250k-500k">3 MNOK - 6 MNOK</SelectItem>
                    <SelectItem value="500k+">6 MNOK+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Investment Timeframe *</Label>
                <Select value={formData.investmentTimeframe} onValueChange={(value) => handleInputChange("investmentTimeframe", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                    <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                    <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                    <SelectItem value="long">Long-term (6+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Investment Experience *</Label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-time">First-time investor</SelectItem>
                  <SelectItem value="some">Some investment experience</SelectItem>
                  <SelectItem value="experienced">Experienced investor</SelectItem>
                  <SelectItem value="professional">Professional investor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="interests">Specific Interests</Label>
              <Textarea
                id="interests"
                value={formData.interests}
                onChange={(e) => handleInputChange("interests", e.target.value)}
                placeholder="Are you interested in specific regions, plant sizes, or operational status? (e.g., operational plants only, new construction projects, specific Norwegian regions)"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                placeholder="Any additional questions or requirements?"
                rows={3}
              />
            </div>

            <div className="flex gap-4 pt-4">
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
                className="flex-1 bg-hydro-blue hover:bg-hydro-blue/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request More Opportunities"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};