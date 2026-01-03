"use client";

import Link from "next/link";
import { Linkedin, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import ProfileImage from "@/components/common/ProfileImage";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scroll-mt-20 py-12 md:py-16 lg:py-20 min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4"
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Available for Opportunities
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Aman Khan
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Full Stack Engineer
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Tech Lead with 8+ years of experience in full-stack web development, specializing in building scalable applications using React, Node.js, and Kubernetes. Proven ability to lead cross-functional teams and deliver high-performance features.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/AmanKhan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FileText size={20} />
                  Resume
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aman-khan-57a0b67b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-xs mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 dark:opacity-20 scale-90"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl aspect-square w-full max-w-[280px] mx-auto">
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
  );
}

