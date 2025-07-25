import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const resolvedParam= searchParams.get("resolved");
    const resolved = resolvedParam=== "true";

    try {
        const incidents = await prisma.incident.findMany({
            where: {
                resolved: resolved,
            },
            orderBy: {
                tsStart: "desc",
            },
            include:{camera:true}
        });

        return NextResponse.json(incidents);
    } catch (error) {
        return NextResponse.json({error: "Failed to fetch incidents"});
    }
}