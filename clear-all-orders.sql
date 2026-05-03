-- Clear all current orders and keep users/branches/settings.
-- Run this in Supabase SQL Editor while all dashboard tabs are closed.

delete from public.orders;

update public.app_state
set
  data = jsonb_set(data, '{orders}', '[]'::jsonb, true),
  updated_at = now()
where id = 1;
