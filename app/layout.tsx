import type { Metadata } from "next";
import { Geist, Geist_Mono, Bona_Nova_SC } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BonaNovaSC = Bona_Nova_SC({
  weight: ["400", "700"],
  variable: "--font-bona-nova-sc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Carney",
  description: "Nick Carney's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" sizes="any" />
      </head>
      <body className="bona-nova-sc">{children}</body>
    </html>
  );
}
