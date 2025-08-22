// src/app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-md bg-white min-h-screen">
        <main className="flex min-h-screen flex-col items-start justify-center gap-4 p-6">
          <h1 className="text-2xl font-semibold">
            Winto Labs · Digital Business Cards
          </h1>
          <p className="text-zinc-600">
            This domain hosts personalized profiles that open from NFC taps and
            QR scans.
          </p>
          <ul className="mt-2 list-disc pl-5 text-zinc-700">
            <li>
              Each profile lives at{" "}
              <code className="rounded bg-zinc-100 px-1">
                /&#123;handle&#125;
              </code>
            </li>
            <li>
              Example:{" "}
              <Link
                href="/amitdube"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                View Profile
              </Link>
            </li>
          </ul>
          <div className="mt-6 text-sm text-zinc-500">
            Admin-only—no public signup on this subdomain.
          </div>
        </main>
      </div>
    </div>
  );
}
