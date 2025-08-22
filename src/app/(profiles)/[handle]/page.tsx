// src/app/(profiles)/[handle]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { User } from "lucide-react";
import { getUserByHandle } from "@/lib/db";

import UnifiedProfileCard from "@/components/UnifiedProfileCard";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const normalized = handle.toLowerCase();
  const user = await getUserByHandle(normalized);
  if (!user) return notFound();

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-md bg-white min-h-screen relative">
        {/* Photo section */}
        <div className="relative w-full">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-white shadow-lg">
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt={user.name}
                fill
                priority
                sizes="400px"
                className="object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center text-zinc-400">
                  <User className="mx-auto h-16 w-16 mb-2" />
                  <p className="text-sm">No photo</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ONE unified card with everything */}
        <div className="-mt-40 relative z-10">
          <UnifiedProfileCard
            user={user}
            onPrimaryHref={`/api/vcard/${user.handle}`}
          />
        </div>
      </div>
    </div>
  );
}
