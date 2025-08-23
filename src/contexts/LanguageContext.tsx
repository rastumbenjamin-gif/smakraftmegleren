import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'no';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

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

const translations = {
  en: {
    // Header
    'header.title': 'Småkraftmegleren',
    
    // Hero Section
    'hero.title': 'Real Green Investments',
    'hero.subtitle': 'Own actual hydro plants in Norway. Generate 5-10% annual returns while creating measurable environmental impact that directly contributes to your sustainability goals.',
    'hero.feature1': 'Clean Energy Production',
    'hero.feature2': 'Norwegian Fjord Power',
    'hero.feature3': '5-10% Annual ROI',
    'hero.cta1': 'View Investment Opportunities',
    'hero.cta1.subtitle': 'Start investing today',
    'hero.cta2': 'Evaluate Your Hydro Plant',
    'hero.cta2.subtitle': 'Free evaluation • No obligations',
    'hero.freeLimited': 'Free for a limited time',
    
    // Comparison Section
    'comparison.badge': 'Real Investment Comparison',
    'comparison.title': 'Hydro Plants vs Alternative Investments',
    'comparison.subtitle': 'See why owning actual renewable energy infrastructure delivers superior returns and genuine environmental impact compared to carbon credits and ESG funds.',
    'comparison.hydro.title': 'Norwegian Hydro Plants',
    'comparison.hydro.roi': '5-10%',
    'comparison.hydro.feature1': 'Tangible asset ownership',
    'comparison.hydro.feature2': 'Direct energy production',
    'comparison.hydro.feature3': 'Measurable CO₂ reduction',
    'comparison.hydro.feature4': 'Regulated by Norwegian authorities',
    'comparison.hydro.feature5': 'Inflation-protected revenue',
    'comparison.hydro.details.title': 'Why Norwegian Hydro Plants Are Superior:',
    'comparison.hydro.details.1.title': 'Real Asset Ownership:',
    'comparison.hydro.details.1.text': 'You own actual renewable energy infrastructure, not just certificates or promises.',
    'comparison.hydro.details.2.title': 'Predictable Returns:',
    'comparison.hydro.details.2.text': 'Electricity demand is constant, and Norway has a regulated energy market ensuring stable pricing.',
    'comparison.hydro.details.3.title': 'Direct Climate Impact:',
    'comparison.hydro.details.3.text': 'Every kWh produced directly displaces fossil fuel energy and creates measurable CO₂ reduction.',
    
    'comparison.carbon.title': 'Carbon Credits',
    'comparison.carbon.roi': 'Highly volatile',
    'comparison.carbon.feature1': 'No asset ownership',
    'comparison.carbon.feature2': 'Often questionable additionality',
    'comparison.carbon.feature3': 'Immediate offset credits',
    'comparison.carbon.feature4': 'Limited regulatory oversight',
    'comparison.carbon.feature5': 'Price volatility risk',
    'comparison.carbon.details.title': 'Why Carbon Credits Often Fail:',
    'comparison.carbon.details.1.title': 'Additionality Problem:',
    'comparison.carbon.details.1.text': 'Many projects would have happened anyway, making the "offset" meaningless.',
    'comparison.carbon.details.2.title': 'No Permanent Impact:',
    'comparison.carbon.details.2.text': 'Forests can burn down, projects can fail, but you\'ve already paid for the credits.',
    'comparison.carbon.details.3.title': 'No Asset Value:',
    'comparison.carbon.details.3.text': 'You own nothing tangible - just a digital certificate that can become worthless.',
    
    'comparison.esg.title': 'ESG Funds',
    'comparison.esg.roi': '4-7%',
    'comparison.esg.feature1': 'Indirect impact only',
    'comparison.esg.feature2': 'Greenwashing concerns',
    'comparison.esg.feature3': 'Diversified portfolio',
    'comparison.esg.feature4': 'Management fees 1-2%',
    'comparison.esg.feature5': 'Unclear impact measurement',
    'comparison.esg.details.title': 'Why ESG Funds Disappoint:',
    'comparison.esg.details.1.title': 'Greenwashing:',
    'comparison.esg.details.1.text': 'Many "ESG" funds still hold fossil fuel companies, weapons manufacturers, and other questionable investments.',
    'comparison.esg.details.2.title': 'Fee Erosion:',
    'comparison.esg.details.2.text': '1-2% annual fees compound over time, significantly reducing your returns.',
    'comparison.esg.details.3.title': 'Diluted Impact:',
    'comparison.esg.details.3.text': 'Your money is spread across hundreds of companies - minimal influence on any single environmental outcome.',
    
    'comparison.readMore': 'Read More Details',
    'comparison.showLess': 'Show Less Details',
    
    // Investment Opportunities
    'opportunities.badge': 'Current Opportunities',
    'opportunities.title': 'Available Hydro Plant Investments',
    'opportunities.subtitle': 'Invest in operational and under-construction hydro plants across Norway\'s most productive fjords and mountain regions.',
    'opportunities.capacity': 'Installed capacity',
    'opportunities.production': 'Annual production',
    'opportunities.buildYear': 'Build year',
    'opportunities.advantages': 'Unique Advantages',
    'opportunities.register': 'Register for pricing and info',
    'opportunities.inOperation': 'In Operation',
    'opportunities.consentedProject': 'Consented Project',
    
    // Plant specific data
    'opportunities.hindbergelva.advantage1': 'High winter production (peak prices)',
    'opportunities.hindbergelva.advantage2': 'Recently renovated equipment',
    'opportunities.bjora.advantage1': 'Fresh consent (December 2024)',
    'opportunities.bjora.advantage2': 'High production, solid revenue',
    'opportunities.sandvik.advantage1': 'High head height (132.4m)',
    'opportunities.sandvik.advantage2': 'Stable water intake (0.88 m³/s)',
    
    // More opportunities
    'opportunities.more.title': 'Discover More Opportunities',
    'opportunities.more.subtitle': 'These are just our featured investments. We have additional hydropower plants across Norway, ranging from small-scale community projects to larger commercial installations.',
    'opportunities.more.feature1': 'Nationwide coverage',
    'opportunities.more.feature2': 'ROI 5-10%',
    'opportunities.more.feature3': 'Various investment sizes',
    'opportunities.more.cta': 'Request More Investment Opportunities',
    
    // Forms - Registration Modal
    'form.register.title': 'Register Interest',
    'form.register.subtitle': 'Register your interest to receive pricing details and investment information for',
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.investorType': 'Investor Type',
    'form.investorType.individual': 'Individual Investor',
    'form.investorType.institutional': 'Institutional Investor',
    'form.investorType.company': 'Company/Corporate',
    'form.budget': 'Investment Budget (NOK)',
    'form.budget.500k': '500,000 - 1M',
    'form.budget.1m': '1M - 5M',
    'form.budget.5m': '5M - 10M',
    'form.budget.10m': '10M+',
    'form.investmentGoal': 'Investment Goal',
    'form.investmentGoal.roi': 'Maximize ROI',
    'form.investmentGoal.sustainability': 'Sustainability Impact',
    'form.investmentGoal.both': 'Both ROI and Impact',
    'form.timeline': 'Investment Timeline',
    'form.timeline.immediate': 'Immediate (0-3 months)',
    'form.timeline.short': 'Short-term (3-6 months)',
    'form.timeline.medium': 'Medium-term (6-12 months)',
    'form.timeline.long': 'Long-term (12+ months)',
    'form.consent': 'I consent to being contacted about investment opportunities',
    'form.cancel': 'Cancel',
    'form.submit': 'Register Interest',
    'form.submitting': 'Registering...',
    
    // Language toggle
    'language.norwegian': 'Norsk',
    'language.english': 'English',
  },
  no: {
    // Header
    'header.title': 'Småkraftmegleren',
    
    // Hero Section
    'hero.title': 'Ekte Grønne Investeringer',
    'hero.subtitle': 'Eie faktiske vannkraftverk i Norge. Generer 5-10% årlig avkastning mens du skaper målbar miljøpåvirkning som direkte bidrar til dine bærekraftsmål.',
    'hero.feature1': 'Ren Energiproduksjon',
    'hero.feature2': 'Norsk Fjordkraft',
    'hero.feature3': '5-10% Årlig Avkastning',
    'hero.cta1': 'Se Investeringsmuligheter',
    'hero.cta1.subtitle': 'Start å investere i dag',
    'hero.cta2': 'Vurder Ditt Kraftverk',
    'hero.cta2.subtitle': 'Gratis vurdering • Ingen forpliktelser',
    'hero.freeLimited': 'Gratis for begrenset tid',
    
    // Comparison Section
    'comparison.badge': 'Reell Investeringssammenligning',
    'comparison.title': 'Vannkraftverk vs Alternative Investeringer',
    'comparison.subtitle': 'Se hvorfor eierskap av faktisk infrastruktur for fornybar energi gir overlegen avkastning og genuin miljøpåvirkning sammenlignet med karbonkreditter og ESG-fond.',
    'comparison.hydro.title': 'Norske Vannkraftverk',
    'comparison.hydro.roi': '5-10%',
    'comparison.hydro.feature1': 'Håndgripelig eiendel',
    'comparison.hydro.feature2': 'Direkte energiproduksjon',
    'comparison.hydro.feature3': 'Målbar CO₂-reduksjon',
    'comparison.hydro.feature4': 'Regulert av norske myndigheter',
    'comparison.hydro.feature5': 'Inflasjonsbeskyttet inntekt',
    'comparison.hydro.details.title': 'Hvorfor Norske Vannkraftverk er Overlegne:',
    'comparison.hydro.details.1.title': 'Reelt Eiendel-eierskap:',
    'comparison.hydro.details.1.text': 'Du eier faktisk infrastruktur for fornybar energi, ikke bare sertifikater eller løfter.',
    'comparison.hydro.details.2.title': 'Forutsigbar Avkastning:',
    'comparison.hydro.details.2.text': 'Strømetterspørselen er konstant, og Norge har et regulert energimarked som sikrer stabil prising.',
    'comparison.hydro.details.3.title': 'Direkte Klimapåvirkning:',
    'comparison.hydro.details.3.text': 'Hver kWh produsert fortrenger direkte fossil energi og skaper målbar CO₂-reduksjon.',
    
    'comparison.carbon.title': 'Karbonkreditter',
    'comparison.carbon.roi': 'Høy volatilitet',
    'comparison.carbon.feature1': 'Ingen eiendel-eierskap',
    'comparison.carbon.feature2': 'Ofte tvilsom tilleggseffekt',
    'comparison.carbon.feature3': 'Umiddelbare offsetkreditter',
    'comparison.carbon.feature4': 'Begrenset regulatorisk tilsyn',
    'comparison.carbon.feature5': 'Prisvolatilitet risiko',
    'comparison.carbon.details.title': 'Hvorfor Karbonkreditter Ofte Feiler:',
    'comparison.carbon.details.1.title': 'Tilleggseffekt-problemet:',
    'comparison.carbon.details.1.text': 'Mange prosjekter ville ha skjedd uansett, noe som gjør "offsettet" meningsløst.',
    'comparison.carbon.details.2.title': 'Ingen Permanent Påvirkning:',
    'comparison.carbon.details.2.text': 'Skoger kan brenne ned, prosjekter kan mislykkes, men du har allerede betalt for kredittene.',
    'comparison.carbon.details.3.title': 'Ingen Eiendel-verdi:',
    'comparison.carbon.details.3.text': 'Du eier ingenting håndgripelig - bare et digitalt sertifikat som kan bli verdiløst.',
    
    'comparison.esg.title': 'ESG-fond',
    'comparison.esg.roi': '4-7%',
    'comparison.esg.feature1': 'Kun indirekte påvirkning',
    'comparison.esg.feature2': 'Grønnvasking-bekymringer',
    'comparison.esg.feature3': 'Diversifisert portefølje',
    'comparison.esg.feature4': 'Forvaltningsgebyrer 1-2%',
    'comparison.esg.feature5': 'Uklar påvirkningmåling',
    'comparison.esg.details.title': 'Hvorfor ESG-fond Skuffer:',
    'comparison.esg.details.1.title': 'Grønnvasking:',
    'comparison.esg.details.1.text': 'Mange "ESG"-fond holder fortsatt fossil-selskaper, våpenprodusenter og andre tvilsomme investeringer.',
    'comparison.esg.details.2.title': 'Gebyr-erosjon:',
    'comparison.esg.details.2.text': '1-2% årlige gebyrer sammensetter seg over tid og reduserer avkastningen betydelig.',
    'comparison.esg.details.3.title': 'Utvannet Påvirkning:',
    'comparison.esg.details.3.text': 'Pengene dine er spredt over hundrevis av selskaper - minimal innflytelse på enkelt miljøutfall.',
    
    'comparison.readMore': 'Les Mer Detaljer',
    'comparison.showLess': 'Vis Færre Detaljer',
    
    // Investment Opportunities
    'opportunities.badge': 'Nåværende Muligheter',
    'opportunities.title': 'Tilgjengelige Vannkraftinvesteringer',
    'opportunities.subtitle': 'Invester i operative og under-konstruksjon vannkraftverk på tvers av Norges mest produktive fjorder og fjellregioner.',
    'opportunities.capacity': 'Installert kapasitet',
    'opportunities.production': 'Årlig produksjon',
    'opportunities.buildYear': 'Byggeår',
    'opportunities.advantages': 'Unike Fordeler',
    'opportunities.register': 'Registrer for prising og info',
    'opportunities.inOperation': 'I Drift',
    'opportunities.consentedProject': 'Konsesjonert Prosjekt',
    
    // Plant specific data
    'opportunities.hindbergelva.advantage1': 'Høy vinterproduksjon (topppriser)',
    'opportunities.hindbergelva.advantage2': 'Nylig renovert utstyr',
    'opportunities.bjora.advantage1': 'Fersk konsesjon (desember 2024)',
    'opportunities.bjora.advantage2': 'Høy produksjon, solid inntekt',
    'opportunities.sandvik.advantage1': 'Høy fallhøyde (132,4m)',
    'opportunities.sandvik.advantage2': 'Stabil vanninntak (0,88 m³/s)',
    
    // More opportunities
    'opportunities.more.title': 'Oppdag Flere Muligheter',
    'opportunities.more.subtitle': 'Dette er bare våre fremhevede investeringer. Vi har flere vannkraftverk over hele Norge, fra småskala samfunnsprosjekter til større kommersielle installasjoner.',
    'opportunities.more.feature1': 'Landsdekkende',
    'opportunities.more.feature2': 'Avkastning 5-10%',
    'opportunities.more.feature3': 'Ulike investeringsstørrelser',
    'opportunities.more.cta': 'Be om Flere Investeringsmuligheter',
    
    // Forms - Registration Modal
    'form.register.title': 'Registrer Interesse',
    'form.register.subtitle': 'Registrer din interesse for å motta prisdetaljer og investeringsinformasjon for',
    'form.name': 'Fullt Navn',
    'form.email': 'E-postadresse',
    'form.phone': 'Telefonnummer',
    'form.investorType': 'Investortype',
    'form.investorType.individual': 'Privatinvestor',
    'form.investorType.institutional': 'Institusjonell Investor',
    'form.investorType.company': 'Bedrift/Selskap',
    'form.budget': 'Investeringsbudsjett (NOK)',
    'form.budget.500k': '500 000 - 1M',
    'form.budget.1m': '1M - 5M',
    'form.budget.5m': '5M - 10M',
    'form.budget.10m': '10M+',
    'form.investmentGoal': 'Investeringsmål',
    'form.investmentGoal.roi': 'Maksimer Avkastning',
    'form.investmentGoal.sustainability': 'Bærekraftpåvirkning',
    'form.investmentGoal.both': 'Både Avkastning og Påvirkning',
    'form.timeline': 'Investeringstidslinje',
    'form.timeline.immediate': 'Umiddelbar (0-3 måneder)',
    'form.timeline.short': 'Kortsiktig (3-6 måneder)',
    'form.timeline.medium': 'Mellomsiktig (6-12 måneder)',
    'form.timeline.long': 'Langsiktig (12+ måneder)',
    'form.consent': 'Jeg samtykker til å bli kontaktet om investeringsmuligheter',
    'form.cancel': 'Avbryt',
    'form.submit': 'Registrer Interesse',
    'form.submitting': 'Registrerer...',
    
    // Language toggle
    'language.norwegian': 'Norsk',
    'language.english': 'English',
  }
};