import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { X, MapPin, Zap, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface RegistrationModalProps {
  plantName: string;
  children: React.ReactNode;
}

export const RegistrationModal = ({ plantName, children }: RegistrationModalProps) => {
  const [open, setOpen] = useState(false);
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
        description: `Thank you for your interest in ${plantName}. We'll contact you within 24 hours with detailed information.`,
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
        title: "Registration Error", 
        description: "There was an issue sending your registration. Please try again.",
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

        {/* Plant Details Section - Show for Hindbergelva kraftverk */}
        {plantName === "Hindbergelva kraftverk" && (
          <div className="bg-muted/50 rounded-lg p-6 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">Hindbergelva Power Plant</h3>
              <p className="text-muted-foreground flex items-center justify-center gap-1">
                <MapPin className="h-4 w-4" />
                Mosvik, Trøndelag
              </p>
              <Badge className="mt-2 bg-success text-white">In operation</Badge>
            </div>

            {/* Key Investment Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">kr 8,500,000</div>
                <div className="text-sm text-muted-foreground">Sales price</div>
                <div className="text-xs text-green-600">Competitive price</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">6%</div>
                <div className="text-sm text-muted-foreground">Expected annual return</div>
                <div className="text-xs text-blue-600">Stable and predictable</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">34</div>
                <div className="text-sm text-muted-foreground">years remaining lifetime</div>
                <div className="text-xs text-purple-600">Long investment horizon</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">kr 540,000</div>
                <div className="text-sm text-muted-foreground">Expected annual income</div>
                <div className="text-xs text-orange-600">Based on last 3 years average</div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xs">🌱</span>
                </div>
                <h4 className="font-semibold text-green-700 dark:text-green-300">Environmental impact and social benefit</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">The power plant's positive contribution to environment and society</p>
              
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">176</div>
                  <div className="text-sm text-muted-foreground">tons CO₂ reduction per year</div>
                  <div className="text-xs text-green-600">Equivalent to taking 77 cars off the road</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">286</div>
                  <div className="text-sm text-muted-foreground">households supplied</div>
                  <div className="text-xs text-blue-600">Based on 5 MWh consumption per household</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>100% renewable energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Zero local emissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Contributes to Norwegian climate goals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Supports local energy supply</span>
                </div>
              </div>
            </div>

            {/* Technical & Investment Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <h4 className="font-semibold">Technical specifications</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Installed capacity</span>
                    <span className="font-medium">0.53 MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual production (GWh, average last 5 years)</span>
                    <span className="font-medium">1.43 GWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity factor</span>
                    <span className="font-medium">30.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Build year</span>
                    <span className="font-medium">2009</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Years in operation</span>
                    <span className="font-medium">16 years</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <h4 className="font-semibold">Investment details</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sales price</span>
                    <span className="font-medium">kr 8,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected return</span>
                    <span className="font-medium text-green-600">6% p.a.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual income</span>
                    <span className="font-medium">kr 540,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Remaining lifetime</span>
                    <span className="font-medium">34 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name and Email Row */}
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

          {/* Investor Type */}
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

          {/* Budget Range and Pricing Area Row */}
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

          {/* Production Range and Timeframe Row */}
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

          {/* Additional Comments */}
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

          {/* Action Buttons */}
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
  );
};