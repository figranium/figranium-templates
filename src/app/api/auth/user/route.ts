import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const username = searchParams.get("username");

        if (!username) {
            return NextResponse.json({ error: "Username required" }, { status: 400 });
        }

        // Fetch user profile data from database
        const { rows } = await query(
            'SELECT display_name, profile_picture FROM users WHERE username = $1',
            [username]
        );

        if (rows.length === 0) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const userProfile = rows[0];

        return NextResponse.json({
            displayName: userProfile.display_name || null,
            profilePicture: userProfile.profile_picture || null,
            role: userProfile.role || 'user',
        });
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}