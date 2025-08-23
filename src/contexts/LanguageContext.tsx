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
    'form.required': '*',
    
    // Registration Modal
    'registration.title': 'Register for more information',
    'registration.subtitle': 'Register your interest for {plantName}',
    'registration.investor_type': 'Investor type',
    'registration.budget_range': 'Budget range',
    'registration.pricing_area': 'Pricing area',
    'registration.production_range': 'Preferred production range',
    'registration.timeframe': 'Sales timeframe',
    'registration.comments': 'Additional comments',
    'registration.comments_placeholder': 'Describe your specific requirements or preferences...',
    'registration.select_investor': 'Select investor type',
    'registration.select_budget': 'Select budget',
    'registration.select_area': 'Select pricing area',
    'registration.select_production': 'Select production range',
    'registration.select_timeframe': 'Select timeframe',
    'registration.register_button': 'Register interest',
    'registration.success_title': 'Registration Successful!',
    'registration.success_message': 'Thank you for your interest in {plantName}. We will be in touch soon with more information.',
    'registration.error_title': 'Registration Error',
    'registration.error_message': 'There was an issue sending your registration. Please try again.',
    'registration.missing_info': 'Missing Information',
    'registration.missing_info_message': 'Please fill in all required fields.',
    
    // Investor types
    'investor.private_person': 'Private person',
    'investor.company': 'Company',
    'investor.investment_fund': 'Investment fund',
    'investor.institutional_investor': 'Institutional investor',
    
    // Budget ranges
    'budget.1_5': '1 MNOK - 5 MNOK',
    'budget.5_10': '5 MNOK - 10 MNOK',
    'budget.10_25': '10 MNOK - 25 MNOK',
    'budget.25_50': '25 MNOK - 50 MNOK',
    'budget.50_plus': 'Over 50 MNOK',
    
    // Pricing areas
    'area.no1': 'NO1 - Eastern Norway',
    'area.no2': 'NO2 - Southern Norway', 
    'area.no3': 'NO3 - Central Norway',
    'area.no4': 'NO4 - Northern Norway',
    'area.no5': 'NO5 - Western Norway',
    
    // Production ranges
    'production.under_3': 'Under 3 GWh',
    'production.3_5': '3-5 GWh',
    'production.6_10': '6-10 GWh',
    'production.11_20': '11-20 GWh',
    'production.over_20': 'Over 20 GWh',
    
    // Timeframes
    'timeframe.immediate': 'Immediate (0-3 months)',
    'timeframe.short_term': 'Short term (3-6 months)',
    'timeframe.medium_term': 'Medium term (6-12 months)',
    'timeframe.long_term': 'Long term (12+ months)',
    'timeframe.exploring': 'Just exploring options',
    
    // More Opportunities Modal
    'more_opportunities.title': 'Register for more information',
    'more_opportunities.subtitle': 'Request additional hydropower investment opportunities',
    
    // Sell Plant Modal
    'sell.title': 'Evaluate Your Hydro Plant',
    'sell.subtitle': 'Get a professional evaluation of your hydropower plant with detailed market analysis',
    'sell.free_evaluation': 'Free',
    'sell.original_price': '10,000 NOK',
    'sell.professional_text': 'Professional evaluation • Market analysis • No obligations',
    'sell.limited_offer': 'Limited time offer',
    'sell.contact_info': 'Contact Information',
    'sell.plant_info': 'Power Plant Information',
    'sell.plant_details': 'Plant Details',
    'sell.plant_name': 'Power plant name',
    'sell.municipality': 'Municipality',
    'sell.county': 'County',
    'sell.capacity': 'Installed capacity',
    'sell.production': 'Annual production (GWh, average last 5 years)',
    'sell.main_reason': 'Main reason for sale',
    'sell.maintenance': 'Who is responsible for regular maintenance of the power plant, including cleaning, oil changes, etc.?',
    'sell.water_rights': 'What are the terms for water rights lease (ground rent for waterfall)?',
    'sell.price_expectation': 'Price expectation (optional)',
    'sell.price_placeholder': 'NOK - what do you think the facility is worth?',
    'sell.municipality_placeholder': 'F.eks. Voss',
    'sell.capacity_placeholder': 'F.eks. 2.5',
    'sell.production_placeholder': 'F.eks. 12.5',
    'sell.select_county': 'Select county',
    'sell.select_reason': 'Select main reason',
    'sell.select_maintenance': 'Select who is responsible',
    'sell.select_water_rights': 'Select type of water rights lease',
    'sell.consent_text': 'I agree to be contacted by Småkraftmegleren regarding my inquiry *',
    'sell.submit_button': 'Get Free Evaluation',
    'sell.success_title': 'Evaluation Request Sent!',
    'sell.success_message': 'Thank you for your submission. We\'ll contact you within 24 hours with a free evaluation of your power plant.',
    'sell.error_title': 'Submission Error',
    'sell.error_message': 'There was an issue sending your request. Please try again.',
    'sell.missing_consent': 'Please fill in all required fields and agree to the terms.',
    
    // Plant advantages
    'advantages.high_winter': 'High winter production (peak prices)',
    'advantages.renovated': 'Recently renovated equipment', 
    'advantages.fresh_consent': 'Fresh consent (December 2024)',
    'advantages.high_production': 'High production, solid revenue',
    'advantages.high_head': 'High head height (132.4m)',
    'advantages.stable_intake': 'Stable water intake (0.88 m³/s)',
    
    // Status badges
    'status.in_operation': 'In Operation',
    'status.consented': 'Consented Project',
    'status.available': 'Available investment',
    
    // Detailed explanations
    'detail.real_ownership': 'Real Asset Ownership:',
    'detail.real_ownership_desc': 'You own actual hydropower plants, not just certificates or promises.',
    'detail.predictable_returns': 'Predictable Returns:',
    'detail.predictable_returns_desc': 'Electricity demand is constant, and Norway has a regulated energy market ensuring stable pricing.',
    'detail.direct_impact': 'Direct Climate Impact:',
    'detail.direct_impact_desc': 'Every kWh produced directly displaces fossil fuel energy and creates measurable CO₂ reduction.',
    'detail.why_superior': 'Why Norwegian Hydro Plants Are Superior:',
    'detail.why_fail': 'Why Carbon Credits Often Fail:',
    'detail.additionality': 'Additionality Problem:',
    'detail.additionality_desc': 'Many projects would have happened anyway, making the "offset" meaningless.',
    'detail.no_permanent': 'No Permanent Impact:',
    'detail.no_permanent_desc': 'Forests can burn down, projects can fail, but you\'ve already paid for the credits.',
    'detail.no_asset_value': 'No Asset Value:',
    'detail.no_asset_value_desc': 'You own nothing tangible - just a digital certificate that can become worthless.',
    'detail.why_disappoint': 'Why ESG Funds Disappoint:',
    'detail.greenwashing_detail': 'Greenwashing:',
    'detail.greenwashing_desc': 'Many "ESG" funds still hold fossil fuel companies, weapons manufacturers, and other questionable investments.',
    'detail.fee_erosion': 'Fee Erosion:',
    'detail.fee_erosion_desc': '1-2% annual fees compound over time, significantly reducing your returns.',
    'detail.diluted_impact': 'Diluted Impact:',
    'detail.diluted_impact_desc': 'Your money is spread across hundreds of companies - minimal influence on any single environmental outcome.',
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
    'form.required': '*',
    
    // Registration Modal
    'registration.title': 'Registrer for mer informasjon',
    'registration.subtitle': 'Registrer din interesse for {plantName}',
    'registration.investor_type': 'Investortype',
    'registration.budget_range': 'Budsjettområde',
    'registration.pricing_area': 'Prisområde',
    'registration.production_range': 'Foretrukket produksjonsområde',
    'registration.timeframe': 'Salgstidsramme',
    'registration.comments': 'Tilleggskommentarer',
    'registration.comments_placeholder': 'Beskriv dine spesifikke krav eller preferanser...',
    'registration.select_investor': 'Velg investortype',
    'registration.select_budget': 'Velg budsjett',
    'registration.select_area': 'Velg prisområde',
    'registration.select_production': 'Velg produksjonsområde',
    'registration.select_timeframe': 'Velg tidsramme',
    'registration.register_button': 'Registrer interesse',
    'registration.success_title': 'Registrering Vellykket!',
    'registration.success_message': 'Takk for din interesse i {plantName}. Vi vil ta kontakt snart med mer informasjon.',
    'registration.error_title': 'Registreringsfeil',
    'registration.error_message': 'Det oppstod et problem med å sende registreringen din. Vennligst prøv igjen.',
    'registration.missing_info': 'Manglende Informasjon',
    'registration.missing_info_message': 'Vennligst fyll ut alle obligatoriske felt.',
    
    // Investor types
    'investor.private_person': 'Privatperson',
    'investor.company': 'Selskap',
    'investor.investment_fund': 'Investeringsfond',
    'investor.institutional_investor': 'Institusjonell investor',
    
    // Budget ranges
    'budget.1_5': '1 MNOK - 5 MNOK',
    'budget.5_10': '5 MNOK - 10 MNOK',
    'budget.10_25': '10 MNOK - 25 MNOK',
    'budget.25_50': '25 MNOK - 50 MNOK',
    'budget.50_plus': 'Over 50 MNOK',
    
    // Pricing areas
    'area.no1': 'NO1 - Østlandet',
    'area.no2': 'NO2 - Sørlandet',
    'area.no3': 'NO3 - Midt-Norge',
    'area.no4': 'NO4 - Nord-Norge',
    'area.no5': 'NO5 - Vestlandet',
    
    // Production ranges
    'production.under_3': 'Under 3 GWh',
    'production.3_5': '3-5 GWh',
    'production.6_10': '6-10 GWh',
    'production.11_20': '11-20 GWh',
    'production.over_20': 'Over 20 GWh',
    
    // Timeframes
    'timeframe.immediate': 'Umiddelbart (0-3 måneder)',
    'timeframe.short_term': 'Kort sikt (3-6 måneder)',
    'timeframe.medium_term': 'Mellomlang sikt (6-12 måneder)',
    'timeframe.long_term': 'Lang sikt (12+ måneder)',
    'timeframe.exploring': 'Bare utforsker alternativer',
    
    // More Opportunities Modal
    'more_opportunities.title': 'Registrer for mer informasjon',
    'more_opportunities.subtitle': 'Be om flere vannkraftinvesteringsmuligheter',
    
    // Sell Plant Modal
    'sell.title': 'Evaluer Ditt Vannkraftverk',
    'sell.subtitle': 'Få en profesjonell evaluering av ditt vannkraftverk med detaljert markedsanalyse',
    'sell.free_evaluation': 'Gratis',
    'sell.original_price': '10 000 NOK',
    'sell.professional_text': 'Profesjonell evaluering • Markedsanalyse • Ingen forpliktelser',
    'sell.limited_offer': 'Begrenset tilbud',
    'sell.contact_info': 'Kontaktinformasjon',
    'sell.plant_info': 'Kraftverksinformasjon',
    'sell.plant_details': 'Kraftverksdetaljer',
    'sell.plant_name': 'Kraftverksnavn',
    'sell.municipality': 'Kommune',
    'sell.county': 'Fylke',
    'sell.capacity': 'Installert effekt',
    'sell.production': 'Årsproduksjon (GWh, gjennomsnitt siste 5 år)',
    'sell.main_reason': 'Hovedgrunn til salg',
    'sell.maintenance': 'Hvem er ansvarlig for regelmessig vedlikehold av kraftverket, inkludert rengjøring, oljeskift, etc.?',
    'sell.water_rights': 'Hva er vilkårene for vannrettsleie (grunnleie for fossen)?',
    'sell.price_expectation': 'Prisforventning (valgfritt)',
    'sell.price_placeholder': 'NOK - hva tror du anlegget er verdt?',
    'sell.municipality_placeholder': 'F.eks. Voss',
    'sell.capacity_placeholder': 'F.eks. 2.5',
    'sell.production_placeholder': 'F.eks. 12.5',
    'sell.select_county': 'Velg fylke',
    'sell.select_reason': 'Velg hovedgrunn',
    'sell.select_maintenance': 'Velg hvem som er ansvarlig',
    'sell.select_water_rights': 'Velg type vannrettsleie',
    'sell.consent_text': 'Jeg samtykker til å bli kontaktet av Småkraftmegleren angående min henvendelse *',
    'sell.submit_button': 'Få Gratis Evaluering',
    'sell.success_title': 'Evalueringsforespørsel Sendt!',
    'sell.success_message': 'Takk for din innsending. Vi kontakter deg innen 24 timer med en gratis evaluering av kraftverket ditt.',
    'sell.error_title': 'Innsendingsfeil',
    'sell.error_message': 'Det oppstod et problem med å sende forespørselen din. Vennligst prøv igjen.',
    'sell.missing_consent': 'Vennligst fyll ut alle obligatoriske felt og godta vilkårene.',
    
    // Plant advantages
    'advantages.high_winter': 'Høy vinterproduksjon (topppriser)',
    'advantages.renovated': 'Nylig renovert utstyr',
    'advantages.fresh_consent': 'Ny konsesjon (desember 2024)',
    'advantages.high_production': 'Høy produksjon, solid inntekt',
    'advantages.high_head': 'Høy fallhøyde (132,4m)',
    'advantages.stable_intake': 'Stabil vanninntak (0,88 m³/s)',
    
    // Status badges
    'status.in_operation': 'I Drift',
    'status.consented': 'Konsesjonert Prosjekt',
    'status.available': 'Tilgjengelig investering',
    
    // Detailed explanations
    'detail.real_ownership': 'Ekte Eiendomsrett:',
    'detail.real_ownership_desc': 'Du eier faktiske vannkraftverk, ikke bare sertifikater eller løfter.',
    'detail.predictable_returns': 'Forutsigbar Avkastning:',
    'detail.predictable_returns_desc': 'Strømetterspørsel er konstant, og Norge har et regulert energimarked som sikrer stabil prising.',
    'detail.direct_impact': 'Direkte Klimapåvirkning:',
    'detail.direct_impact_desc': 'Hver kWh produsert erstatter direkte fossil energi og skaper målbar CO₂-reduksjon.',
    'detail.why_superior': 'Hvorfor Norske Vannkraftverk er Overlegne:',
    'detail.why_fail': 'Hvorfor Karbonkreditter Ofte Feiler:',
    'detail.additionality': 'Additionalitetsproblem:',
    'detail.additionality_desc': 'Mange prosjekter ville ha skjedd uansett, noe som gjør "offsettet" meningsløst.',
    'detail.no_permanent': 'Ingen Permanent Påvirkning:',
    'detail.no_permanent_desc': 'Skoger kan brenne ned, prosjekter kan mislykkes, men du har allerede betalt for kredittene.',
    'detail.no_asset_value': 'Ingen Eiendomsverdi:',
    'detail.no_asset_value_desc': 'Du eier ingenting håndgripelig - bare et digitalt sertifikat som kan bli verdiløst.',
    'detail.why_disappoint': 'Hvorfor ESG-fond Skuffer:',
    'detail.greenwashing_detail': 'Grønnvasking:',
    'detail.greenwashing_desc': 'Mange "ESG" fond holder fortsatt fossile selskaper, våpenprodusenter og andre tvilsomme investeringer.',
    'detail.fee_erosion': 'Gebyrreduksjon:',
    'detail.fee_erosion_desc': '1-2% årlige gebyrer sammensatt over tid reduserer avkastningen din betydelig.',
    'detail.diluted_impact': 'Utvannet Påvirkning:',
    'detail.diluted_impact_desc': 'Pengene dine spres over hundrevis av selskaper - minimal innflytelse på noe enkelt miljøresultat.',
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