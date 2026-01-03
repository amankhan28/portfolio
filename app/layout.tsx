import type { Metadata } from "next";
import "../styles/globals.css";
import Navigation from "@/components/common/Navigation";
import { ThemeProvider } from "@/components/common/ThemeProvider";

export const metadata: Metadata = {
  title: "Aman Khan — Tech Lead",
  description: "Tech Lead with 8+ years of experience in full-stack web development, specializing in building scalable applications using React, Node.js, and Kubernetes.",
  icons: {
    icon: "/AK_Dark.png",
    apple: "/AK_Dark.png",
  },
  openGraph: {
    title: "Aman Khan — Tech Lead",
    description: "Tech Lead with 8+ years of experience in full-stack web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

