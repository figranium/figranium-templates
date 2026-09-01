import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getCurrentUser } from "@/lib/current-user";

export async function PUT(request: Request) {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const { displayName, profilePicture } = body;

        // Update user profile in database
        await query(
            `UPDATE users 
             SET display_name = $1, profile_picture = $2, updated_at = CURRENT_TIMESTAMP 
             WHERE id = $3`,
            [displayName || null, profilePicture || null, user.id]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error updating profile:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
