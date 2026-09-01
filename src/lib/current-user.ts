import { auth } from '@/lib/neon-auth';
import { query } from '@/lib/db';

export type AppUser = {
    id: string;
    username: string | null;
    email: string;
    role: string | null;
    displayName: string | null;
    profilePicture: string | null;
    neonAuthUserId: string;
};

function isMissingMappingColumn(error: unknown) {
    return typeof error === 'object'
        && error !== null
        && 'code' in error
        && error.code === '42703';
}

export async function getCurrentUser(): Promise<AppUser | null> {
    const { data, error } = await auth.getSession();
    if (error || !data?.user?.id) return null;

    let rows;
    try {
        ({ rows } = await query(
            `SELECT id, username, email, role, display_name, profile_picture, neon_auth_user_id
             FROM users WHERE neon_auth_user_id = $1`,
            [data.user.id],
        ));
    } catch (queryError) {
        // The test branch may be running the application ahead of its additive
        // public.users mapping migration. Do not turn a missing profile column
        // into an application-wide render failure.
        if (isMissingMappingColumn(queryError)) return null;
        throw queryError;
    }
    const profile = rows[0];
    if (!profile) return null;

    return {
        id: profile.id,
        username: profile.username,
        email: profile.email,
        role: profile.role,
        displayName: profile.display_name,
        profilePicture: profile.profile_picture,
        neonAuthUserId: profile.neon_auth_user_id,
    };
}

export async function getAuthSession() {
    const { data, error } = await auth.getSession();
    return error ? null : data;
}

export async function requireCurrentUser(): Promise<AppUser> {
    const user = await getCurrentUser();
    if (!user) throw new Error('UNAUTHORIZED');
    return user;
}

export async function requireAdmin(): Promise<AppUser> {
    const user = await requireCurrentUser();
    if (user.role !== 'admin') throw new Error('FORBIDDEN');
    return user;
}
