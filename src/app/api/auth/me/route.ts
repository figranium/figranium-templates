import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { query } from "@/lib/db";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const payload = await verifyToken(token);

    if (!payload?.username) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    // Fetch user profile data from database
    const { rows } = await query(
        'SELECT display_name, profile_picture FROM users WHERE username = $1',
        [payload.username]
    );

    const userProfile = rows.length > 0 ? rows[0] : {};

    return NextResponse.json({
        authenticated: true,
        username: payload.username,
        displayName: userProfile.display_name || null,
        profilePicture: userProfile.profile_picture || null
    });
}
