import { NextResponse } from "next/server";
import { getAuthSession, getCurrentUser } from "@/lib/current-user";

export async function GET() {
    const session = await getAuthSession();
    if (!session?.user) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    const user = await getCurrentUser();

    return NextResponse.json({
        authenticated: true,
        profileMapped: !!user,
        username: user?.username || null,
        email: session.user.email,
        displayName: user?.displayName || null,
        profilePicture: user?.profilePicture || null,
    });
}
