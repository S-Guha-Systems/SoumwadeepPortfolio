import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import Loading from "./loading";
import BootstrapClient from "@/components/BootstrapClient";
import Script from "next/script";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  display: "swap",
});

const themeInit = `
(() => {
  try {
    const getStored = () => localStorage.getItem('theme'); // 'light' | 'dark' | 'auto' | null
    const prefersDarkMql = window.matchMedia('(prefers-color-scheme: dark)');

    const resolve = (stored) => {
      if (stored === 'light' || stored === 'dark') return stored;
      return prefersDarkMql.matches ? 'dark' : 'light'; // treat null/'auto' as system
    };

    const apply = (mode) => {
      document.documentElement.setAttribute('data-bs-theme', mode);
    };

    // initial paint
    apply(resolve(getStored()));

    // react to system changes ONLY when stored is 'auto' or null
    const onChange = () => {
      const stored = getStored() || 'auto';
      if (stored === 'auto') apply(resolve('auto'));
    };

    // Cross-browser listeners (Safari compatibility)
    if (typeof prefersDarkMql.addEventListener === 'function') {
      prefersDarkMql.addEventListener('change', onChange);
    } else if (typeof prefersDarkMql.addListener === 'function') {
      prefersDarkMql.addListener(onChange);
    }

    // If the tab was backgrounded during a system change, fix on visibility
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) onChange();
    });
  } catch {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://next.soumwadeepguha.com"),
  title: {
    default: "Soumwadeep Guha",
    template: "%s | Soumwadeep Guha",
  },
  description:
    "A passionate Software & Full-Stack Developer with over 2.5 years of experience in building modern, scalable, and user-centric web applications. Skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase, and AWS, I love turning ideas into powerful digital solutions. Beyond development, I’m a Smart India Hackathon Winner and a Top 10 Finalist at the Top-10 Finalist at GSMA Hackathon,Google Solution Challenge and IIT HackFest, with multiple recognitions across national-level tech competitions. As an active tech speaker and community contributor, I enjoy sharing knowledge and exploring the intersection of creativity and technology to craft impactful web experiences.",
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
    title: "Soumwadeep Guha",
    description:
      "A passionate Software & Full-Stack Developer with over 2.5 years of experience in building modern, scalable, and user-centric web applications. Skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase, and AWS, I love turning ideas into powerful digital solutions. Beyond development, I’m a Smart India Hackathon Winner and a Top 10 Finalist at the Top-10 Finalist at GSMA Hackathon,Google Solution Challenge and IIT HackFest, with multiple recognitions across national-level tech competitions. As an active tech speaker and community contributor, I enjoy sharing knowledge and exploring the intersection of creativity and technology to craft impactful web experiences.",
    url: "https://next.soumwadeepguha.com",
    type: "website",
    locale: "en_US",
    siteName: "Soumwadeep Guha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumwadeep Guha",
    description:
      "A passionate Software & Full-Stack Developer with over 2.5 years of experience in building modern, scalable, and user-centric web applications. Skilled in Next.js, React, Bootstrap, MUI, C++, PostgreSQL, Firebase, and AWS, I love turning ideas into powerful digital solutions. Beyond development, I’m a Smart India Hackathon Winner and a Top 10 Finalist at the Top-10 Finalist at GSMA Hackathon,Google Solution Challenge and IIT HackFest, with multiple recognitions across national-level tech competitions. As an active tech speaker and community contributor, I enjoy sharing knowledge and exploring the intersection of creativity and technology to craft impactful web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Run before React hydrates */}
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInit }}
        />
      </head>
      <body className={`${josefinSans.className}`}>
        <div className="container">
          <MainNavbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <MainFooter />
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
