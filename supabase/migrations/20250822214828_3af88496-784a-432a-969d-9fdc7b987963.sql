-- Secure sensitive contact fields in kraftverk by enabling RLS and restricting reads to authenticated users only

-- Enable RLS (safe to run if already enabled)
ALTER TABLE public.kraftverk ENABLE ROW LEVEL SECURITY;

-- Clean up any overly-permissive existing policies if they exist
DROP POLICY IF EXISTS "Public can read kraftverk" ON public.kraftverk;
DROP POLICY IF EXISTS "Enable read for all" ON public.kraftverk;

-- Authenticated users can read all rows (contact info included)
CREATE POLICY "Authenticated users can read kraftverk"
ON public.kraftverk
FOR SELECT
TO authenticated
USING (true);

-- Optionally, allow service role to manage data explicitly (service role already bypasses RLS, but this is explicit)
CREATE POLICY "Service role can manage kraftverk"
ON public.kraftverk
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
