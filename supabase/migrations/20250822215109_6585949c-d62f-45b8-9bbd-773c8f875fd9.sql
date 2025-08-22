-- Enable RLS on public tables that are exposed to PostgREST but missing RLS
-- Target: public.kraftverk_bilder

-- Enable RLS (idempotent)
ALTER TABLE public.kraftverk_bilder ENABLE ROW LEVEL SECURITY;

-- Clean up any existing overly-permissive or duplicate policies
DROP POLICY IF EXISTS "Public can read kraftverk_bilder" ON public.kraftverk_bilder;
DROP POLICY IF EXISTS "Enable read for all (bilder)" ON public.kraftverk_bilder;
DROP POLICY IF EXISTS "Anyone can view images" ON public.kraftverk_bilder;
DROP POLICY IF EXISTS "Service role can manage images" ON public.kraftverk_bilder;

-- Maintain current public read behavior but under RLS control
CREATE POLICY "Anyone can view images"
ON public.kraftverk_bilder
FOR SELECT
TO anon, authenticated
USING (true);

-- Explicitly allow service role to manage (service_role bypasses RLS but explicit policy is fine)
CREATE POLICY "Service role can manage images"
ON public.kraftverk_bilder
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
