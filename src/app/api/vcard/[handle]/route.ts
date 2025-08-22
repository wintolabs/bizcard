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

  // Build vCard fields array to avoid empty lines
  const vCardFields = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${user.name}`,
    `N:${user.name.split(" ").reverse().join(";")}`,
  ];

  // Add optional fields only if they exist
  if (user.company) {
    vCardFields.push(`ORG:${user.company}`);
  }

  if (user.title) {
    vCardFields.push(`TITLE:${user.title}`);
  }

  // Add phone numbers with proper formatting
  if (user.phone) {
    vCardFields.push(`TEL;TYPE=WORK,VOICE:${user.phone}`);
  }

  if (user.mobile) {
    vCardFields.push(`TEL;TYPE=CELL,VOICE:${user.mobile}`);
  }

  // Add other contact fields
  if (user.email) {
    vCardFields.push(`EMAIL;TYPE=WORK:${user.email}`);
  }

  if (user.website) {
    vCardFields.push(`URL:${user.website}`);
  }

  if (user.officeAddress) {
    vCardFields.push(`ADR;TYPE=WORK:;;${user.officeAddress};;;;`);
  }

  if (user.bio) {
    vCardFields.push(`NOTE:${user.bio}`);
  }

  vCardFields.push("END:VCARD");

  // Join with proper line endings
  const vCard = vCardFields.join("\r\n");

  return new NextResponse(vCard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
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
