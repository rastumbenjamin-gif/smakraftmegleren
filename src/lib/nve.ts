import { supabase } from "@/integrations/supabase/client";
export interface NVEKraftverk {
  VannKraftverkID: number;
  Navn: string;
  VannKVType: string;
  VannKVTypeID: string;
  HovedEier: string;
  HovedEier_OrgNr: number;
  Fylke: string;
  FylkesNr: number;
  Kommune: string;
  ForsteUtnyttelseAvFalletDato: number;
  DatoForEldsteKraftproduserendeDel: number;
  MaksYtelse: number; // MW
  MidProd_91_20: number; // GWh/år
  BruttoFallhoyde_M: number;
  Slukeevne: number; // m³/s
  EnEkv: number;
  ElspotomraadeNummer: number;
  RegineNr: string;
  ErIDrift: boolean;
  IDriftDato: string;
  Konsesjoner: Array<{
    KdbID: number;
    Tittel: string;
  }>;
  Kraftverkstatus: string;
  NVEOmraadeID: number | null;
  NVEOmraadeNavn: string | null;
  Nedborsfeltnavn: string;
  SPPunkt: string;
  SPSone: string;
  UnderBygging: boolean;
  UteAvDrift: boolean | null;
  VassdragsOmraadeID: number;
  VassdragsOmraadeNavn: string;
}

export async function searchKraftverkByName(query: string, kommune?: string): Promise<NVEKraftverk[]> {
  if (!query?.trim()) return [];

  try {
    console.log(`Searching NVE via Edge Function for: "${query}"${kommune ? ` in ${kommune}` : ''}`);
    const { data, error } = await supabase.functions.invoke("nve-search", {
      body: { navn: query, kommune },
    });

    if (error) {
      console.error("Edge function nve-search error:", error);
      return [];
    }

    const list = (data?.kraftverk ?? []) as NVEKraftverk[];
    console.log(`Edge function returned ${list.length} results`);
    return list.slice(0, 20);
  } catch (error) {
    console.error("NVE Edge function search failed:", error);
    return [];
  }
}


