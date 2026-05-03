-- C Store Delivery Dashboard - Full Database Tables Setup
-- Run this in Supabase SQL Editor.
-- This keeps app_state for live app sync and also creates structured tables for every section.

drop table if exists public.orders cascade;
drop table if exists public.app_users cascade;
drop table if exists public.branches cascade;
drop table if exists public.cc_staff cascade;
drop table if exists public.preparers cascade;
drop table if exists public.point_settings cascade;

create table if not exists public.app_state (
  id integer primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.app_users (
  username text primary key,
  password text,
  role text,
  name text,
  branch text,
  manual_points numeric default 0,
  raw_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.branches (
  branch_key text primary key,
  name_ar text,
  name_en text,
  raw_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.cc_staff (
  id text primary key,
  staff_type text,
  staff_name text,
  raw_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.preparers (
  id text primary key,
  branch text,
  preparer_name text,
  raw_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.point_settings (
  id integer primary key,
  fast_minutes numeric default 0,
  fast_points numeric default 0,
  normal_minutes numeric default 0,
  normal_points numeric default 0,
  raw_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.orders (
  order_no text primary key,
  total numeric default 0,
  branch text,
  status text,
  cc_type text,
  cc_staff text,
  note text,
  prep_by text,
  prep_note text,
  rider text,
  created_at_ms bigint,
  prep_start_ms bigint,
  prep_done_ms bigint,
  assigned_at_ms bigint,
  picked_at_ms bigint,
  delivered_at_ms bigint,
  cancelled_at_ms bigint,
  raw_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;
alter table public.app_users enable row level security;
alter table public.branches enable row level security;
alter table public.cc_staff enable row level security;
alter table public.preparers enable row level security;
alter table public.point_settings enable row level security;
alter table public.orders enable row level security;

create policy "allow anon all app_state" on public.app_state for all to anon using (true) with check (true);
create policy "allow anon all app_users" on public.app_users for all to anon using (true) with check (true);
create policy "allow anon all branches" on public.branches for all to anon using (true) with check (true);
create policy "allow anon all cc_staff" on public.cc_staff for all to anon using (true) with check (true);
create policy "allow anon all preparers" on public.preparers for all to anon using (true) with check (true);
create policy "allow anon all point_settings" on public.point_settings for all to anon using (true) with check (true);
create policy "allow anon all orders" on public.orders for all to anon using (true) with check (true);
