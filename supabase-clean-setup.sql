-- C Store Delivery Dashboard - Clean Supabase setup
-- Run this in Supabase SQL Editor in the NEW project.

drop table if exists public.app_state cascade;

create table public.app_state (
  id integer primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

create policy "allow anon read app state"
on public.app_state
for select
to anon
using (true);

create policy "allow anon insert app state"
on public.app_state
for insert
to anon
with check (true);

create policy "allow anon update app state"
on public.app_state
for update
to anon
using (true)
with check (true);
