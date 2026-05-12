import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael B. Oluwatimileyin | Fullstack & Mobile Developer",
  description:
    "Portfolio of Michael B. Oluwatimileyin — Fullstack Software Developer and Mobile Developer. Next.js, Node.js, TypeScript, Flutter, and React Native. Available for remote roles.",
  openGraph: {
    title: "Michael B. Oluwatimileyin | Fullstack & Mobile Developer",
    description:
      "Fullstack engineer with a mobile background — Next.js, Node.js, TypeScript, Flutter, React Native. iOS, Android, and web, end‑to‑end.",
    type: "website",
    siteName: "Michael B. Oluwatimileyin — Fullstack & Mobile Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael B. Oluwatimileyin | Fullstack & Mobile Developer",
    description:
      "Fullstack engineer shipping Next.js + Node.js services and Flutter / React Native apps for iOS and Android.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
