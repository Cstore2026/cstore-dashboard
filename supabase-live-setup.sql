-- C Store Delivery Dashboard - Live Sync setup
-- Run this in Supabase SQL Editor.
-- It keeps the clean app_state table and enables realtime updates.

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

-- Enable Realtime for app_state.
do $$
begin
  begin
    alter publication supabase_realtime add table public.app_state;
  exception
    when duplicate_object then null;
  end;
end $$;
