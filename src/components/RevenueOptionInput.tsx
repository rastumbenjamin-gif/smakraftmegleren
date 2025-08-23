import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLanguage } from "@/contexts/LanguageContext";

interface RevenueOptionInputProps {
  value?: {
    type: 'percentage' | 'fixed';
    amount: string;
  };
  onChange?: (value: { type: 'percentage' | 'fixed'; amount: string }) => void;
  label?: string;
  placeholder?: string;
  fixedType?: 'percentage' | 'fixed'; // When set, hides radio buttons and forces this type
}

export const RevenueOptionInput = ({ 
  value, 
  onChange, 
  label = "Revenue Structure",
  placeholder,
  fixedType
}: RevenueOptionInputProps) => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState<'percentage' | 'fixed'>(
    fixedType || value?.type || 'percentage'
  );
  const [amount, setAmount] = useState(value?.amount || '');

  // Update selectedType when fixedType changes
  useEffect(() => {
    if (fixedType && fixedType !== selectedType) {
      setSelectedType(fixedType);
      setAmount(''); // Clear amount when type changes
      onChange?.({ type: fixedType, amount: '' });
    }
  }, [fixedType, selectedType, onChange]);

  const handleTypeChange = (newType: 'percentage' | 'fixed') => {
    setSelectedType(newType);
    setAmount(''); // Clear amount when switching types
    onChange?.({ type: newType, amount: '' });
  };

  const handleAmountChange = (newAmount: string) => {
    setAmount(newAmount);
    onChange?.({ type: selectedType, amount: newAmount });
  };

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">{label}</Label>
      
      {/* Only show radio buttons if type is not fixed */}
      {!fixedType && (
        <RadioGroup
          value={selectedType}
          onValueChange={handleTypeChange}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="percentage" id="percentage" />
            <Label 
              htmlFor="percentage" 
              className="flex-1 cursor-pointer text-sm font-medium text-success"
            >
              {t('sellForm.percentageRevenue')}
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 p-3 rounded-lg border border-input hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="fixed" id="fixed" />
            <Label 
              htmlFor="fixed" 
              className="flex-1 cursor-pointer text-sm font-medium text-muted-foreground"
            >
              {t('sellForm.fixedAnnual')}
            </Label>
          </div>
        </RadioGroup>
      )}

      {/* Dynamic Input Field */}
      <div className="mt-4">
        <div className="relative">
          <Input
            type="number"
            placeholder={
              placeholder || 
              (selectedType === 'percentage' ? t('sellForm.enterPercentage') : t('sellForm.enterAmount'))
            }
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="pr-12"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm font-medium">
            {selectedType === 'percentage' ? '%' : 'kr/år'}
          </div>
        </div>
        
        {selectedType === 'percentage' && amount && (
          <p className="text-xs text-muted-foreground mt-2">
            {amount}{t('sellForm.percentageDescription')}
          </p>
        )}
        
        {selectedType === 'fixed' && amount && (
          <p className="text-xs text-muted-foreground mt-2">
            {t('sellForm.fixedDescription').replace('{amount}', parseInt(amount).toLocaleString('no-NO'))}
          </p>
        )}
      </div>
    </div>
  );
};