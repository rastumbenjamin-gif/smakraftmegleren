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
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.kraftverk ?? [];
}
