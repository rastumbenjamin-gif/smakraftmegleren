import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'no' : 'en');
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-white/30 text-foreground hover:text-primary shadow-lg transition-all duration-300 group"
      >
        <Globe className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-medium">
          {language === 'en' ? t('language.norwegian') : t('language.english')}
        </span>
      </Button>
    </div>
  );
};