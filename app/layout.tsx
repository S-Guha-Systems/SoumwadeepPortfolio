import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import Loading from "./loading";
import BootstrapClient from "@/components/BootstrapClient";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soumwadeepguha.com"),
  title: {
    default: "Soumwadeep Guha",
    template: "%s | Soumwadeep Guha",
  },
  description:
    "Hi, I’m Soumwadeep Guha — a passionate Full-Stack Developer skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase & AWS. Explore my projects, hackathon wins, and creative tech journey building smart, scalable web apps!",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Soumwadeep Guha",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title:
      "Soumwadeep Guha — SoftwareDeveloper | Next.js, React, PostgreSQL, Firebase, AWS",
    description:
      "Explore the portfolio of Soumwadeep Guha — a passionate Full-Stack Developer skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase, AWS. Discover projects, hackathon wins, and a creative journey building smart, scalable web apps!",
    url: "https://soumwadeepguha.com",
    type: "website",
    locale: "en_US",
    siteName: "Soumwadeep Guha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Soumwadeep Guha — Software Developer | Next.js, React, PostgreSQL, Firebase, AWS",
    description:
      "Hi, I’m Soumwadeep Guha — a passionate Full-Stack Developer skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase & AWS. Explore my projects, hackathon wins, and creative tech journey building smart, scalable web apps!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.variable}`}>
        <div className="container">
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <BootstrapClient />
        </div>
      </body>
    </html>
  );
}
