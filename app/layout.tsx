import type { Metadata } from "next";
import "../styles/globals.css";
import Navigation from "@/components/common/Navigation";
import { ThemeProvider } from "@/components/common/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amankhan.dev"; // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aman Khan — Tech Lead | Full Stack Engineer",
    template: "%s | Aman Khan",
  },
  description: "Tech Lead with 8+ years of experience in full-stack web development, specializing in building scalable applications using React, Node.js, and Kubernetes. Proven ability to lead cross-functional teams and deliver high-performance features.",
  keywords: [
    "Aman Khan",
    "Tech Lead",
    "Full Stack Engineer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Kubernetes",
    "Microservices",
    "Portfolio",
    "Software Development",
    "Innovaccer",
    "Collegedunia",
    "Newgen Software",
  ],
  authors: [{ name: "Aman Khan" }],
  creator: "Aman Khan",
  publisher: "Aman Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/AK_Dark.png",
    apple: "/AK_Dark.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aman Khan — Tech Lead",
    title: "Aman Khan — Tech Lead | Full Stack Engineer",
    description: "Tech Lead with 8+ years of experience in full-stack web development, specializing in building scalable applications using React, Node.js, and Kubernetes.",
    images: [
      {
        url: `${siteUrl}/images/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Aman Khan - Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Khan — Tech Lead | Full Stack Engineer",
    description: "Tech Lead with 8+ years of experience in full-stack web development, specializing in React, Node.js, and Kubernetes.",
    images: [`${siteUrl}/images/profile.jpg`],
    creator: "@amankhan", // Update with your Twitter handle if available
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
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark overflow-x-hidden">
      <body className="bg-white dark:bg-gray-900 transition-colors duration-200 overflow-x-hidden w-full max-w-full">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

