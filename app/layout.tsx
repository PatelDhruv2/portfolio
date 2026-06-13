import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

const heading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dhruv Patel | Full-Stack Developer",
  description:
    "Portfolio of Dhruv Patel, a full-stack developer focused on scalable systems, realtime products, and polished user experiences.",
  metadataBase: new URL("https://example.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}

