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

  // Always use direct NVE API for better reliability
  try {
    console.log(`Searching NVE API for: "${query}"${kommune ? ` in ${kommune}` : ''}`);
    
    const resp = await fetch("https://api.nve.no/web/Powerplant/GetHydroPowerPlantsInOperation", {
      headers: { 
        Accept: "application/json",
        "User-Agent": "HydroNorge/1.0"
      },
    });
    
    if (!resp.ok) {
      console.error(`NVE API error: ${resp.status} ${resp.statusText}`);
      return [];
    }

    const data: NVEKraftverk[] = await resp.json();
    
    if (!Array.isArray(data)) {
      console.error("NVE API returned non-array data:", typeof data);
      return [];
    }

    console.log(`NVE API returned ${data.length} total kraftverk`);

    const navnLc = query.toLowerCase().trim();
    const kommuneLc = kommune?.toLowerCase().trim();
    
    const filtered = data
      .filter((k) => {
        if (!k?.Navn) return false;
        const kraftverkNavn = k.Navn.toLowerCase();
        return kraftverkNavn.includes(navnLc);
      })
      .filter((k) => {
        if (!kommuneLc) return true;
        if (!k?.Kommune) return false;
        const kraftverkKommune = k.Kommune.toLowerCase();
        return kraftverkKommune.includes(kommuneLc);
      })
      .slice(0, 20);

    console.log(`Filtered to ${filtered.length} kraftverk matching "${query}"`);
    return filtered;
    
  } catch (error) {
    console.error("NVE API search failed:", error);
    return [];
  }
}

