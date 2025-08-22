// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Winto Labs · Digital Business Card",
  description: "Personalized profiles accessible via QR and NFC.",
  metadataBase: new URL("https://bizcard.wintolabs.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx(
          "min-h-[100svh] bg-white antialiased",
          poppins.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
