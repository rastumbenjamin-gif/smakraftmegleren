// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let navn = "";
    let kommune = "";

    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      navn = (body?.navn || "").toLowerCase();
      kommune = (body?.kommune || "").toLowerCase();
    } else {
      const url = new URL(req.url);
      navn = (url.searchParams.get("navn") || "").toLowerCase();
      kommune = (url.searchParams.get("kommune") || "").toLowerCase();
    }

    if (!navn) {
      return new Response(JSON.stringify({ error: "navn is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
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
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
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

    return new Response(JSON.stringify({ kraftverk: results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("nve-search edge error", e);
    return new Response(JSON.stringify({ error: "internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});