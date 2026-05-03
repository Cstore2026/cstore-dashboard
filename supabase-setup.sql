-- C Store Delivery Dashboard - Supabase setup
-- Run this in Supabase SQL Editor

create table if not exists public.app_state (
  id integer primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

drop policy if exists "allow public read app state" on public.app_state;
drop policy if exists "allow public insert app state" on public.app_state;
drop policy if exists "allow public update app state" on public.app_state;

create policy "allow public read app state"
on public.app_state
for select
to anon
using (true);

create policy "allow public insert app state"
on public.app_state
for insert
to anon
with check (true);

create policy "allow public update app state"
on public.app_state
for update
to anon
using (true)
with check (true);
