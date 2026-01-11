import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import Navigation from "@/components/common/Navigation";
import { ThemeProvider } from "@/components/common/ThemeProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amankhan.dev";
const profileImageUrl = process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || `${siteUrl}/images/profile.jpeg`;

// Viewport configuration (separated from metadata in Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // Primary Meta Tags
  title: {
    default: "Aman Khan — Frontend Developer | Tech Lead | Full Stack Engineer",
    template: "%s | Aman Khan - Frontend Developer",
  },
  description: "Aman Khan - Senior Frontend Developer & Tech Lead with 8+ years of experience in full-stack web development. Expert in React, Next.js, Node.js, and Kubernetes. Building scalable applications and leading high-performance engineering teams at Innovaccer.",
  
  // Comprehensive Keywords
  keywords: [
    // Name variations
    "Aman Khan",
    "Aman Khan Frontend",
    "Aman Khan Developer",
    "Aman Khan React",
    "Aman Khan Portfolio",
    "Aman Khan Tech Lead",
    "Aman Khan Software Engineer",
    
    // Job titles
    "Frontend Developer",
    "Senior Frontend Developer",
    "Tech Lead",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Lead Developer",
    
    // Technologies
    "React Developer",
    "React.js Developer",
    "Node.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Kubernetes Developer",
    "Docker Developer",
    
    // Skills
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Kubernetes",
    "Docker",
    "Microservices",
    "GraphQL",
    "REST API",
    "MongoDB",
    "Python",
    "AWS",
    
    // Companies
    "Innovaccer",
    "Collegedunia",
    "Newgen Software",
    
    // Location
    "India",
    "Delhi",
    "Developer India",
    "Frontend Developer India",
    "React Developer India",
    
    // Other
    "Portfolio",
    "Software Development",
    "Web Development",
    "Hire Frontend Developer",
    "IIIT Delhi",
  ],
  
  // Author Information
  authors: [
    { name: "Aman Khan", url: siteUrl },
    { name: "Aman Khan", url: "https://www.linkedin.com/in/khan-builds-tech" },
  ],
  creator: "Aman Khan",
  publisher: "Aman Khan",
  
  // Application Info
  applicationName: "Aman Khan Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  
  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Icons & Favicons
  icons: {
    icon: [
      { url: "/AK_Dark.png", sizes: "32x32", type: "image/png" },
      { url: "/AK_Dark.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/AK_Dark.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/AK_Dark.png",
  },
  
  // PWA Manifest
  manifest: "/site.webmanifest",
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aman Khan — Frontend Developer & Tech Lead",
    title: "Aman Khan — Frontend Developer | Tech Lead | React Expert",
    description: "Senior Frontend Developer & Tech Lead with 8+ years of experience. Expert in React, Next.js, Node.js, and Kubernetes. Currently at Innovaccer.",
    images: [
      {
        url: profileImageUrl,
        width: 1200,
        height: 630,
        alt: "Aman Khan - Senior Frontend Developer & Tech Lead",
        type: "image/jpeg",
      },
      {
        url: "/AK_Dark.png",
        width: 512,
        height: 512,
        alt: "Aman Khan Logo",
        type: "image/png",
      },
    ],
    countryName: "India",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@khanbuildstech",
    creator: "@khanbuildstech",
    title: "Aman Khan — Frontend Developer | Tech Lead",
    description: "Senior Frontend Developer & Tech Lead with 8+ years of experience in React, Next.js, Node.js, and Kubernetes.",
    images: {
      url: profileImageUrl,
      alt: "Aman Khan - Frontend Developer & Tech Lead",
    },
  },
  
  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification Tags
  verification: {
    google: "8KMBQbCOQYUPguTJwZ7yEUNJymvvZgdTbppubq0PyUA",
    // Add these when you set them up:
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Canonical & Alternates
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en": siteUrl,
    },
  },
  
  // Category
  category: "technology",
  
  // Additional Meta
  other: {
    // Geo tags for local SEO
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
    
    // Content info
    "content-language": "en-US",
    "revisit-after": "7 days",
    "rating": "General",
    
    // Pinterest
    "pinterest": "nopin",
    
    // MS Application
    "msapplication-TileColor": "#1f2937",
    "msapplication-config": "/browserconfig.xml",
    
    // Apple
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Aman Khan",
    
    // Format detection
    "format-detection": "telephone=no",
    
    // Author
    "author": "Aman Khan",
    "designer": "Aman Khan",
    "owner": "Aman Khan",
    "copyright": `© ${new Date().getFullYear()} Aman Khan. All rights reserved.`,
    
    // Classification
    "classification": "Portfolio, Technology, Software Development",
    "distribution": "Global",
    "target": "all",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider>
          <Navigation />
          <div className="overflow-x-hidden w-full max-w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
