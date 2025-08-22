// src/components/ProfileFloatingCard.tsx
import Image from "next/image";
import type { User } from "@/lib/db";
import { MapPin, Download, ArrowUpRight } from "lucide-react";

type Props = {
  user: User;
  onPrimaryHref?: string;
  onSecondaryHref?: string;
};

export default function ProfileFloatingCard({
  user,
  onPrimaryHref = "#",
  onSecondaryHref = "#",
}: Props) {
  return (
    <div className="rounded-t-3xl bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-zinc-200/50">
      <div className="p-6">
        {/* Header info */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-balance line-clamp-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-zinc-900">
              {user.name}
            </h1>
            <div className="mt-2 space-y-1">
              <p className="text-base font-medium text-zinc-700">
                {user.title}
              </p>
              {user.company && (
                <p className="text-sm text-zinc-600">at {user.company}</p>
              )}
            </div>
          </div>

          {user.companyLogo && (
            <div className="shrink-0">
              <div className="h-14 w-14 rounded-2xl bg-zinc-50 shadow-sm ring-1 ring-black/5 flex items-center justify-center p-2">
                <Image
                  src={user.companyLogo}
                  alt={user.company ?? "Company"}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                  sizes="40px"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Location */}
        {user.location && (
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-600 ring-1 ring-zinc-200/50">
              <MapPin className="h-3.5 w-3.5" />
              {user.location}
            </span>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 mt-6">
          <a
            href={onSecondaryHref}
            className="flex-1 rounded-2xl border border-zinc-200 bg-white px-6 h-12 flex items-center justify-center text-sm font-medium text-zinc-700 outline-none ring-offset-2 focus:ring-2 active:scale-[0.98] transition-all duration-200 shadow-sm hover:border-zinc-300 hover:shadow-md"
          >
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Exchange contact
          </a>

          <a
            href={onPrimaryHref}
            style={{
              backgroundColor: user.accentHex || "#0B63F6",
              boxShadow: `0 8px 25px ${user.accentHex || "#0B63F6"}20`,
            }}
            className="flex-1 rounded-2xl px-6 h-12 flex items-center justify-center text-sm font-semibold text-white outline-none ring-offset-2 focus:ring-2 active:scale-[0.98] transition-all duration-200 shadow-lg hover:brightness-110"
          >
            <Download className="h-4 w-4 mr-2" />
            Save contact
          </a>
        </div>
      </div>
    </div>
  );
}
