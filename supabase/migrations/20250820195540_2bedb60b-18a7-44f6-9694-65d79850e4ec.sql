-- Create investment_enquiries table
CREATE TABLE public.investment_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  investment_interest TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.investment_enquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access (adjust based on your needs)
CREATE POLICY "Allow read access for authenticated users" 
ON public.investment_enquiries 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Allow insert for anyone" 
ON public.investment_enquiries 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_investment_enquiries_updated_at
BEFORE UPDATE ON public.investment_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();