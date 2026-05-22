/*
  # Create sales_assistant_leads table

  ## Purpose
  Stores leads captured by the VendaFlow AI sales assistant on the landing page.
  Each row represents a visitor who showed interest and provided basic contact info.

  ## New Tables

  ### public.sales_assistant_leads
  - `id` (uuid, PK) — unique identifier
  - `created_at` (timestamptz) — when the lead was captured
  - `name` (text) — visitor's name, optional
  - `business_type` (text) — type of business (açaiteria, pizzaria, etc.), optional
  - `city` (text) — city, optional
  - `whatsapp` (text) — WhatsApp number, optional
  - `conversation_summary` (text) — short summary of the conversation
  - `source` (text) — always 'landing_sales_assistant'
  - `interest_level` (text) — 'low' | 'medium' | 'high'

  ## Security
  - RLS enabled
  - INSERT allowed for anonymous users (public landing page, no auth)
  - SELECT/UPDATE/DELETE restricted to service role only (no public read)

  ## Notes
  - No auth required — visitors are anonymous
  - INSERT policy allows anon to submit leads
  - Data is read-only from the application side; admin access via service role
*/

CREATE TABLE IF NOT EXISTS public.sales_assistant_leads (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at       timestamptz NOT NULL    DEFAULT now(),
  name             text        NOT NULL    DEFAULT '',
  business_type    text        NOT NULL    DEFAULT '',
  city             text        NOT NULL    DEFAULT '',
  whatsapp         text        NOT NULL    DEFAULT '',
  conversation_summary text    NOT NULL    DEFAULT '',
  source           text        NOT NULL    DEFAULT 'landing_sales_assistant',
  interest_level   text        NOT NULL    DEFAULT 'low'
);

ALTER TABLE public.sales_assistant_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon users can insert leads"
  ON public.sales_assistant_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_leads_created_at    ON public.sales_assistant_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_interest_level ON public.sales_assistant_leads (interest_level);
