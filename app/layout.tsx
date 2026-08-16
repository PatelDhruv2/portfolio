import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dhruv Patel | Ops Console Portfolio",
  description:
    "A dark technical portfolio for Dhruv Patel, focused on backend-leaning full-stack systems, realtime infrastructure, and measurable engineering work.",
  metadataBase: new URL("https://example.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
