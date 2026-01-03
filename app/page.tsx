"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Linkedin, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import ProfileImage from "@/components/common/ProfileImage";
import StructuredData from "@/components/seo/StructuredData";

interface Particle {
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: 1 + Math.random() * 2,
      }))
    );
  }, []);
  return (
    <>
      <StructuredData />
      <main className="overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20 py-8 sm:py-12 md:py-16 lg:py-20 min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 sm:mb-4"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                  Available for Opportunities
                </span>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Aman Khan
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                Full Stack Engineer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Tech Lead with 8+ years of experience in full-stack web development, specializing in building scalable applications using React, Node.js, and Kubernetes. Proven ability to lead cross-functional teams and deliver high-performance features.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link
                  href="/AmanKhan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <FileText size={18} className="sm:w-5 sm:h-5" />
                  Resume
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aman-khan-57a0b67b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  LinkedIn
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex items-center justify-center order-1 md:order-2 mb-4 md:mb-0"
            >
              <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] mx-auto">
                {/* Cyberpunk animated glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 dark:opacity-30 scale-90 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 dark:opacity-20 scale-95"></div>
                
                {/* Matrix-style particles effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    {particles.map((particle, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                          left: `${particle.left}%`,
                          top: `${particle.top}%`,
                          animationDelay: `${particle.animationDelay}s`,
                          animationDuration: `${particle.animationDuration}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="relative rounded-full overflow-hidden border-4 border-cyan-400/50 dark:border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.6),inset_0_0_30px_rgba(34,211,238,0.3)] aspect-square w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] mx-auto">
                  <ProfileImage />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <ExperienceTimeline />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Contact Section */}
      <ContactSection />
      </main>
    </>
  );
}

