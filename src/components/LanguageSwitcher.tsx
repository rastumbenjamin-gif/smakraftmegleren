import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'no' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-medium hover:bg-white/10 transition-colors bg-black/20 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 shadow-lg"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'NO' : 'EN'}
    </Button>
  );
};