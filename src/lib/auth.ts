/**
 * Legacy-only helpers. The Neon Auth test branch does not call these helpers or
 * issue this application's token cookie. They remain for the opt-in emergency
 * login route used by an existing deployment before password migration is solved.
 */
import { compare } from 'bcrypt';
import { SignJWT } from 'jose';

export async function verifyLegacyPassword(password: string, passwordHash: string): Promise<boolean> {
    return compare(password, passwordHash);
}

export async function signLegacyToken(payload: Record<string, unknown>): Promise<string> {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is required for the opt-in legacy login path.');
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(new TextEncoder().encode(secret));
}
