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
  const url = `/functions/v1/nve-search?navn=${encodeURIComponent(query)}${
    kommune ? `&kommune=${encodeURIComponent(kommune)}` : ""
  }`;

  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (res.ok) {
      const data = await res.json();
      return data.kraftverk ?? [];
    }

    // If the edge function is not available (404) or other failure, fall back to direct NVE API
    console.warn("nve-search edge function unavailable, falling back to direct NVE API", res.status);
  } catch (e) {
    console.warn("nve-search edge function fetch failed, falling back to direct NVE API", e);
  }

  try {
    const resp = await fetch("https://api.nve.no/web/Powerplant/GetHydroPowerPlantsInOperation", {
      headers: { Accept: "application/json" },
    });
    if (!resp.ok) return [];
    const data: NVEKraftverk[] = await resp.json();
    const navnLc = query.toLowerCase();
    const kommuneLc = kommune?.toLowerCase();
    return (Array.isArray(data) ? data : [])
      .filter((k) => (k.Navn || "").toLowerCase().includes(navnLc))
      .filter((k) => (!kommuneLc ? true : (k.Kommune || "").toLowerCase().includes(kommuneLc!)))
      .slice(0, 20);
  } catch (e) {
    console.error("Direct NVE API fallback failed", e);
    return [];
  }
}

