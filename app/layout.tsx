import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Container } from "@mui/material";
import AppThemeProvider from "@/context/AppThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/components/globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
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
      "Soumwadeep Guha — Full-Stack Developer | Next.js, React, PostgreSQL, Firebase & AWS",
    description:
      "Explore the portfolio of Soumwadeep Guha — a passionate Full-Stack Developer skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase & AWS. Discover projects, hackathon wins, and a creative journey building smart, scalable web apps!",
    url: "https://soumwadeepguha.com",
    type: "website",
    locale: "en_US",
    siteName: "Soumwadeep Guha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Soumwadeep Guha — Full-Stack Developer | Next.js, React, PostgreSQL, Firebase & AWS",
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
    <html lang="en" className={josefinSans.variable} suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <InitColorSchemeScript attribute="class" />
            <main>
              <Container maxWidth="xl">
                <Navbar />
                {children}
                <Footer />
              </Container>
            </main>
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
