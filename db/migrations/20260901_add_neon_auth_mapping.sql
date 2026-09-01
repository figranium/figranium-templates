-- Test branch only. Apply explicitly after Neon Auth schema discovery succeeds.
-- Do not add a foreign key to provider-managed neon_auth objects.
ALTER TABLE public.users
    ADD COLUMN IF NOT EXISTS neon_auth_user_id TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS users_neon_auth_user_id_unique
    ON public.users (neon_auth_user_id)
    WHERE neon_auth_user_id IS NOT NULL;
