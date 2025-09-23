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
    'opportunities.advantages': 'Key Information',
    'opportunities.register': 'Register for pricing and info',
    'opportunities.inOperation': 'In Operation',
    'opportunities.consentedProject': 'Consented Project',
    
    // Plant specific data
    'opportunities.hindbergelva.advantage1': 'Hydrological buffer ensures smooth yield; 44% of annual output in Nov–Feb.',
    'opportunities.hindbergelva.advantage2': 'Potential +25% increase; licence filed for 20 kW turbine (+100 MWh/year).',
    'opportunities.bjora.advantage1': 'Expansion of existing plant; uses established infrastructure.',
    'opportunities.bjora.advantage2': '~7.2 GWh/year with new concession (Dec 2024).',
    'opportunities.sandvik.advantage1': 'High head (~132 m) Pelton turbine, stable output at low flow.',
    'opportunities.sandvik.advantage2': 'Built 2018, ~3 GWh/year, modern tech with low maintenance.',
    'opportunities.vollabekken.advantage1': 'Downstream of Vollavatnet, hydrological damping stabilizes output.',
    'opportunities.vollabekken.advantage2': 'Strong winter generation; ~610 MWh normalized avg. in Jan, Feb & Dec.',
    
    // More opportunities
    'opportunities.more.title': 'Discover More Opportunities',
    'opportunities.more.subtitle': 'These are just our featured investments. We have additional hydropower plants across Norway, ranging from small-scale community projects to larger commercial installations.',
    'opportunities.more.feature1': 'Nationwide coverage',
    'opportunities.more.feature2': 'ROI 5-10%',
    'opportunities.more.feature3': 'Various investment sizes',
    'opportunities.more.cta': 'Request More Investment Opportunities',
    
    // Forms - Registration Modal
    'form.register.title': 'Register for more information',
    'form.register.subtitle': 'Register your interest for',
    'form.name': 'Name *',
    'form.email': 'Email *',
    'form.phone': 'Phone *',
    'form.investorType': 'Investor type *',
    'form.investorType.private': 'Private person',
    'form.investorType.company': 'Company',
    'form.investorType.fund': 'Investment fund',
    'form.investorType.institutional': 'Institutional investor',
    'form.budgetRange': 'Budget range *',
    'form.budgetRange.1to5': '1 MNOK - 5 MNOK',
    'form.budgetRange.5to10': '5 MNOK - 10 MNOK',
    'form.budgetRange.10to25': '10 MNOK - 25 MNOK',
    'form.budgetRange.25to50': '25 MNOK - 50 MNOK',
    'form.budgetRange.over50': 'Over 50 MNOK',
    'form.pricingArea': 'Pricing area *',
    'form.pricingArea.no1': 'NO1 - Eastern Norway',
    'form.pricingArea.no2': 'NO2 - Southern Norway',
    'form.pricingArea.no3': 'NO3 - Central Norway',
    'form.pricingArea.no4': 'NO4 - Northern Norway',
    'form.pricingArea.no5': 'NO5 - Western Norway',
    'form.pricingArea.open': 'Open to explore',
    'form.productionRange': 'Preferred production range *',
    'form.productionRange.under3': 'Under 3 GWh',
    'form.productionRange.3to5': '3-5 GWh',
    'form.productionRange.6to10': '6-10 GWh',
    'form.productionRange.11to20': '11-20 GWh',
    'form.productionRange.over20': 'Over 20 GWh',
    'form.productionRange.open': 'Open to explore',
    'form.timeframe': 'Purchase timeframe *',
    'form.timeframe.immediate': 'Immediate (0-3 months)',
    'form.timeframe.short': 'Short term (3-6 months)',
    'form.timeframe.medium': 'Medium term (6-12 months)',
    'form.timeframe.long': 'Long term (12+ months)',
    'form.timeframe.exploring': 'Just exploring options',
    'form.comments': 'Additional comments',
    'form.commentsPlaceholder': 'Describe your specific requirements or preferences...',
    'form.cancel': 'Cancel',
    'form.submit': 'Register interest',
    'form.submitting': 'Submitting...',
    
    // Placeholders
    'form.placeholder.selectInvestorType': 'Select investor type',
    'form.placeholder.selectBudget': 'Select budget',
    'form.placeholder.selectPricingArea': 'Select pricing area',
    'form.placeholder.selectProductionRange': 'Select production range',
    'form.placeholder.selectTimeframe': 'Select timeframe',
    
    // Sell Power Plant Modal
    'sell.title': 'Evaluate Your Hydro Plant',
    'sell.subtitle': 'Get a professional evaluation of your hydroelectric facility with detailed market analysis',
    'sell.freeOffer': 'Free for a limited time',
    'sell.offerDetails': 'Professional evaluation • Market analysis • No obligations',
    'sell.section1': 'Contact Information',
    'sell.section2': 'Power Plant Information',
    'sell.section3': 'Plant Details',
    'sell.municipality': 'Municipality *',
    'sell.county': 'County *',
    'sell.capacity': 'Installed capacity *',
    'sell.production': 'Annual production (GWh, average last 5 years) *',
    'sell.plantName': 'Power plant name *',
    'sell.mainReason': 'Main reason for sale *',
    'sell.mainReason.negative': 'Negative cash flow',
    'sell.mainReason.generational': 'Generational change',
    'sell.mainReason.returns': 'Desire for better returns',
    'sell.mainReason.other': 'Other',
    'sell.maintenance': 'Who is responsible for regular maintenance of the power plant, including cleaning, oil changes, etc.? *',
    'sell.maintenance.continue': 'I am responsible and want to continue this after sale',
    'sell.maintenance.noContinue': 'I am responsible but do not want this after sale',
    'sell.maintenance.other': 'Other',
    'sell.waterRights': 'What are the terms for water rights lease (ground rent for waterfall)? *',
    'sell.waterRights.noLease': 'No water rights lease (I own both land and power plant)',
    'sell.waterRights.percentage': 'Percentage of gross revenue',
    'sell.waterRights.fixed': 'Fixed annual amount',
    'sell.waterRights.other': 'Other',
    'sell.salesTimeframe': 'Sales timeframe *',
    'sell.priceExpectation': 'Price expectation (optional)',
    'sell.priceExpectationPlaceholder': 'NOK - what do you think the facility is worth?',
    'sell.consent': 'I consent to being contacted about my power plant evaluation',
    
    // Placeholders for sell form
    'sell.placeholder.selectCounty': 'Select county',
    'sell.placeholder.selectReason': 'Select main reason',
    'sell.placeholder.selectResponsible': 'Select who is responsible',
    'sell.placeholder.selectWaterRights': 'Select type of water rights lease',
    'sell.placeholder.municipalityExample': 'F.eks. Voss',
    'sell.placeholder.capacityExample': 'F.eks. 2.5',
    'sell.placeholder.productionExample': 'F.eks. 12.5',
    
    // More opportunities modal
    'more.title': 'Register for more information',
    'more.subtitle': 'Request additional hydropower investment opportunities',
    'more.budgetRange.0.5m': '0.5 MNOK - 1 MNOK',
    'more.budgetRange.1m': '1 MNOK - 2.5 MNOK',
    'more.budgetRange.2.5m': '2.5 MNOK - 5 MNOK',
    'more.budgetRange.5m': '5 MNOK - 10 MNOK',
    'more.budgetRange.10m': '10 MNOK+',
    
    // Toast messages
    'toast.missingInfo': 'Missing Information',
    'toast.missingInfoDesc': 'Please fill in all required fields.',
    'toast.missingInfoConsent': 'Please fill in all required fields and agree to the terms.',
    'toast.registrationError': 'Registration Error',
    'toast.registrationErrorDesc': 'There was an issue sending your registration. Please try again.',
    'toast.registrationSuccess': 'Registration Successful!',
    'toast.registrationSuccessDesc': 'Thank you for your interest in {plantName}. We will be in touch soon with more information.',
    'toast.submissionError': 'Submission Error',
    'toast.submissionErrorDesc': 'There was an issue sending your request. Please try again.',
    'toast.evaluationSuccess': 'Evaluation Request Sent!',
    'toast.evaluationSuccessDesc': "Thank you for your submission. We'll contact you within 24 hours with a free evaluation of your power plant.",
    'toast.requestSuccess': 'Your request has been submitted successfully! We\'ll be in touch soon.',
    'toast.requestError': 'Failed to submit request. Please try again.',
    
    // Language toggle
    'language.norwegian': 'Norsk',
    'language.english': 'English',
  },
  no: {
    // Header
    'header.title': 'Småkraftmegleren',
    
    // Hero Section
    'hero.title': 'Ekte Grønne Investeringer',
    'hero.subtitle': 'Få tilgang til eierskap i vannkraftverk i Norge. Generer 5-10% årlig avkastning mens du skaper målbar miljøpåvirkning som direkte bidrar til dine bærekraftsmål.',
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
    'comparison.subtitle': 'Se hvorfor eierskap av infrastruktur for fornybar energi gir overlegen avkastning og genuin miljøpåvirkning sammenlignet med karbonkreditter og ESG-fond.',
    'comparison.hydro.title': 'Norske Vannkraftverk',
    'comparison.hydro.roi': '5-10%',
    'comparison.hydro.feature1': 'Håndfaste assets',
    'comparison.hydro.feature2': 'Direkte energiproduksjon',
    'comparison.hydro.feature3': 'Målbar CO₂-reduksjon',
    'comparison.hydro.feature4': 'Regulert av norske myndigheter',
    'comparison.hydro.feature5': 'Inflasjonsbeskyttet inntekt',
    'comparison.hydro.details.title': 'Hvorfor Norske Vannkraftverk er Overlegne:',
    'comparison.hydro.details.1.title': 'Reelt Eiendel-eierskap:',
    'comparison.hydro.details.1.text': 'Du eier infrastruktur for fornybar energi, ikke bare sertifikater eller løfter.',
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
    'opportunities.advantages': 'Nøkkelinformasjon',
    'opportunities.register': 'Registrer for prising og info',
    'opportunities.inOperation': 'I Drift',
    'opportunities.consentedProject': 'Konsesjonert Prosjekt',
    
    // Plant specific data
    'opportunities.hindbergelva.advantage1': 'Hydrologisk buffer gir jevn produksjon; 44 % av årsvolumet nov–feb.',
    'opportunities.hindbergelva.advantage2': 'Mulighet for +25 % økning; konsesjon søkt for 20 kW turbin (+100 MWh/år).',
    'opportunities.bjora.advantage1': 'Utvidelse av eksisterende verk; bruker etablert infrastruktur.',
    'opportunities.bjora.advantage2': '~7,2 GWh/år med ny konsesjon (des 2024).',
    'opportunities.sandvik.advantage1': 'Høyt fall (~132 m) med Peltonturbin, stabil produksjon ved lav vannføring.',
    'opportunities.sandvik.advantage2': 'Bygd 2018, ~3 GWh/år, moderne anlegg med lavt vedlikehold.',
    'opportunities.vollabekken.advantage1': 'Nedstrøms Vollavatnet, hydrologisk demping gir stabil produksjon.',
    'opportunities.vollabekken.advantage2': 'Høy vinterproduksjon; ~610 MWh i årlig snitt basert på jan, feb og des.',
    
    // More opportunities
    'opportunities.more.title': 'Oppdag Flere Muligheter',
    'opportunities.more.subtitle': 'Dette er bare våre fremhevede investeringer. Vi har flere vannkraftverk over hele Norge, fra småskala samfunnsprosjekter til større kommersielle installasjoner.',
    'opportunities.more.feature1': 'Landsdekkende',
    'opportunities.more.feature2': 'Avkastning 5-10%',
    'opportunities.more.feature3': 'Ulike investeringsstørrelser',
    'opportunities.more.cta': 'Be om Flere Investeringsmuligheter',
    
    // Forms - Registration Modal
    'form.register.title': 'Registrer for mer informasjon',
    'form.register.subtitle': 'Registrer din interesse for',
    'form.name': 'Navn *',
    'form.email': 'E-post *',
    'form.phone': 'Telefon *',
    'form.investorType': 'Investortype *',
    'form.investorType.private': 'Privatperson',
    'form.investorType.company': 'Selskap',
    'form.investorType.fund': 'Investeringsfond',
    'form.investorType.institutional': 'Institusjonell investor',
    'form.budgetRange': 'Budsjettområde *',
    'form.budgetRange.1to5': '1 MNOK - 5 MNOK',
    'form.budgetRange.5to10': '5 MNOK - 10 MNOK',
    'form.budgetRange.10to25': '10 MNOK - 25 MNOK',
    'form.budgetRange.25to50': '25 MNOK - 50 MNOK',
    'form.budgetRange.over50': 'Over 50 MNOK',
    'form.pricingArea': 'Prisområde *',
    'form.pricingArea.no1': 'NO1 - Øst-Norge',
    'form.pricingArea.no2': 'NO2 - Sør-Norge',
    'form.pricingArea.no3': 'NO3 - Midt-Norge',
    'form.pricingArea.no4': 'NO4 - Nord-Norge',
    'form.pricingArea.no5': 'NO5 - Vest-Norge',
    'form.pricingArea.open': 'Åpen for å utforske',
    'form.productionRange': 'Foretrukket produksjonsområde *',
    'form.productionRange.under3': 'Under 3 GWh',
    'form.productionRange.3to5': '3-5 GWh',
    'form.productionRange.6to10': '6-10 GWh',
    'form.productionRange.11to20': '11-20 GWh',
    'form.productionRange.over20': 'Over 20 GWh',
    'form.productionRange.open': 'Åpen for å utforske',
    'form.timeframe': 'Kjøpstidsramme *',
    'form.timeframe.immediate': 'Umiddelbart (0-3 måneder)',
    'form.timeframe.short': 'Kortsiktig (3-6 måneder)',
    'form.timeframe.medium': 'Mellomsiktig (6-12 måneder)',
    'form.timeframe.long': 'Langsiktig (12+ måneder)',
    'form.timeframe.exploring': 'Bare utforsker alternativer',
    'form.comments': 'Ytterligere kommentarer',
    'form.commentsPlaceholder': 'Beskriv dine spesifikke krav eller preferanser...',
    'form.cancel': 'Avbryt',
    'form.submit': 'Registrer interesse',
    'form.submitting': 'Sender...',
    
    // Placeholders
    'form.placeholder.selectInvestorType': 'Velg investortype',
    'form.placeholder.selectBudget': 'Velg budsjett',
    'form.placeholder.selectPricingArea': 'Velg prisområde',
    'form.placeholder.selectProductionRange': 'Velg produksjonsområde',
    'form.placeholder.selectTimeframe': 'Velg tidsramme',
    
    // Sell Power Plant Modal
    'sell.title': 'Vurder Ditt Vannkraftverk',
    'sell.subtitle': 'Få en profesjonell evaluering av din vannkraftanlegg med detaljert markedsanalyse',
    'sell.freeOffer': 'Gratis for begrenset tid',
    'sell.offerDetails': 'Profesjonell evaluering • Markedsanalyse • Ingen forpliktelser',
    'sell.section1': 'Kontaktinformasjon',
    'sell.section2': 'Kraftverksinformasjon',
    'sell.section3': 'Anleggsdetaljer',
    'sell.municipality': 'Kommune *',
    'sell.county': 'Fylke *',
    'sell.capacity': 'Installert kapasitet *',
    'sell.production': 'Årlig produksjon (GWh, gjennomsnitt siste 5 år) *',
    'sell.plantName': 'Kraftverksnavn *',
    'sell.mainReason': 'Hovedgrunn for salg *',
    'sell.mainReason.negative': 'Negativ kontantstrøm',
    'sell.mainReason.generational': 'Generasjonsskifte',
    'sell.mainReason.returns': 'Ønske om bedre avkastning',
    'sell.mainReason.other': 'Annet',
    'sell.maintenance': 'Hvem er ansvarlig for regelmessig vedlikehold av kraftverket, inkludert rengjøring, oljeskift osv.? *',
    'sell.maintenance.continue': 'Jeg er ansvarlig og ønsker å fortsette dette etter salg',
    'sell.maintenance.noContinue': 'Jeg er ansvarlig men ønsker ikke dette etter salg',
    'sell.maintenance.other': 'Annet',
    'sell.waterRights': 'Hva er vilkårene for vannrettsleie (grunnleie for foss)? *',
    'sell.waterRights.noLease': 'Ingen vannrettsleie (jeg eier både grunn og kraftverk)',
    'sell.waterRights.percentage': 'Prosent av bruttoinntekt',
    'sell.waterRights.fixed': 'Fast årlig beløp',
    'sell.waterRights.other': 'Annet',
    'sell.salesTimeframe': 'Salgstidsramme *',
    'sell.priceExpectation': 'Prisforventning (valgfritt)',
    'sell.priceExpectationPlaceholder': 'NOK - hva tror du anlegget er verdt?',
    'sell.consent': 'Jeg samtykker til å bli kontaktet om min kraftverksevaluering',
    
    // Placeholders for sell form
    'sell.placeholder.selectCounty': 'Velg fylke',
    'sell.placeholder.selectReason': 'Velg hovedgrunn',
    'sell.placeholder.selectResponsible': 'Velg hvem som er ansvarlig',
    'sell.placeholder.selectWaterRights': 'Velg type vannrettsleie',
    'sell.placeholder.municipalityExample': 'F.eks. Voss',
    'sell.placeholder.capacityExample': 'F.eks. 2,5',
    'sell.placeholder.productionExample': 'F.eks. 12,5',
    
    // More opportunities modal
    'more.title': 'Registrer for mer informasjon',
    'more.subtitle': 'Be om ytterligere vannkraftinvesteringsmuligheter',
    'more.budgetRange.0.5m': '0,5 MNOK - 1 MNOK',
    'more.budgetRange.1m': '1 MNOK - 2,5 MNOK',
    'more.budgetRange.2.5m': '2,5 MNOK - 5 MNOK',
    'more.budgetRange.5m': '5 MNOK - 10 MNOK',
    'more.budgetRange.10m': '10 MNOK+',
    
    // Toast messages
    'toast.missingInfo': 'Manglende Informasjon',
    'toast.missingInfoDesc': 'Vennligst fyll ut alle obligatoriske felt.',
    'toast.missingInfoConsent': 'Vennligst fyll ut alle obligatoriske felt og godta vilkårene.',
    'toast.registrationError': 'Registreringsfeil',
    'toast.registrationErrorDesc': 'Det oppstod et problem med å sende registreringen din. Vennligst prøv igjen.',
    'toast.registrationSuccess': 'Registrering Vellykket!',
    'toast.registrationSuccessDesc': 'Takk for din interesse i {plantName}. Vi vil ta kontakt snart med mer informasjon.',
    'toast.submissionError': 'Innsendingsfeil',
    'toast.submissionErrorDesc': 'Det oppstod et problem med å sende forespørselen din. Vennligst prøv igjen.',
    'toast.evaluationSuccess': 'Evalueringsforespørsel Sendt!',
    'toast.evaluationSuccessDesc': 'Takk for din innsendelse. Vi vil kontakte deg innen 24 timer med en gratis evaluering av kraftverket ditt.',
    'toast.requestSuccess': 'Din forespørsel er sendt! Vi tar kontakt snart.',
    'toast.requestError': 'Kunne ikke sende forespørsel. Vennligst prøv igjen.',
    
    // Language toggle
    'language.norwegian': 'Norsk',
    'language.english': 'English',
  }
};