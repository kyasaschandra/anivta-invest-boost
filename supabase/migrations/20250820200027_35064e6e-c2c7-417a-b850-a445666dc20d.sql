-- Fix security issue: Remove overly permissive read access to investment_enquiries
DROP POLICY IF EXISTS "Allow read access for authenticated users" ON public.investment_enquiries;

-- Create a more restrictive policy - only allow service role or specific admin users
-- For now, removing general authenticated access entirely
-- You can add admin-specific policies later when you implement user roles

-- Keep the insert policy for public form submissions
-- This allows the contact form to work while protecting customer data