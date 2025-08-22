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

  // Enhanced vCard with better iOS compatibility
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${user.name}
N:${user.name.split(" ").reverse().join(";")}
ORG:${user.company || ""}
TITLE:${user.title || ""}
TEL;TYPE=WORK,VOICE:${user.phone || ""}
EMAIL;TYPE=WORK:${user.email || ""}
URL:${user.website || ""}
ADR;TYPE=WORK:;;${user.officeAddress || ""};;;;
NOTE:${user.bio || ""}
END:VCARD`;

  return new NextResponse(vCard, {
    headers: {
      // Critical: Use correct MIME type for iOS
      "Content-Type": "text/vcard; charset=utf-8",
      // Use inline to encourage browser to open rather than download
      "Content-Disposition": `inline; filename="${user.name.replace(
        /\s+/g,
        "_"
      )}.vcf"`,
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
