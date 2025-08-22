//src/app/api/vcard/[handle]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getUserByHandle } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  const { handle } = await params;
  const user = await getUserByHandle(handle.toLowerCase());

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  const vCard = `BEGIN:VCARD
                VERSION:3.0
                FN:${user.name}
                ORG:${user.company}
                TITLE:${user.title}
                TEL:${user.phone || ""}
                EMAIL:${user.email || ""}
                URL:${user.website || ""}
                ADR:;;${user.officeAddress || ""};;;;
                NOTE:${user.bio || ""}
                END:VCARD`;

  return new NextResponse(vCard, {
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": `attachment; filename="${user.name.replace(
        /\s+/g,
        "_"
      )}.vcf"`,
    },
  });
}
