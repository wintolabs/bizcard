// src/app/api/vcard/[handle]/route.ts

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

  // Generate vCard with multiple phone numbers
  let vCard = `BEGIN:VCARD
               VERSION:3.0
               FN:${user.name}
               N:${user.name.split(" ").reverse().join(";")}
               ORG:${user.company || ""}
               TITLE:${user.title || ""}`;

  // Add work phone if exists
  if (user.phone) {
    vCard += `\nTEL;TYPE=WORK,VOICE:${user.phone}`;
  }

  // Add mobile phone if exists
  if (user.mobile) {
    vCard += `\nTEL;TYPE=CELL,VOICE:${user.mobile}`;
  }

  vCard += `
            EMAIL;TYPE=WORK:${user.email || ""}
            URL:${user.website || ""}
            ADR;TYPE=WORK:;;${user.officeAddress || ""};;;;
            NOTE:${user.bio || ""}
            END:VCARD`;

  return new NextResponse(vCard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `inline; filename="${user.name.replace(
        /\s+/g,
        "_"
      )}.vcf"`,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
