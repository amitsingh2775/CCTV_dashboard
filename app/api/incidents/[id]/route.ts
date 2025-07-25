import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function PATCH(
    req:Request,
    {params}:{ params: { id: string } }
) {
    const { id } = params;

    try {

         const existing =await prisma.incident.findUnique({
            where: {id:id}
         })
         if(!existing){
            return NextResponse.json({ error: "Incident not found" }, { status: 404 });
         }
        const updated=await prisma.incident.update({
            where:{id:id},
            data:{resolved:!existing.resolved}
        })
       return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update incident" });
    }
}