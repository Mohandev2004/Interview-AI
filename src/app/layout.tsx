import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import AppProviders from "@/components/layout/app-providers";
import type { ReactNode } from "react";

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var dark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://interview-ai.app"),
  title: {
    default: "Interview AI - Practice Mock Interviews with AI",
    template: "%s | Interview AI",
  },
  description: "Ace your next job interview with Interview AI. Practice coding and behavioral mock interviews with realistic real-time AI feedback and insights.",
  keywords: [
    "AI mock interview",
    "interview preparation",
    "coding interview practice",
    "behavioral interview preparation",
    "AI recruiter mock",
    "job interview simulator",
    "technical interview prep",
    "interview feedback",
  ],
  authors: [{ name: "Interview AI Team" }],
  creator: "Interview AI",
  publisher: "Interview AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://interview-ai.app",
    title: "Interview AI - Practice Mock Interviews with AI",
    description: "Ace your next job interview with Interview AI. Practice coding and behavioral mock interviews with realistic real-time AI feedback.",
    siteName: "Interview AI",
    images: [
      {
        url: "/image.jpeg",
        width: 1200,
        height: 630,
        alt: "Interview AI Mock Interview Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview AI - Practice Mock Interviews with AI",
    description: "Practice technical and behavioral mock interviews with live AI feedback and detailed insights.",
    images: ["/image.jpeg"],
    creator: "@interview_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google3c3c0f1ff3650234",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
