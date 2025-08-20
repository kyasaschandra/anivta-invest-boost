-- Add phone number column to investment_enquiries table
ALTER TABLE public.investment_enquiries 
ADD COLUMN phone_number TEXT;