-- Add separate country code column to investment_enquiries table
ALTER TABLE public.investment_enquiries 
ADD COLUMN country_code TEXT;

-- Update the phone_number column to be just the number without country code
COMMENT ON COLUMN public.investment_enquiries.phone_number IS 'Phone number without country code';
COMMENT ON COLUMN public.investment_enquiries.country_code IS 'Country code (e.g., +1, +44, +91)';