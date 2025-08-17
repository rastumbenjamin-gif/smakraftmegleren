// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    const url = new URL(req.url);
    const navn = (url.searchParams.get("navn") || "").toLowerCase();
    const kommune = (url.searchParams.get("kommune") || "").toLowerCase();

    if (!navn) {
      return new Response(JSON.stringify({ error: "navn is required" }), {
        status: 400,
        headers,
      });
    }

    const baseUrl = "https://api.nve.no/web/Powerplant";
    const resp = await fetch(`${baseUrl}/GetHydroPowerPlantsInOperation`, {
      headers: {
        Accept: "application/json",
        "User-Agent": "HydroNorge/1.0",
      },
    });

    if (!resp.ok) {
      return new Response(
        JSON.stringify({ error: `NVE error ${resp.status} ${resp.statusText}` }),
        { status: 502, headers }
      );
    }

    const data: any[] = await resp.json();
    const list = Array.isArray(data) ? data : [];

    const results = list
      .filter((k: any) =>
        (k.Navn || "").toLowerCase().includes(navn) &&
        (!kommune || (k.Kommune || "").toLowerCase().includes(kommune))
      )
      .slice(0, 20);

    return new Response(JSON.stringify({ kraftverk: results }), { headers });
  } catch (e) {
    console.error("nve-search edge error", e);
    return new Response(JSON.stringify({ error: "internal error" }), {
      status: 500,
      headers,
    });
  }
});
