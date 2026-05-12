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
  title: "Michael B. Oluwatimileyin | Mobile Developer",
  description:
    "Portfolio of Michael B. Oluwatimileyin — Mobile Developer specializing in iOS and Android apps with Flutter, React Native, and native tools. Available for remote roles.",
  openGraph: {
    title: "Michael B. Oluwatimileyin | Mobile Developer",
    description:
      "Portfolio of Michael B. Oluwatimileyin — Mobile Developer. iOS & Android apps, Flutter, React Native. Available for remote roles.",
    type: "website",
    siteName: "Michael B. Oluwatimileyin — Mobile Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael B. Oluwatimileyin | Mobile Developer",
    description:
      "Portfolio of Michael B. Oluwatimileyin — Mobile Developer building iOS & Android apps with Flutter, React Native, and native tools.",
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
