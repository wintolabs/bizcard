// src/components/UnifiedProfileCard.tsx - Production Ready

import type { User } from "@/lib/db";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ContactSaveButton from "./ContactSaveButton";

interface Props {
  user: User;
  onPrimaryHref?: string;
}

export default function UnifiedProfileCard({ user }: Props) {
  return (
    <div className="rounded-t-[2rem] bg-white/95 backdrop-blur-xl shadow-[0_-20px_80px_rgba(0,0,0,0.15)] border-t border-white/50 ring-1 ring-black/5 relative overflow-hidden">
      {/* Enhanced Drag Handle with subtle glow */}
      <div className="flex justify-center py-4">
        <div className="w-12 h-1 bg-gradient-to-r from-zinc-300 to-zinc-400 rounded-full shadow-sm" />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-transparent to-zinc-900"></div>
      </div>

      <div className="relative px-6 py-4">
        {/* Profile Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-balance line-clamp-2 text-3xl font-black leading-tight tracking-[-0.03em] bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                {user.name}
              </h1>
              <RiVerifiedBadgeFill className="h-6 w-6 text-blue-500 animate-pulse drop-shadow-sm" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-bold text-zinc-800">{user.title}</p>
              <p className="text-sm font-medium text-zinc-600">
                at {user.company}
              </p>
              {user.department && (
                <p className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                  {user.department}
                </p>
              )}
            </div>
          </div>

          {user.companyLogo && (
            <div className="shrink-0">
              <div className="h-16 w-32 rounded-2xl bg-gradient-to-br from-white to-zinc-50 shadow-xl ring-2 ring-white/50 flex items-center justify-center p-3 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-2xl"></div>
                <Image
                  src={user.companyLogo}
                  alt={user.company ?? "Company"}
                  width={110}
                  height={40}
                  className="h-full w-full object-contain relative z-10"
                  sizes="110px"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Primary Action Button */}
        <div className="mt-8">
          <ContactSaveButton
            user={user}
            style={{
              background: `linear-gradient(135deg, ${
                user.accentHex || "#C73E3A"
              } 0%, ${user.accentHex || "#C73E3A"}dd 100%)`,
              boxShadow: `0 20px 50px ${user.accentHex || "#C73E3A"}30`,
            }}
            className="group w-full rounded-3xl px-8 h-16 flex items-center justify-center text-lg font-black text-white outline-none ring-offset-2 focus:ring-4 active:scale-[0.96] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden"
          />
        </div>

        {/* Location */}
        <div className="mt-6">
          {(user.location || user.officeAddress) && (
            <div className="rounded-xl bg-gradient-to-r from-zinc-50 to-zinc-100/50 p-4 border border-zinc-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-zinc-600 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  {user.location && (
                    <p className="text-sm font-bold text-zinc-800">
                      {user.location}
                    </p>
                  )}
                  {user.officeAddress && (
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {user.officeAddress}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Contact Methods Grid */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          {user.mobile && (
            <a
              href={`tel:${user.mobile}`}
              className="group relative overflow-hidden inline-flex h-16 items-center justify-center gap-3 rounded-2xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-white px-4 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 to-blue-100/60 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-2 rounded-full bg-blue-100/50 group-hover:bg-blue-200/80 transition-colors duration-300">
                <FiPhone className="h-5 w-5 text-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </div>
              <span className="relative z-10 group-hover:text-blue-800 transition-colors duration-300">
                Call
              </span>
            </a>
          )}

          {user.whatsapp && (
            <a
              href={`https://wa.me/${user.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex h-16 items-center justify-center gap-3 rounded-2xl border-2 border-green-200/50 bg-gradient-to-br from-green-50/50 to-white px-4 text-sm font-bold text-green-700 shadow-lg transition-all duration-300 hover:border-green-400 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/0 to-green-100/60 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-2 rounded-full bg-green-100/50 group-hover:bg-green-200/80 transition-colors duration-300">
                <BsWhatsapp className="h-5 w-5 text-green-600 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
              </div>
              <span className="relative z-10 group-hover:text-green-800 transition-colors duration-300">
                WhatsApp
              </span>
            </a>
          )}

          {user.email && (
            <a
              href={`mailto:${user.email}`}
              className="group relative overflow-hidden inline-flex h-16 items-center justify-center gap-3 rounded-2xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-white px-4 text-sm font-bold text-purple-700 shadow-lg transition-all duration-300 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/0 to-purple-100/60 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-2 rounded-full bg-purple-100/50 group-hover:bg-purple-200/80 transition-colors duration-300">
                <FiMail className="h-5 w-5 text-purple-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              </div>
              <span className="relative z-10 group-hover:text-purple-800 transition-colors duration-300">
                Email
              </span>
            </a>
          )}

          {/* Conditional LinkedIn or Instagram */}
          {user.linkedIn ? (
            <a
              href={user.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex h-16 items-center justify-center gap-3 rounded-2xl border-2 border-indigo-200/50 bg-gradient-to-br from-indigo-50/50 to-white px-4 text-sm font-bold text-indigo-700 shadow-lg transition-all duration-300 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/0 to-indigo-100/60 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-2 rounded-full bg-indigo-100/50 group-hover:bg-indigo-200/80 transition-colors duration-300">
                <FiLinkedin className="h-5 w-5 text-indigo-600 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
              </div>
              <span className="relative z-10 group-hover:text-indigo-800 transition-colors duration-300">
                LinkedIn
              </span>
            </a>
          ) : user.instagram ? (
            <a
              href={`https://instagram.com/${user.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex h-16 items-center justify-center gap-3 rounded-2xl border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/50 to-white px-4 text-sm font-bold text-pink-700 shadow-lg transition-all duration-300 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/20 hover:-translate-y-2 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100/0 to-pink-100/60 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10 p-2 rounded-full bg-pink-100/50 group-hover:bg-pink-200/80 transition-colors duration-300">
                <BsInstagram className="h-5 w-5 text-pink-600 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300" />
              </div>
              <span className="relative z-10 group-hover:text-pink-800 transition-colors duration-300">
                Instagram
              </span>
            </a>
          ) : null}
        </div>

        {/* Bio Section */}
        {user.bio && (
          <div className="mt-8 pt-8 border-t border-gradient-to-r from-transparent via-zinc-200 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 rounded bg-gradient-to-r from-zinc-400 to-transparent"></div>
              <h2 className="text-xs font-black uppercase tracking-wider text-zinc-500">
                About
              </h2>
            </div>
            <p className="text-base leading-7 text-zinc-700 font-medium">
              {user.bio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
