import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'no';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Header
    'header.menu': 'Menu',
    'header.opportunities': 'Investment Opportunities',
    'header.about': 'About',
    'header.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Own Norwegian Hydropower Plants',
    'hero.subtitle': 'Invest directly in hydropower plants and earn steady returns while making a real environmental impact',
    'hero.cta': 'Explore Opportunities',
    'hero.learn_more': 'Learn More',
    
    // Investment Opportunities
    'opportunities.badge': 'Current Opportunities',
    'opportunities.title': 'Available Hydro Plant Investments',
    'opportunities.description': 'Invest in operational and under-construction hydro plants across Norway\'s most productive fjords and mountain regions.',
    'opportunities.power': 'Power',
    'opportunities.annual_production': 'Annual production',
    'opportunities.build_year': 'Build year',
    'opportunities.unique_advantages': 'Unique Advantages',
    'opportunities.register_button': 'Register for pricing and info',
    'opportunities.in_operation': 'In Operation',
    'opportunities.consented_project': 'Consented Project',
    'opportunities.available_investment': 'Available investment',
    'opportunities.more_title': 'Discover More Opportunities',
    'opportunities.more_description': 'These are just our featured investments. We have additional hydropower plants across Norway, ranging from small-scale community projects to larger commercial installations.',
    'opportunities.more_button': 'Request More Investment Opportunities',
    'opportunities.nationwide': 'Nationwide coverage',
    'opportunities.roi_range': 'ROI 5-10%',
    'opportunities.investment_sizes': 'Various investment sizes',
    
    // Comparison Section
    'comparison.badge': 'Real Investment Comparison',
    'comparison.title': 'Hydro Plants vs Alternative Investments',
    'comparison.description': 'See why owning actual hydropower plants delivers superior returns and genuine environmental impact compared to carbon credits and ESG funds.',
    'comparison.hydro_title': 'Norwegian Hydro Plants',
    'comparison.carbon_title': 'Carbon Credits',
    'comparison.esg_title': 'ESG Funds',
    'comparison.annual_roi': 'Annual ROI',
    'comparison.asset_ownership': 'Tangible asset ownership',
    'comparison.direct_energy': 'Direct energy production',
    'comparison.co2_reduction': 'Measurable CO₂ reduction',
    'comparison.regulated': 'Regulated by Norwegian authorities',
    'comparison.inflation_protected': 'Inflation-protected revenue',
    'comparison.no_asset': 'No asset ownership',
    'comparison.questionable': 'Often questionable additionality',
    'comparison.immediate_offset': 'Immediate offset credits',
    'comparison.limited_oversight': 'Limited regulatory oversight',
    'comparison.price_volatility': 'Price volatility risk',
    'comparison.indirect_impact': 'Indirect impact only',
    'comparison.greenwashing': 'Greenwashing concerns',
    'comparison.diversified': 'Diversified portfolio',
    'comparison.management_fees': 'Management fees 1-2%',
    'comparison.unclear_impact': 'Unclear impact measurement',
    'comparison.read_more': 'Read More Details',
    'comparison.show_less': 'Show Less Details',
    
    // Forms
    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.company': 'Company',
    'form.investment_range': 'Investment Range',
    'form.submit': 'Submit',
    'form.cancel': 'Cancel',
  },
  no: {
    // Header
    'header.menu': 'Meny',
    'header.opportunities': 'Investeringsmuligheter',
    'header.about': 'Om oss',
    'header.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Eie Norske Vannkraftverk',
    'hero.subtitle': 'Invester direkte i vannkraftverk og tjen stabil avkastning samtidig som du gjør en reell miljøpåvirkning',
    'hero.cta': 'Utforsk Muligheter',
    'hero.learn_more': 'Lær Mer',
    
    // Investment Opportunities
    'opportunities.badge': 'Nåværende Muligheter',
    'opportunities.title': 'Tilgjengelige Vannkraftinvesteringer',
    'opportunities.description': 'Invester i operative og under konstruksjon vannkraftverk over Norges mest produktive fjorder og fjellområder.',
    'opportunities.power': 'Kraft',
    'opportunities.annual_production': 'Årsproduksjon',
    'opportunities.build_year': 'Byggeår',
    'opportunities.unique_advantages': 'Unike Fordeler',
    'opportunities.register_button': 'Registrer for priser og info',
    'opportunities.in_operation': 'I Drift',
    'opportunities.consented_project': 'Konsesjonert Prosjekt',
    'opportunities.available_investment': 'Tilgjengelig investering',
    'opportunities.more_title': 'Oppdag Flere Muligheter',
    'opportunities.more_description': 'Dette er bare våre utvalgte investeringer. Vi har flere vannkraftverk over hele Norge, fra småskala samfunnsprosjekter til større kommersielle installasjoner.',
    'opportunities.more_button': 'Be om Flere Investeringsmuligheter',
    'opportunities.nationwide': 'Landsdekkende',
    'opportunities.roi_range': 'ROI 5-10%',
    'opportunities.investment_sizes': 'Ulike investeringsstørrelser',
    
    // Comparison Section
    'comparison.badge': 'Reell Investeringssammenligning',
    'comparison.title': 'Vannkraftverk vs Alternative Investeringer',
    'comparison.description': 'Se hvorfor det å eie faktiske vannkraftverk gir overlegen avkastning og ekte miljøpåvirkning sammenlignet med karbonkreditter og ESG-fond.',
    'comparison.hydro_title': 'Norske Vannkraftverk',
    'comparison.carbon_title': 'Karbonkreditter',
    'comparison.esg_title': 'ESG-fond',
    'comparison.annual_roi': 'Årlig ROI',
    'comparison.asset_ownership': 'Håndgripelig eiendomsrett',
    'comparison.direct_energy': 'Direkte energiproduksjon',
    'comparison.co2_reduction': 'Målbar CO₂-reduksjon',
    'comparison.regulated': 'Regulert av norske myndigheter',
    'comparison.inflation_protected': 'Inflasjonsbeskyttede inntekter',
    'comparison.no_asset': 'Ingen eiendomsrett',
    'comparison.questionable': 'Ofte tvilsom additionalitet',
    'comparison.immediate_offset': 'Umiddelbare offsetkreditter',
    'comparison.limited_oversight': 'Begrenset regulatorisk tilsyn',
    'comparison.price_volatility': 'Prisvolatilitetsrisiko',
    'comparison.indirect_impact': 'Kun indirekte påvirkning',
    'comparison.greenwashing': 'Grønnvasking-bekymringer',
    'comparison.diversified': 'Diversifisert portefølje',
    'comparison.management_fees': 'Forvaltningsgebyrer 1-2%',
    'comparison.unclear_impact': 'Uklar påvirkningsmåling',
    'comparison.read_more': 'Les Mer Detaljer',
    'comparison.show_less': 'Vis Mindre Detaljer',
    
    // Forms
    'form.name': 'Navn',
    'form.email': 'E-post',
    'form.phone': 'Telefon',
    'form.company': 'Selskap',
    'form.investment_range': 'Investeringsområde',
    'form.submit': 'Send inn',
    'form.cancel': 'Avbryt',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};