import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const existing = await prisma.incident.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json({ error: "Incident not found" }, { status: 404 });
    }

    const updated = await prisma.incident.update({
      where: { id },
      data: { resolved: !existing.resolved },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update incident" }, { status: 500 });
  }
}
