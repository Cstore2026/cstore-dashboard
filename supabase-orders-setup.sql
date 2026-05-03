-- C Store Delivery Dashboard - Orders table setup
-- Run this in Supabase SQL Editor.
-- This will recreate the orders table so the dashboard writes each order as a row.

drop table if exists public.orders cascade;

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

alter table public.orders enable row level security;

drop policy if exists "allow anon read orders" on public.orders;
drop policy if exists "allow anon insert orders" on public.orders;
drop policy if exists "allow anon update orders" on public.orders;
drop policy if exists "allow anon delete orders" on public.orders;

create policy "allow anon read orders"
on public.orders
for select
to anon
using (true);

create policy "allow anon insert orders"
on public.orders
for insert
to anon
with check (true);

create policy "allow anon update orders"
on public.orders
for update
to anon
using (true)
with check (true);

create policy "allow anon delete orders"
on public.orders
for delete
to anon
using (true);
